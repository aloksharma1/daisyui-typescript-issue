import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer'
import postcssImport from 'postcss-import';
export const plugins = [[tailwindcss('./tailwind.config.ts'), autoprefixer,postcssImport()]];
export default {
    plugins: plugins
};
