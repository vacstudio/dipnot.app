const path = require("path");
const fs = require("fs/promises");
const sharp = require("sharp");

const WIDTH = 1200;
const HEIGHT = 630;
const BG = { r: 0x13, g: 0x1b, b: 0x26 };
const LOGO_HEIGHT = 440;
const LOGO_PATH = path.resolve(
  __dirname,
  "..",
  "img",
  "logos",
  "logo-white.svg",
);
const OUTPUT_PATH = path.resolve(
  __dirname,
  "..",
  "img",
  "og",
  "og-default.png",
);

async function main() {
  const logoSvg = await fs.readFile(LOGO_PATH);

  const logoPng = await sharp(logoSvg)
    .resize({ height: LOGO_HEIGHT })
    .png()
    .toBuffer();

  const { width: logoW, height: logoH } = await sharp(logoPng).metadata();

  await fs.mkdir(path.dirname(OUTPUT_PATH), { recursive: true });

  await sharp({
    create: {
      width: WIDTH,
      height: HEIGHT,
      channels: 3,
      background: BG,
    },
  })
    .composite([
      {
        input: logoPng,
        left: Math.round((WIDTH - logoW) / 2),
        top: Math.round((HEIGHT - logoH) / 2),
      },
    ])
    .removeAlpha()
    .png({ compressionLevel: 9 })
    .toFile(OUTPUT_PATH);

  const stat = await fs.stat(OUTPUT_PATH);
  console.log(
    `Wrote ${path.relative(process.cwd(), OUTPUT_PATH)} ` +
      `(${WIDTH}×${HEIGHT}, ${(stat.size / 1024).toFixed(1)} KB)`,
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
