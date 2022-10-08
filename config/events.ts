export enum EVENTS {
    INIT_APP = 'INIT_APP',
    INIT_PROFILE_STORE = 'INIT_PROFILE_STORE',
    INIT_DICTIONARY_STORE = 'INIT_DICTIONARY_STORE',
    INIT_PROVIDER_STORE = 'INIT_PROVIDER_STORE',
    INIT_WALLET_STORE = 'INIT_WALLET_STORE',
    INIT_APP_STORE = 'INIT_APP_STORE',
    INIT_BROWSER_STORE = 'INIT_BROWSER_STORE',
    CREATE_WALLET = 'CREATE_WALLET',
    LOAD_WALLET_FROM_STORAGE = 'LOAD_WALLET_FROM_STORAGE',
    INIT_WALLET = 'INIT_WALLET',
    UPDATE_BALANCE_FROM_PROVIDER = 'UPDATE_BALANCE_FROM_PROVIDER',
    GET_COIN_COST = 'GET_COIN_COST',
    GET_TOKEN_BALANCES = 'GET_TOKEN_BALANCES',
    LOAD_TRANSACTIONS = 'LOAD_TRANSACTIONS',
    LOAD_ERC20_TRANSACTIONS = 'LOAD_ERC20_TRANSACTIONS',
    GET_TRANSACTION_DATA = 'GET_TRANSACTION_DATA',
    SEND_TRANSACTION = 'SEND_TRANSACTION',
    WAIT_TRANSACTION = 'WAIT_TRANSACTION',
    CANCEL_TRANSACTION = 'CANCEL_TRANSACTION',
    SPEED_UP_TRANSACTION = 'SPEED_UP_TRANSACTION'
}

export const APPLICATION_NAME = 'wootzapp'

export enum MARKETING_EVENTS {
    OPEN_APP = 'OPEN_APP',
    CLOSE_APP = 'CLOSE_APP',
    DELETE_APP = 'DELETE_APP',
    WOOTZAPP_ID_BOT_CLICK = 'WOOTZAPP_ID_BOT_CLICK',
    WOOTZAPP_ID_BOT_CLICK_OPEN_GOOGLE_PLAY = 'WOOTZAPP_ID_BOT_CLICK_OPEN_GOOGLE_PLAY',
    WOOTZAPP_ID_BOT_CLICK_OPEN_TELEGRAM = 'WOOTZAPP_ID_BOT_CLICK_OPEN_TELEGRAM',
    WOOTZAPP_ID_BOT_SKIP = 'WOOTZAPP_ID_BOT_SKIP',
    WOOTZAPP_ID_BOT_SIGN_UP = 'WOOTZAPP_ID_BOT_SIGN_UP',
    WOOTZAPP_ID_BOT_NEXT = 'WOOTZAPP_ID_BOT_NEXT',
    SIGN_IN_WITH_ANOTHER_WALLET = 'SIGN_IN_WITH_ANOTHER_WALLET',
    SIGN_IN_WITH_ANOTHER_WALLET_SUCCESSFUL = 'SIGN_IN_WITH_ANOTHER_WALLET_SUCCESSFUL',
    CREATE_NEW_WALLET = 'CREATE_NEW_WALLET',
    CREATE_NEW_WALLET_SUCCESSFUL = 'CREATE_NEW_WALLET_SUCCESSFUL',
    ENTER_PIN_CODE = 'ENTER_PIN_CODE',
    CREATE_NEW_ADDRESS = 'CREATE_NEW_ADDRESS',
    CREATE_NEW_ADDRESS_SUCCESSFUL = 'CREATE_NEW_ADDRESS_SUCCESSFUL',
    SENT_TRANSACTION = 'SENT_TRANSACTION',
    SENT_TRANSACTION_SUCCESSFUL = 'SENT_TRANSACTION_SUCCESSFUL',
    RECEIVE_TRANSACTION = 'RECEIVE_TRANSACTION',
    BROWSER_ICON = 'BROWSER_ICON',
    SETTINGS_ICON = 'SETTINGS_ICON',
    WALLET_ICON = 'WALLET_ICON',
    SETTINGS_WOOTZAPP_ID = 'SETTINGS_WOOTZAPP_ID',
    SETTINGS_RECOVERY_PHRASE = 'SETTINGS_RECOVERY_PHRASE',
    SETTINGS_CURRENCY = 'SETTINGS_CURRENCY',
    SETTINGS_NETWORK = 'SETTINGS_NETWORK',
    SETTINGS_SIGN_OUT = 'SETTINGS_SIGN_OUT'
}

