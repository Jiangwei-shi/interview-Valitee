/* 
    * ts图片声明导入文件
*/
declare module '*.svg'
declare module '*.png'{
    const value: any;
    export = value;
}
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.gif'
declare module '*.bmp'
declare module '*.tiff'