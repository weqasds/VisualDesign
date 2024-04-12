import * as xlsx from "xlsx";
import { onMounted } from "vue";
import { rejects } from "assert";
import { da } from "element-plus/es/locale";
const loadFile = async (url: string) => {
    return (await fetch("https://sheetjs.com/data/PortfolioSummary.xls")).arrayBuffer()
};
export function useExcel(url: string, readOpt: xlsx.ParsingOptions = {} as xlsx.ParsingOptions) {

    let file = {} as ArrayBuffer;
    loadFile(url).then((res) => {
        file = res;
    })

    let excel = xlsx.read(file);
    console.log(excel)
    /**  
    * 获取Excel工作表的属性，包括数据键和数据内容。  
    *  
    * @returns 返回一个对象，包含以下属性： 
    * - header string: 当前表的标题 
    * - dataKeys {string[]}：Excel工作表中的数据键数组。  
    * - data {any[]}：Excel工作表中的数据内容数组。  
    */
    function getSheetProp() {
        let header: string = excel.SheetNames[0]
        let dataKeys: string[] = getSheetdataKey(excel.Sheets[excel.SheetNames[0]]);
        let data = getSheetData(excel.Sheets[excel.SheetNames[0]]);
        console.log(data)
        return {
            header,
            dataKeys,
            data
        }
    }
    function getSheetdataKey(sheet: xlsx.Sheet) {
        if (!sheet || !sheet['!ref']) return [];
        const headers: string[] = [];
        // A3:B7=>{s:{c:0, r:2}, e:{c:1, r:6}}
        const range: xlsx.Range = xlsx.utils.decode_range(sheet['!ref']);
        const R = range.s.r;
        /* start in the first row */
        for (let C = range.s.c; C <= range.e.c; ++C) {
            /* walk every column in the range */
            const cell = sheet[xlsx.utils.encode_cell({ c: C, r: R })];
            /* find the cell in the first row */
            let hdr = C as unknown as string; // <-- replace with your desired default
            if (cell && cell.t) hdr = xlsx.utils.format_cell(cell);
            headers.push(hdr);
        }
        return headers;
    }
    function getSheetData(sheet: xlsx.Sheet, opts: xlsx.Sheet2JSONOpts = {
        raw: true
    }): object[] {
        if (!sheet || !sheet['!ref']) return [] as object[];
        let data = xlsx.utils.sheet_to_json(sheet, opts) as object[];
        return data;
    }
    return {
        getSheetProp,
        getSheetdataKey,
        getSheetData
    }
}