export const MARKETING_CATEGORY = {
    SIGN_UP_WITH_WOOTZAPP_ID: [
        MARKETING_EVENTS.OPEN_APP, MARKETING_EVENTS.CLOSE_APP, MARKETING_EVENTS.DELETE_APP, MARKETING_EVENTS.WOOTZAPP_ID_BOT_CLICK,
        MARKETING_EVENTS.WOOTZAPP_ID_BOT_CLICK_OPEN_GOOGLE_PLAY, MARKETING_EVENTS.WOOTZAPP_ID_BOT_CLICK_OPEN_TELEGRAM,
        MARKETING_EVENTS.WOOTZAPP_ID_BOT_SKIP, MARKETING_EVENTS.WOOTZAPP_ID_BOT_SIGN_UP, MARKETING_EVENTS.WOOTZAPP_ID_BOT_NEXT
    ],
    GENERAL_SIGN_UP_SIGN_IN: [
        MARKETING_EVENTS.SIGN_IN_WITH_ANOTHER_WALLET,
        MARKETING_EVENTS.SIGN_IN_WITH_ANOTHER_WALLET_SUCCESSFUL,
        MARKETING_EVENTS.CREATE_NEW_WALLET,
        MARKETING_EVENTS.CREATE_NEW_WALLET_SUCCESSFUL,
        MARKETING_EVENTS.ENTER_PIN_CODE
    ],
    WALLET_PAGE: [
        MARKETING_EVENTS.CREATE_NEW_ADDRESS,
        MARKETING_EVENTS.CREATE_NEW_ADDRESS_SUCCESSFUL,
        MARKETING_EVENTS.SENT_TRANSACTION,
        MARKETING_EVENTS.SENT_TRANSACTION_SUCCESSFUL,
        MARKETING_EVENTS.RECEIVE_TRANSACTION,
        MARKETING_EVENTS.BROWSER_ICON,
        MARKETING_EVENTS.SETTINGS_ICON,
        MARKETING_EVENTS.WALLET_ICON,
    ],
    SETTINGS_PAGE: [
        MARKETING_EVENTS.SETTINGS_WOOTZAPP_ID,
        MARKETING_EVENTS.SETTINGS_RECOVERY_PHRASE,
        MARKETING_EVENTS.SETTINGS_CURRENCY,
        MARKETING_EVENTS.SETTINGS_NETWORK,
        MARKETING_EVENTS.SETTINGS_SIGN_OUT
    ]
}

export function getGroup(event: MARKETING_EVENTS) {
    switch (true) {
        case MARKETING_CATEGORY.SIGN_UP_WITH_WOOTZAPP_ID.includes(event):
            return 'SIGN_UP_WITH_WOOTZAPP_ID'
        case MARKETING_CATEGORY.GENERAL_SIGN_UP_SIGN_IN.includes(event):
            return 'GENERAL_SIGN_UP_SIGN_IN'
        case MARKETING_CATEGORY.WALLET_PAGE.includes(event):
            return 'WALLET_PAGE'
        case MARKETING_CATEGORY.SETTINGS_PAGE.includes(event):
            return 'SETTINGS_PAGE'
        default:
            return "WITHOUT_GROUP"
    }
}