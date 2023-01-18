import { userModel } from "../../../modules/shared/entities/user/userModel";
import { ISpreadsheet } from "./ISpreadsheet";

const API_KEY = 'AIzaSyCLgCXpD2pNBKDkVSOP3nUderJZiFj5SDI';

interface ISheet {
    majorDimension: string;
    range: string;
    values: string[][];
}

class GoogleSheet {

    private request = async (url: string, method: 'POST' | 'GET' | 'PUT', body?: string): Promise<any> => {
        const headers = { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + userModel.tokens?.accessToken };
        const response = await fetch(url, { method, body, headers });
        return await response;
    }

    readSheet = async (sheetId: string): Promise<any> => {
        const url = 'https://sheets.googleapis.com/v4/spreadsheets/' + sheetId;
        const response = await this.request(url, 'GET');
        const responseJson = await response.json();
        return responseJson;
    }

    createSheet = async (): Promise<ISpreadsheet> => {
        const body = {
            properties: { title: 'CompanyStandardsApp' },
            sheets: [{ properties: { title: 'Report', }, },],
        }
        const bodyJson = JSON.stringify(body);
        const url = 'https://sheets.googleapis.com/v4/spreadsheets';
        const response = await this.request(url, 'POST', bodyJson);
        const responseJson = await response.json();
        return responseJson;
    }

    read = async (sheetId: string, sheetName: string): Promise<ISheet | null> => {
        try {
            const url = 'https://sheets.googleapis.com/v4/spreadsheets/' + sheetId + '/values/' + sheetName + '?valueRenderOption=FORMATTED_VALUE&key=' + API_KEY;
            const response = await this.request(url, 'GET');
            const responseJson = await response.json();
            return responseJson;
        } catch (error) {
            console.warn('GoogleSheet -> read: ', error);
            return null;
        }
    }

    update = async (sheetId: string, sheetName: string, body: object, range: string): Promise<any> => {
        try {
            const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${sheetName}!${range}?valueInputOption=USER_ENTERED`;
            const bodyJson = JSON.stringify(body);
            const response = await this.request(url, 'PUT', bodyJson);
            const responseJson = await response.json();
            return responseJson;
        } catch (error) {
            console.warn('GoogleSheet -> read: ', error);
            return null;
        }
    }

    editRow = async (sheetId: string, body: object): Promise<any> => {
        try {
            const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}:batchUpdate`;
            const bodyJson = JSON.stringify(body);
            const response = await this.request(url, 'POST', bodyJson);
            const responseJson = await response.json();
            return responseJson;
        } catch (error) {
            console.warn('GoogleSheet -> read: ', error);
            return null;
        }
    }

}

export const googleSheet = new GoogleSheet();