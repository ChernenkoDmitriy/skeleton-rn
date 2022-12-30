import { I18n } from 'i18n-js';
import { translations } from './Translations';
import { ILocalization } from './ILocalization';
import { IRepository } from '../../repository/IRepository';
import { MobXRepository } from '../../repository/MobXRepository';
import { IStorage, storage } from '../../libs/storage';
import { getLocales } from "react-native-localize";

class Localization implements ILocalization {
    private i18n!: I18n

    constructor(private localizationStore: IRepository<string>, private storage: IStorage) {
        this.i18n = new I18n();
        this.i18n.enableFallback = true;
        this.i18n.translations = translations;
        this.load().then(() => this.setLanguageByDeviceLocale());
    }

    private setLanguageByDeviceLocale(defaultLocale: string = 'en') {
        try {
            if (!this.localizationStore.data) {
                const deviceLocale = getLocales()?.[0]?.languageCode || '';
                const isLanguageIncludes = Object.keys(translations).includes(deviceLocale);
                if (isLanguageIncludes && deviceLocale) {
                    this.setLocale(deviceLocale);
                } else {
                    this.setLocale(defaultLocale);
                }
            }
        } catch (error) {
            console.warn('Localization -> setLanguageByDeviceLocale: ', error);
        }
    }

    private load = async () => {
        this.storage.get('LANGUAGE')
            .then(data => { data && this.localizationStore.save(data); })
            .catch(error => console.warn('Localization -> load: ', error));
        this.storage.get('TRANSLATIONS')
            .then(data => { if (data) { this.i18n.translations = data; } })
            .catch(error => console.warn('Localization:TRANSLATIONS -> load: ', error));
    }

    private persistLanguage = (data: string | null) => {
        if (data) {
            this.storage.set('LANGUAGE', data);
        } else {
            this.storage.remove('LANGUAGE');
        }
    }

    private persistTranslations = (data: object) => {
        if (data) {
            this.storage.set('TRANSLATIONS', data);
        }
    }

    get locales() {
        return Object.keys(this.i18n.translations);
    }

    get locale() {
        return this.localizationStore.data || 'en';
    }

    setTranslation = (translations: any) => {
        if (typeof translations === 'object' && translations) {
            this.i18n.translations = translations;
            this.persistTranslations(translations);
        }
    }

    t = (key: string) => {
        const locale = this.localizationStore.data;
        return this.i18n.t(key, { locale: locale });
    }

    setLocale = (locale: string) => {
        this.localizationStore.save(locale);
        this.persistLanguage(locale);
    }

}

const localizationStore = new MobXRepository<string>();
export const localization = new Localization(localizationStore, storage);
