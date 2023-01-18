export interface ISpreadsheet {
    spreadsheetId?: string;
    properties?: {
        title?: string;
        locale?: string;
        autoRecalc?: string;
        timeZone?: string;
        defaultFormat?: object;
        iterativeCalculationSettings?: object;
        spreadsheetTheme?: object;
    };
    spreadsheetTheme?: object;
    sheets?: Array<{
        properties: {
            sheetId: number;
            title: string;
            index: number;
            sheetType: string;
            gridProperties: { rowCount: number; columnCount: number; };
        };
    }>
};
