import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,

  // Fixa a raiz do workspace. Sem isso, o Turbopack pode inferir um diretório
  // acima daqui quando existe outro lockfile no caminho (ex.: no home do usuário).
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
