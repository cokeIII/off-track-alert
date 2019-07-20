"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var card_io_common_1 = require("./card-io.common");
var app = require("tns-core-modules/application");
var color_1 = require("tns-core-modules/color");
var CardIOActivity = io.card.payment.CardIOActivity;
// var CardType = io.card.payment.CardType;
// var CreditCard = io.card.payment.CreditCard;
// var StringKey = io.card.payment.i18n.StringKey;
// var SupportedLocale = io.card.payment.i18n.SupportedLocale;
// var LocalizedStringsList = io.card.payment.i18n.locales.LocalizedStringsList;
var REQUEST_SCAN = 100;
var CardIo = (function (_super) {
    __extends(CardIo, _super);
    function CardIo() {
        return _super.call(this) || this;
    }
    CardIo.prototype.scan = function (options) {
        return new Promise(function (resolve, reject) {
            app.android.on(app.AndroidApplication.activityResultEvent, function (args) {
                if (args.requestCode === REQUEST_SCAN && args.intent != null && args.intent.hasExtra(CardIOActivity.EXTRA_SCAN_RESULT)) {
                    var result = args.intent.getParcelableExtra(CardIOActivity.EXTRA_SCAN_RESULT);
                    if (result != null) {
                        var cardType_1 = result.getCardType();
                        var data = {
                            describeContents: result.describeContents(),
                            cardType: {
                                cvvLength: cardType_1.cvvLength(),
                                fromCardNumber: function (numStr) { return cardType_1.fromCardNumber(numStr); },
                                fromString: function (typeStr) { return cardType_1.fromString(typeStr); },
                                displayName: function (languageOrLocale) { return cardType_1.getDisplayName(languageOrLocale); },
                                imageBitmap: cardType_1.imageBitmap(app.android.context),
                                numberLength: cardType_1.numberLength(),
                                content: cardType_1.toString(),
                                valueOf: function (name) { return cardType_1.valueOf(name); }
                            },
                            formattedCardNumber: result.getFormattedCardNumber(),
                            lastFourDigitsOfCardNumber: result.getLastFourDigitsOfCardNumber(),
                            redactedCardNumber: result.getRedactedCardNumber(),
                            isExpiryValid: result.isExpiryValid(),
                            content: result.toString()
                        };
                        resolve(data);
                    }
                    else {
                        reject('error result');
                    }
                }
                else {
                    reject('error');
                }
                app.android.off(app.AndroidApplication.activityResultEvent);
            });
            var scanIntent = new android.content.Intent(app.android.context, CardIOActivity.class);
            if (options.android.noCamera !== undefined) {
                scanIntent.putExtra(CardIOActivity.EXTRA_NO_CAMERA, options.android.noCamera);
            }
            if (options.android.requireExpiry !== undefined) {
                scanIntent.putExtra(CardIOActivity.EXTRA_REQUIRE_EXPIRY, options.android.requireExpiry);
            }
            if (options.android.scanExpiry !== undefined) {
                scanIntent.putExtra(CardIOActivity.EXTRA_SCAN_EXPIRY, options.android.scanExpiry);
            }
            if (options.android.requireCvv !== undefined) {
                scanIntent.putExtra(CardIOActivity.EXTRA_REQUIRE_CVV, options.android.requireCvv);
            }
            if (options.android.requirePostalCode !== undefined) {
                scanIntent.putExtra(CardIOActivity.EXTRA_REQUIRE_POSTAL_CODE, options.android.requirePostalCode);
            }
            if (options.android.restrictPostalCodeToNumericOnly !== undefined) {
                scanIntent.putExtra(CardIOActivity.EXTRA_RESTRICT_POSTAL_CODE_TO_NUMERIC_ONLY, options.android.restrictPostalCodeToNumericOnly);
            }
            if (options.android.requireCardholderName !== undefined) {
                scanIntent.putExtra(CardIOActivity.EXTRA_REQUIRE_CARDHOLDER_NAME, options.android.requireCardholderName);
            }
            if (options.android.suppressManualEntry !== undefined) {
                scanIntent.putExtra(CardIOActivity.EXTRA_SUPPRESS_MANUAL_ENTRY, options.android.suppressManualEntry);
            }
            if (options.android.useCardioLogo !== undefined) {
                scanIntent.putExtra(CardIOActivity.EXTRA_USE_CARDIO_LOGO, options.android.useCardioLogo);
            }
            if (options.android.languageOrLocale !== undefined) {
                scanIntent.putExtra(CardIOActivity.EXTRA_LANGUAGE_OR_LOCALE, options.android.languageOrLocale);
            }
            if (options.android.usePaypalActionbarIcon !== undefined) {
                scanIntent.putExtra(CardIOActivity.EXTRA_USE_PAYPAL_ACTIONBAR_ICON, options.android.usePaypalActionbarIcon);
            }
            if (options.android.keepApplicationTheme !== undefined) {
                scanIntent.putExtra(CardIOActivity.EXTRA_KEEP_APPLICATION_THEME, options.android.keepApplicationTheme);
            }
            if (options.android.guideColor !== undefined) {
                var color = new color_1.Color(options.android.guideColor).android;
                scanIntent.putExtra(CardIOActivity.EXTRA_GUIDE_COLOR, color);
            }
            if (options.android.suppressConfirmation !== undefined) {
                scanIntent.putExtra(CardIOActivity.EXTRA_SUPPRESS_CONFIRMATION, options.android.suppressConfirmation);
            }
            if (options.android.suppressScan !== undefined) {
                scanIntent.putExtra(CardIOActivity.EXTRA_SUPPRESS_SCAN, options.android.suppressScan);
            }
            if (options.android.returnCardImage !== undefined) {
                scanIntent.putExtra(CardIOActivity.EXTRA_RETURN_CARD_IMAGE, options.android.returnCardImage);
            }
            if (options.android.unblurDigits !== undefined) {
                scanIntent.putExtra(CardIOActivity.EXTRA_UNBLUR_DIGITS, options.android.unblurDigits);
            }
            if (options.android.hideCardioLogo !== undefined) {
                scanIntent.putExtra(CardIOActivity.EXTRA_HIDE_CARDIO_LOGO, options.android.hideCardioLogo);
            }
            app.android.foregroundActivity.startActivityForResult(scanIntent, REQUEST_SCAN);
        });
    };
    return CardIo;
}(card_io_common_1.Common));
exports.CardIo = CardIo;
//# sourceMappingURL=card-io.js.map