import { CSVIcon } from "./fileIcons/csvIcon"
import { DOCIcon } from "./fileIcons/docIcon"
import { JPGIcon } from "./fileIcons/jpgIcon"
import { Mp3Icon } from "./fileIcons/mp3File"
import { Mp4Icon } from "./fileIcons/mp4Icon"
import { PDFIcon } from "./fileIcons/pdfIcon"
import { PNGIcon } from "./fileIcons/pngIcon"
import { PPTIcon } from "./fileIcons/pptIcon"
import { PSDIcon } from "./fileIcons/psdIcon"
import { RARIcon } from "./fileIcons/rarIcon"
import { UndefinedFileIcon } from "./fileIcons/undefinedFileIcon"
import { XLSIcon } from "./fileIcons/xlsIcon"
import { ZIPIcon } from "./fileIcons/zipIcon"

const ICONS = {
    pdf: PDFIcon,
    ppt: PPTIcon,
    doc: DOCIcon,
    docx: DOCIcon,
    jpg: JPGIcon,
    png: PNGIcon,
    xls: XLSIcon,
    xlsx: XLSIcon,
    csv: CSVIcon,
    psd: PSDIcon,
    rar: RARIcon,
    zip: ZIPIcon,
    mp3: Mp3Icon,
    mp4: Mp4Icon,
    undefined: UndefinedFileIcon,
}

export const useFileIcon = (name: string | null | undefined) => {
    if (typeof name === 'string') {
        const blocks = name.split('.');
        const format = blocks[blocks.length - 1];
        // @ts-ignore
        return ICONS[format] || ICONS.undefined;
    }
    return ICONS.undefined;
}

export const getFileFormat = (name: string | null | undefined) => {
    let format = '';
    if (typeof name === 'string') {
        const blocks = name.split('.');
        format = blocks[blocks.length - 1] || '';
    }
    return format;
}