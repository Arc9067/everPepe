/**
 * Storage key used to store the user settings.
 * @see https://github.com/flooz-link/flooz-web/blob/develop/src/shared/utils/storage-utils.ts
 */
const lightModeStorageKey = 'flooz-storage-v1-settings';

/**
 * Class name used to update the color themes.
 * @see https://github.com/flooz-link/flooz-web/blob/develop/src/shared/hooks/use-light-mode.ts
 */
const lightModeClass = 'light-mode';

/**
 * Function that checks if the LocalStorage utilities are supported.
 * @returns True if the LocalStorage is supported, false otherwise
 */
const isLocalStorageSupported = () => {
    const testKey = 'test-key';
    const testValue = 'test-value';

    try {
        localStorage.setItem(testKey, testValue);

        if (localStorage.getItem(testKey) === testValue) {
            localStorage.removeItem(testKey);

            return true;
        }

        return false;
    } catch (err) {
        return false;
    }
};

/**
 * Function to check if the application is on an embedded context.
 * @returns True if the code is running on an embedded context, false otherwise.
 */
const isEmbeddedWidget = () => window.location.href.includes('embed');

/**
 * Safely parsed the data passed as input
 * @param {*} rawData Data string to be parsed
 * @returns The data parsed as a JSON object or undefined if data is not valid.
 */
const safeJsonParse = (rawData) => {
    try {
        const data = JSON.parse(rawData);

        return data;
    } catch (error) {
        return undefined;
    }
};

/**
 * The function checks the user local storage to check if he's using a light-mode theme or not and removes / add the
 * related light-mode class from the document tag (defaults to light-mode).
 * The light-mode initialisation is performed by a "beforeInteractive" NextJs script in order to avoid a flash of
 * light / dark mode.
 */
initLightMode = () => {
    // Do nothing if we are on the embedded context or local-storage is not supported.
    if (!isLocalStorageSupported() || isEmbeddedWidget()) {
        return;
    }

    // Parse user settings and default to light-mode
    const settings = window.localStorage.getItem(lightModeStorageKey);
    const parsedSettings = safeJsonParse(settings);
    const isLightMode = parsedSettings?.useLightMode ?? true;

    // Remove or add the light-mode class from the document tag.
    if (isLightMode) {
        document.documentElement.classList.add(lightModeClass);
    } else {
        document.documentElement.classList.remove(lightModeClass);
    }
};

initLightMode();
