import { Button, Checkbox, Chip, Colors, Text, View } from "react-native-ui-lib";
import { Screen } from "../../../components"
import React, { useEffect } from "react";
import { t } from "../../../i18n";
import { Header } from "../../../components/header/Header";
import { makeAutoObservable } from "mobx";
import { getAppStore, getBannerStore, getWalletStore } from "../../../App";
import { provider, useInstance } from "react-ioc";
import { observer } from "mobx-react-lite";
import RecoveryImage from "../../../assets/images/recovery.svg"
import { localStorage } from "../../../utils/localStorage";
import Cryptr from "react-native-cryptr"

export class RecoveryPhraseViewModel {
    understandRisc = false
    showRecoveryPhrase = false
    mnemonic

    constructor() {
        makeAutoObservable(this)
    }

    get recoveryPhrase() {
        return getWalletStore()?.storedWallets?.mnemonic?.mnemonic.split(" ") || this.mnemonic.split(" ")
    }

    async init() {
        if (!getWalletStore()?.storedWallets?.mnemonic?.mnemonic) {
            const encrypted = await localStorage.load("hm-wallet")
            if (encrypted) {
                const cryptr = new Cryptr(getAppStore().savedPin)
                const result = cryptr.decrypt(encrypted)
                const res = JSON.parse(result)
                this.mnemonic = res.mnemonic.mnemonic
            }
        }
    }
}

export const RecoveryPhrase = observer(() => {

    const view = useInstance(RecoveryPhraseViewModel)

    useEffect(() => {
        view.init()
    }, [])

    return <Screen preset={"scroll"} style={{ minHeight: "100%" }}
        statusBarBg={Colors.white} backgroundColor={Colors.white}>
        <Header title={!view.showRecoveryPhrase ? t("settingsScreen.menu.recoveryPhrase") : undefined} />
        {!view.showRecoveryPhrase && <View flex paddingV-20 testID={'recoveryPhrasePage-1'}>
            <View row center>
                <RecoveryImage />
            </View>
            <View row padding-16 paddingT-30>
                <Text text16 robotoR>
                    {t("settingsScreen.menu.recoveryDescription")}
                </Text>
            </View>
            <View row paddingH-16>
                <Checkbox testID={'understandRisc'} value={view.understandRisc}
                    onValueChange={() => {
                        view.understandRisc = !view.understandRisc
                    }
                    } label={t("settingsScreen.menu.recoveryWarning")} />
            </View>
            <View flex bottom paddingH-16 paddingT-16>
                <Button testID={'showRecoveryPhrase'} onPress={async () => {
                    view.showRecoveryPhrase = true
                    await localStorage.save("hm-wallet-recovery-read", true)
                    // getBannerStore().setSuggest(BANNERS_NAMES.CHECK_SEED, true)
                }} disabled={!view.understandRisc} br50 label={t("settingsScreen.menu.recoveryBtn")} absB />
            </View>
        </View>
        }
        {view.showRecoveryPhrase &&
            <View flex paddingV-20 testID={'recoveryPhrasePage-2'}>
                <View row paddingH-16>
                    <Text text16 robotoM>
                        {t("settingsScreen.menu.recoveryPhrase")}
                    </Text>
                </View>
                <View row padding-16>
                    <Text text16 robotoR textGrey>
                        {t("settingsScreen.menu.recoveryPhraseDescription")}
                    </Text>
                </View>
                <View style={{ flexWrap: "wrap" }} center row padding-20>
                    {
                        view.recoveryPhrase.map((i, id) => <Chip margin-5 padding-6
                            labelStyle={{
                                fontSize: 14,
                                lineHeight: 22,
                                fontFamily: "Roboto-Medium",
                                color: Colors.blueOcean
                            }}
                            containerStyle={{
                                borderColor: Colors.transparent,
                                backgroundColor: Colors.greyLight,
                                borderRadius: 14,
                            }}
                            leftElement={
                                <Text marginL-10 style={{
                                    fontSize: 14,
                                    lineHeight: 22,
                                    fontFamily: "Roboto-Medium",
                                    color: Colors.textGrey
                                }}>{id + 1}</Text>
                            }
                            key={`${i}`}
                            label={` ${i}`} />
                        )
                    }
                </View>
                <View flex bottom marginT-20>
                    <View row absB centerV>
                        <View style={{ backgroundColor: Colors.rgba(Colors.error, 0.07) }}
                            width={32}
                            height={32}
                            padding-6
                            marginL-16
                            center
                            br100>

                        </View>
                        <Text flex-1 marginL-8 marginR-16>
                            {t("settingsScreen.menu.recoveryPhraseWarning")}
                        </Text>
                    </View>
                </View>
            </View>
        }

    </Screen>
})

export const RecoveryPhrasePage = provider()(RecoveryPhrase)
RecoveryPhrasePage.register(RecoveryPhraseViewModel)