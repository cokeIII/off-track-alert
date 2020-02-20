"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function networkProviderByMccMnc(mcc, mnc) {
    mnc = mnc.length === 1 ? "0" + mnc : mnc;
    return exports.jsonMccMnc.find(function (provider) {
        return provider.mcc === mcc && provider.mnc === mnc;
    });
}
exports.networkProviderByMccMnc = networkProviderByMccMnc;
function networkProviderByMcc(mcc) {
    return exports.jsonMccMnc.find(function (provider) {
        return provider.mcc === mcc;
    });
}
exports.networkProviderByMcc = networkProviderByMcc;
exports.jsonMccMnc = [
    {
        "network": "A-Mobile",
        "country": "Abkhazia",
        "mcc": "289",
        "iso": "ge",
        "country_code": "7",
        "mnc": "88"
    },
    {
        "network": "A-Mobile",
        "country": "Abkhazia",
        "mcc": "289",
        "iso": "ge",
        "country_code": "7",
        "mnc": "68"
    },
    {
        "network": "Aquafon",
        "country": "Abkhazia",
        "mcc": "289",
        "iso": "ge",
        "country_code": "7",
        "mnc": "67"
    },
    {
        "network": "Afghan Telecom Corp. (AT)",
        "country": "Afghanistan",
        "mcc": "412",
        "iso": "af",
        "country_code": "93",
        "mnc": "88"
    },
    {
        "network": "Afghan Telecom Corp. (AT)",
        "country": "Afghanistan",
        "mcc": "412",
        "iso": "af",
        "country_code": "93",
        "mnc": "80"
    },
    {
        "network": "Afghan Wireless/AWCC",
        "country": "Afghanistan",
        "mcc": "412",
        "iso": "af",
        "country_code": "93",
        "mnc": "01"
    },
    {
        "network": "Areeba/MTN",
        "country": "Afghanistan",
        "mcc": "412",
        "iso": "af",
        "country_code": "93",
        "mnc": "40"
    },
    {
        "network": "Etisalat ",
        "country": "Afghanistan",
        "mcc": "412",
        "iso": "af",
        "country_code": "93",
        "mnc": "30"
    },
    {
        "network": "Etisalat ",
        "country": "Afghanistan",
        "mcc": "412",
        "iso": "af",
        "country_code": "93",
        "mnc": "50"
    },
    {
        "network": "Roshan/TDCA ",
        "country": "Afghanistan",
        "mcc": "412",
        "iso": "af",
        "country_code": "93",
        "mnc": "20"
    },
    {
        "network": "WaselTelecom (WT)",
        "country": "Afghanistan",
        "mcc": "412",
        "iso": "af",
        "country_code": "93",
        "mnc": "03"
    },
    {
        "network": "AMC/Cosmote",
        "country": "Albania",
        "mcc": "276",
        "iso": "al",
        "country_code": "355",
        "mnc": "01"
    },
    {
        "network": "Eagle Mobile",
        "country": "Albania",
        "mcc": "276",
        "iso": "al",
        "country_code": "355",
        "mnc": "03"
    },
    {
        "network": "PLUS Communication Sh.a",
        "country": "Albania",
        "mcc": "276",
        "iso": "al",
        "country_code": "355",
        "mnc": "04"
    },
    {
        "network": "Vodafone ",
        "country": "Albania",
        "mcc": "276",
        "iso": "al",
        "country_code": "355",
        "mnc": "02"
    },
    {
        "network": "ATM Mobils",
        "country": "Algeria",
        "mcc": "603",
        "iso": "dz",
        "country_code": "213",
        "mnc": "01"
    },
    {
        "network": "Orascom / DJEZZY",
        "country": "Algeria",
        "mcc": "603",
        "iso": "dz",
        "country_code": "213",
        "mnc": "02"
    },
    {
        "network": "Oreedo/Wataniya / Nedjma ",
        "country": "Algeria",
        "mcc": "603",
        "iso": "dz",
        "country_code": "213",
        "mnc": "03"
    },
    {
        "network": "Blue Sky Communications",
        "country": "American Samoa",
        "mcc": "544",
        "iso": "as",
        "country_code": "684",
        "mnc": "11"
    },
    {
        "network": "Mobiland",
        "country": "Andorra",
        "mcc": "213",
        "iso": "ad",
        "country_code": "376",
        "mnc": "03"
    },
    {
        "network": "MoviCel",
        "country": "Angola",
        "mcc": "631",
        "iso": "ao",
        "country_code": "244",
        "mnc": "04"
    },
    {
        "network": "Unitel",
        "country": "Angola",
        "mcc": "631",
        "iso": "ao",
        "country_code": "244",
        "mnc": "02"
    },
    {
        "network": "Cable and Wireless",
        "country": "Anguilla",
        "mcc": "365",
        "iso": "ai",
        "country_code": "1264",
        "mnc": "840"
    },
    {
        "network": "Digicell / Wireless Vent. Ltd ",
        "country": "Anguilla",
        "mcc": "365",
        "iso": "ai",
        "country_code": "1264",
        "mnc": "010"
    },
    {
        "network": "APUA PCS",
        "country": "Antigua and Barbuda",
        "mcc": "344",
        "iso": "ag",
        "country_code": "1268",
        "mnc": "030"
    },
    {
        "network": "C & W",
        "country": "Antigua and Barbuda",
        "mcc": "344",
        "iso": "ag",
        "country_code": "1268",
        "mnc": "920"
    },
    {
        "network": "DigiCel/Cing. Wireless",
        "country": "Antigua and Barbuda",
        "mcc": "344",
        "iso": "ag",
        "country_code": "1268",
        "mnc": "930"
    },
    {
        "network": "Claro/ CTI/AMX",
        "country": "Argentina Republic",
        "mcc": "722",
        "iso": "ar",
        "country_code": "54",
        "mnc": "310"
    },
    {
        "network": "Claro/ CTI/AMX",
        "country": "Argentina Republic",
        "mcc": "722",
        "iso": "ar",
        "country_code": "54",
        "mnc": "320"
    },
    {
        "network": "Claro/ CTI/AMX",
        "country": "Argentina Republic",
        "mcc": "722",
        "iso": "ar",
        "country_code": "54",
        "mnc": "330"
    },
    {
        "network": "Compania De Radiocomunicaciones Moviles SA",
        "country": "Argentina Republic",
        "mcc": "722",
        "iso": "ar",
        "country_code": "54",
        "mnc": "010"
    },
    {
        "network": "Movistar/Telefonica",
        "country": "Argentina Republic",
        "mcc": "722",
        "iso": "ar",
        "country_code": "54",
        "mnc": "070"
    },
    {
        "network": "Nextel",
        "country": "Argentina Republic",
        "mcc": "722",
        "iso": "ar",
        "country_code": "54",
        "mnc": "020"
    },
    {
        "network": "Telecom Personal S.A.",
        "country": "Argentina Republic",
        "mcc": "722",
        "iso": "ar",
        "country_code": "54",
        "mnc": "341"
    },
    {
        "network": "Telecom Personal S.A.",
        "country": "Argentina Republic",
        "mcc": "722",
        "iso": "ar",
        "country_code": "54",
        "mnc": "340"
    },
    {
        "network": "ArmenTel/Beeline",
        "country": "Armenia",
        "mcc": "283",
        "iso": "am",
        "country_code": "374",
        "mnc": "01"
    },
    {
        "network": "Karabakh Telecom",
        "country": "Armenia",
        "mcc": "283",
        "iso": "am",
        "country_code": "374",
        "mnc": "04"
    },
    {
        "network": "Orange",
        "country": "Armenia",
        "mcc": "283",
        "iso": "am",
        "country_code": "374",
        "mnc": "10"
    },
    {
        "network": "Vivacell",
        "country": "Armenia",
        "mcc": "283",
        "iso": "am",
        "country_code": "374",
        "mnc": "05"
    },
    {
        "network": "Digicel",
        "country": "Aruba",
        "mcc": "363",
        "iso": "aw",
        "country_code": "297",
        "mnc": "20"
    },
    {
        "network": "Digicel",
        "country": "Aruba",
        "mcc": "363",
        "iso": "aw",
        "country_code": "297",
        "mnc": "02"
    },
    {
        "network": "Setar GSM",
        "country": "Aruba",
        "mcc": "363",
        "iso": "aw",
        "country_code": "297",
        "mnc": "01"
    },
    {
        "network": "AAPT Ltd. ",
        "country": "Australia",
        "mcc": "505",
        "iso": "au",
        "country_code": "61",
        "mnc": "14"
    },
    {
        "network": "Advanced Comm Tech Pty.",
        "country": "Australia",
        "mcc": "505",
        "iso": "au",
        "country_code": "61",
        "mnc": "24"
    },
    {
        "network": "Airnet Commercial Australia Ltd..",
        "country": "Australia",
        "mcc": "505",
        "iso": "au",
        "country_code": "61",
        "mnc": "09"
    },
    {
        "network": "Department of Defense",
        "country": "Australia",
        "mcc": "505",
        "iso": "au",
        "country_code": "61",
        "mnc": "04"
    },
    {
        "network": "Dialogue Communications Pty Ltd",
        "country": "Australia",
        "mcc": "505",
        "iso": "au",
        "country_code": "61",
        "mnc": "26"
    },
    {
        "network": "H3G Ltd.",
        "country": "Australia",
        "mcc": "505",
        "iso": "au",
        "country_code": "61",
        "mnc": "12"
    },
    {
        "network": "H3G Ltd.",
        "country": "Australia",
        "mcc": "505",
        "iso": "au",
        "country_code": "61",
        "mnc": "06"
    },
    {
        "network": "Localstar Holding Pty. Ltd",
        "country": "Australia",
        "mcc": "505",
        "iso": "au",
        "country_code": "61",
        "mnc": "88"
    },
    {
        "network": "Lycamobile Pty Ltd",
        "country": "Australia",
        "mcc": "505",
        "iso": "au",
        "country_code": "61",
        "mnc": "19"
    },
    {
        "network": "Railcorp/Vodafone",
        "country": "Australia",
        "mcc": "505",
        "iso": "au",
        "country_code": "61",
        "mnc": "99"
    },
    {
        "network": "Railcorp/Vodafone",
        "country": "Australia",
        "mcc": "505",
        "iso": "au",
        "country_code": "61",
        "mnc": "08"
    },
    {
        "network": "Railcorp/Vodafone",
        "country": "Australia",
        "mcc": "505",
        "iso": "au",
        "country_code": "61",
        "mnc": "13"
    },
    {
        "network": "Singtel Optus",
        "country": "Australia",
        "mcc": "505",
        "iso": "au",
        "country_code": "61",
        "mnc": "90"
    },
    {
        "network": "Singtel Optus",
        "country": "Australia",
        "mcc": "505",
        "iso": "au",
        "country_code": "61",
        "mnc": "02"
    },
    {
        "network": "Telstra Corp. Ltd.",
        "country": "Australia",
        "mcc": "505",
        "iso": "au",
        "country_code": "61",
        "mnc": "11"
    },
    {
        "network": "Telstra Corp. Ltd.",
        "country": "Australia",
        "mcc": "505",
        "iso": "au",
        "country_code": "61",
        "mnc": "72"
    },
    {
        "network": "Telstra Corp. Ltd.",
        "country": "Australia",
        "mcc": "505",
        "iso": "au",
        "country_code": "61",
        "mnc": "71"
    },
    {
        "network": "Telstra Corp. Ltd.",
        "country": "Australia",
        "mcc": "505",
        "iso": "au",
        "country_code": "61",
        "mnc": "01"
    },
    {
        "network": "The Ozitel Network Pty.",
        "country": "Australia",
        "mcc": "505",
        "iso": "au",
        "country_code": "61",
        "mnc": "05"
    },
    {
        "network": "Victorian Rail Track Corp. (VicTrack)",
        "country": "Australia",
        "mcc": "505",
        "iso": "au",
        "country_code": "61",
        "mnc": "16"
    },
    {
        "network": "Vodafone",
        "country": "Australia",
        "mcc": "505",
        "iso": "au",
        "country_code": "61",
        "mnc": "07"
    },
    {
        "network": "Vodafone",
        "country": "Australia",
        "mcc": "505",
        "iso": "au",
        "country_code": "61",
        "mnc": "03"
    },
    {
        "network": "A1 MobilKom",
        "country": "Austria",
        "mcc": "232",
        "iso": "at",
        "country_code": "43",
        "mnc": "02"
    },
    {
        "network": "A1 MobilKom",
        "country": "Austria",
        "mcc": "232",
        "iso": "at",
        "country_code": "43",
        "mnc": "11"
    },
    {
        "network": "A1 MobilKom",
        "country": "Austria",
        "mcc": "232",
        "iso": "at",
        "country_code": "43",
        "mnc": "09"
    },
    {
        "network": "A1 MobilKom",
        "country": "Austria",
        "mcc": "232",
        "iso": "at",
        "country_code": "43",
        "mnc": "01"
    },
    {
        "network": "T-Mobile/Telering",
        "country": "Austria",
        "mcc": "232",
        "iso": "at",
        "country_code": "43",
        "mnc": "15"
    },
    {
        "network": "H3G",
        "country": "Austria",
        "mcc": "232",
        "iso": "at",
        "country_code": "43",
        "mnc": "10"
    },
    {
        "network": "H3G",
        "country": "Austria",
        "mcc": "232",
        "iso": "at",
        "country_code": "43",
        "mnc": "14"
    },
    {
        "network": "3/Orange/One Connect",
        "country": "Austria",
        "mcc": "232",
        "iso": "at",
        "country_code": "43",
        "mnc": "12"
    },
    {
        "network": "3/Orange/One Connect",
        "country": "Austria",
        "mcc": "232",
        "iso": "at",
        "country_code": "43",
        "mnc": "06"
    },
    {
        "network": "3/Orange/One Connect",
        "country": "Austria",
        "mcc": "232",
        "iso": "at",
        "country_code": "43",
        "mnc": "05"
    },
    {
        "network": "Spusu/Mass Response",
        "country": "Austria",
        "mcc": "232",
        "iso": "at",
        "country_code": "43",
        "mnc": "17"
    },
    {
        "network": "T-Mobile/Telering",
        "country": "Austria",
        "mcc": "232",
        "iso": "at",
        "country_code": "43",
        "mnc": "03"
    },
    {
        "network": "T-Mobile/Telering",
        "country": "Austria",
        "mcc": "232",
        "iso": "at",
        "country_code": "43",
        "mnc": "07"
    },
    {
        "network": "T-Mobile/Telering",
        "country": "Austria",
        "mcc": "232",
        "iso": "at",
        "country_code": "43",
        "mnc": "04"
    },
    {
        "network": "Tele2",
        "country": "Austria",
        "mcc": "232",
        "iso": "at",
        "country_code": "43",
        "mnc": "19"
    },
    {
        "network": "A1 MobilKom",
        "country": "Austria",
        "mcc": "232",
        "iso": "at",
        "country_code": "43",
        "mnc": "08"
    },
    {
        "network": "UPC Austria",
        "country": "Austria",
        "mcc": "232",
        "iso": "at",
        "country_code": "43",
        "mnc": "13"
    },
    {
        "network": "Azercell Telekom B.M.",
        "country": "Azerbaijan",
        "mcc": "400",
        "iso": "az",
        "country_code": "994",
        "mnc": "01"
    },
    {
        "network": "Azerfon.",
        "country": "Azerbaijan",
        "mcc": "400",
        "iso": "az",
        "country_code": "994",
        "mnc": "04"
    },
    {
        "network": "Caspian American Telecommunications LLC (CATEL)",
        "country": "Azerbaijan",
        "mcc": "400",
        "iso": "az",
        "country_code": "994",
        "mnc": "03"
    },
    {
        "network": "J.V. Bakcell GSM 2000",
        "country": "Azerbaijan",
        "mcc": "400",
        "iso": "az",
        "country_code": "994",
        "mnc": "02"
    },
    {
        "network": "Bahamas Telco. Comp.",
        "country": "Bahamas",
        "mcc": "364",
        "iso": "bs",
        "country_code": "1242",
        "mnc": "390"
    },
    {
        "network": "Bahamas Telco. Comp.",
        "country": "Bahamas",
        "mcc": "364",
        "iso": "bs",
        "country_code": "1242",
        "mnc": "39"
    },
    {
        "network": "Bahamas Telco. Comp.",
        "country": "Bahamas",
        "mcc": "364",
        "iso": "bs",
        "country_code": "1242",
        "mnc": "30"
    },
    {
        "network": "Smart Communications",
        "country": "Bahamas",
        "mcc": "364",
        "iso": "bs",
        "country_code": "1242",
        "mnc": "03"
    },
    {
        "network": "Batelco",
        "country": "Bahrain",
        "mcc": "426",
        "iso": "bh",
        "country_code": "973",
        "mnc": "01"
    },
    {
        "network": "ZAIN/Vodafone",
        "country": "Bahrain",
        "mcc": "426",
        "iso": "bh",
        "country_code": "973",
        "mnc": "02"
    },
    {
        "network": "VIVA",
        "country": "Bahrain",
        "mcc": "426",
        "iso": "bh",
        "country_code": "973",
        "mnc": "04"
    },
    {
        "network": "Robi/Aktel",
        "country": "Bangladesh",
        "mcc": "470",
        "iso": "bd",
        "country_code": "880",
        "mnc": "02"
    },
    {
        "network": "Citycell",
        "country": "Bangladesh",
        "mcc": "470",
        "iso": "bd",
        "country_code": "880",
        "mnc": "06"
    },
    {
        "network": "Citycell",
        "country": "Bangladesh",
        "mcc": "470",
        "iso": "bd",
        "country_code": "880",
        "mnc": "05"
    },
    {
        "network": "GrameenPhone",
        "country": "Bangladesh",
        "mcc": "470",
        "iso": "bd",
        "country_code": "880",
        "mnc": "01"
    },
    {
        "network": "Orascom/Banglalink",
        "country": "Bangladesh",
        "mcc": "470",
        "iso": "bd",
        "country_code": "880",
        "mnc": "03"
    },
    {
        "network": "TeleTalk",
        "country": "Bangladesh",
        "mcc": "470",
        "iso": "bd",
        "country_code": "880",
        "mnc": "04"
    },
    {
        "network": "Airtel/Warid",
        "country": "Bangladesh",
        "mcc": "470",
        "iso": "bd",
        "country_code": "880",
        "mnc": "07"
    },
    {
        "network": "LIME",
        "country": "Barbados",
        "mcc": "342",
        "iso": "bb",
        "country_code": "1246",
        "mnc": "600"
    },
    {
        "network": "Cingular Wireless",
        "country": "Barbados",
        "mcc": "342",
        "iso": "bb",
        "country_code": "1246",
        "mnc": "810"
    },
    {
        "network": "Digicel",
        "country": "Barbados",
        "mcc": "342",
        "iso": "bb",
        "country_code": "1246",
        "mnc": "750"
    },
    {
        "network": "Digicel",
        "country": "Barbados",
        "mcc": "342",
        "iso": "bb",
        "country_code": "1246",
        "mnc": "050"
    },
    {
        "network": "Sunbeach",
        "country": "Barbados",
        "mcc": "342",
        "iso": "bb",
        "country_code": "1246",
        "mnc": "820"
    },
    {
        "network": "BelCel JV",
        "country": "Belarus",
        "mcc": "257",
        "iso": "by",
        "country_code": "375",
        "mnc": "03"
    },
    {
        "network": "BeST",
        "country": "Belarus",
        "mcc": "257",
        "iso": "by",
        "country_code": "375",
        "mnc": "04"
    },
    {
        "network": "Mobile Digital Communications",
        "country": "Belarus",
        "mcc": "257",
        "iso": "by",
        "country_code": "375",
        "mnc": "01"
    },
    {
        "network": "MTS",
        "country": "Belarus",
        "mcc": "257",
        "iso": "by",
        "country_code": "375",
        "mnc": "02"
    },
    {
        "network": "Base/KPN",
        "country": "Belgium",
        "mcc": "206",
        "iso": "be",
        "country_code": "32",
        "mnc": "20"
    },
    {
        "network": "Belgacom/Proximus",
        "country": "Belgium",
        "mcc": "206",
        "iso": "be",
        "country_code": "32",
        "mnc": "01"
    },
    {
        "network": "Lycamobile Belgium",
        "country": "Belgium",
        "mcc": "206",
        "iso": "be",
        "country_code": "32",
        "mnc": "06"
    },
    {
        "network": "Mobistar/Orange",
        "country": "Belgium",
        "mcc": "206",
        "iso": "be",
        "country_code": "32",
        "mnc": "10"
    },
    {
        "network": "SNCT/NMBS",
        "country": "Belgium",
        "mcc": "206",
        "iso": "be",
        "country_code": "32",
        "mnc": "02"
    },
    {
        "network": "Telenet BidCo NV",
        "country": "Belgium",
        "mcc": "206",
        "iso": "be",
        "country_code": "32",
        "mnc": "05"
    },
    {
        "network": "DigiCell",
        "country": "Belize",
        "mcc": "702",
        "iso": "bz",
        "country_code": "501",
        "mnc": "67"
    },
    {
        "network": "International Telco (INTELCO)",
        "country": "Belize",
        "mcc": "702",
        "iso": "bz",
        "country_code": "501",
        "mnc": "68"
    },
    {
        "network": "Bell Benin/BBCOM",
        "country": "Benin",
        "mcc": "616",
        "iso": "bj",
        "country_code": "229",
        "mnc": "04"
    },
    {
        "network": "Etisalat/MOOV",
        "country": "Benin",
        "mcc": "616",
        "iso": "bj",
        "country_code": "229",
        "mnc": "02"
    },
    {
        "network": "GloMobile",
        "country": "Benin",
        "mcc": "616",
        "iso": "bj",
        "country_code": "229",
        "mnc": "05"
    },
    {
        "network": "Libercom",
        "country": "Benin",
        "mcc": "616",
        "iso": "bj",
        "country_code": "229",
        "mnc": "01"
    },
    {
        "network": "MTN/Spacetel",
        "country": "Benin",
        "mcc": "616",
        "iso": "bj",
        "country_code": "229",
        "mnc": "03"
    },
    {
        "network": "Bermuda Digital Communications Ltd (BDC)",
        "country": "Bermuda",
        "mcc": "350",
        "iso": "bm",
        "country_code": "1441",
        "mnc": "000"
    },
    {
        "network": "CellOne Ltd",
        "country": "Bermuda",
        "mcc": "350",
        "iso": "bm",
        "country_code": "1441",
        "mnc": "99"
    },
    {
        "network": "DigiCel / Cingular",
        "country": "Bermuda",
        "mcc": "350",
        "iso": "bm",
        "country_code": "1441",
        "mnc": "10"
    },
    {
        "network": "M3 Wireless Ltd",
        "country": "Bermuda",
        "mcc": "350",
        "iso": "bm",
        "country_code": "1441",
        "mnc": "02"
    },
    {
        "network": "Telecommunications (Bermuda & West Indies) Ltd (Digicel Bermuda)",
        "country": "Bermuda",
        "mcc": "350",
        "iso": "bm",
        "country_code": "1441",
        "mnc": "01"
    },
    {
        "network": "B-Mobile",
        "country": "Bhutan",
        "mcc": "402",
        "iso": "bt",
        "country_code": "975",
        "mnc": "11"
    },
    {
        "network": "Bhutan Telecom Ltd (BTL)",
        "country": "Bhutan",
        "mcc": "402",
        "iso": "bt",
        "country_code": "975",
        "mnc": "17"
    },
    {
        "network": "TashiCell",
        "country": "Bhutan",
        "mcc": "402",
        "iso": "bt",
        "country_code": "975",
        "mnc": "77"
    },
    {
        "network": "Entel Pcs",
        "country": "Bolivia",
        "mcc": "736",
        "iso": "bo",
        "country_code": "591",
        "mnc": "02"
    },
    {
        "network": "Viva/Nuevatel",
        "country": "Bolivia",
        "mcc": "736",
        "iso": "bo",
        "country_code": "591",
        "mnc": "01"
    },
    {
        "network": "Tigo",
        "country": "Bolivia",
        "mcc": "736",
        "iso": "bo",
        "country_code": "591",
        "mnc": "03"
    },
    {
        "network": "BH Mobile",
        "country": "Bosnia & Herzegov.",
        "mcc": "218",
        "iso": "ba",
        "country_code": "387",
        "mnc": "90"
    },
    {
        "network": "Eronet Mobile",
        "country": "Bosnia & Herzegov.",
        "mcc": "218",
        "iso": "ba",
        "country_code": "387",
        "mnc": "03"
    },
    {
        "network": "M-Tel",
        "country": "Bosnia & Herzegov.",
        "mcc": "218",
        "iso": "ba",
        "country_code": "387",
        "mnc": "05"
    },
    {
        "network": "BeMOBILE",
        "country": "Botswana",
        "mcc": "652",
        "iso": "bw",
        "country_code": "267",
        "mnc": "04"
    },
    {
        "network": "Mascom Wireless (Pty) Ltd.",
        "country": "Botswana",
        "mcc": "652",
        "iso": "bw",
        "country_code": "267",
        "mnc": "01"
    },
    {
        "network": "Orange",
        "country": "Botswana",
        "mcc": "652",
        "iso": "bw",
        "country_code": "267",
        "mnc": "02"
    },
    {
        "network": "Claro/Albra/America Movil",
        "country": "Brazil",
        "mcc": "724",
        "iso": "br",
        "country_code": "55",
        "mnc": "12"
    },
    {
        "network": "Claro/Albra/America Movil",
        "country": "Brazil",
        "mcc": "724",
        "iso": "br",
        "country_code": "55",
        "mnc": "05"
    },
    {
        "network": "Claro/Albra/America Movil",
        "country": "Brazil",
        "mcc": "724",
        "iso": "br",
        "country_code": "55",
        "mnc": "38"
    },
    {
        "network": "Vivo S.A./Telemig ",
        "country": "Brazil",
        "mcc": "724",
        "iso": "br",
        "country_code": "55",
        "mnc": "01"
    },
    {
        "network": "CTBC Celular SA (CTBC)",
        "country": "Brazil",
        "mcc": "724",
        "iso": "br",
        "country_code": "55",
        "mnc": "34"
    },
    {
        "network": "CTBC Celular SA (CTBC)",
        "country": "Brazil",
        "mcc": "724",
        "iso": "br",
        "country_code": "55",
        "mnc": "33"
    },
    {
        "network": "CTBC Celular SA (CTBC)",
        "country": "Brazil",
        "mcc": "724",
        "iso": "br",
        "country_code": "55",
        "mnc": "32"
    },
    {
        "network": "TIM",
        "country": "Brazil",
        "mcc": "724",
        "iso": "br",
        "country_code": "55",
        "mnc": "08"
    },
    {
        "network": "Nextel (Telet)",
        "country": "Brazil",
        "mcc": "724",
        "iso": "br",
        "country_code": "55",
        "mnc": "39"
    },
    {
        "network": "Nextel (Telet)",
        "country": "Brazil",
        "mcc": "724",
        "iso": "br",
        "country_code": "55",
        "mnc": "00"
    },
    {
        "network": "Amazonia Celular S/A",
        "country": "Brazil",
        "mcc": "724",
        "iso": "br",
        "country_code": "55",
        "mnc": "24"
    },
    {
        "network": "Oi (TNL PCS / Oi)",
        "country": "Brazil",
        "mcc": "724",
        "iso": "br",
        "country_code": "55",
        "mnc": "30"
    },
    {
        "network": "Oi (TNL PCS / Oi)",
        "country": "Brazil",
        "mcc": "724",
        "iso": "br",
        "country_code": "55",
        "mnc": "31"
    },
    {
        "network": "Brazil Telcom",
        "country": "Brazil",
        "mcc": "724",
        "iso": "br",
        "country_code": "55",
        "mnc": "16"
    },
    {
        "network": "PORTO SEGURO TELECOMUNICACOES",
        "country": "Brazil",
        "mcc": "724",
        "iso": "br",
        "country_code": "55",
        "mnc": "54"
    },
    {
        "network": "Sercontel Cel",
        "country": "Brazil",
        "mcc": "724",
        "iso": "br",
        "country_code": "55",
        "mnc": "15"
    },
    {
        "network": "CTBC/Triangulo ",
        "country": "Brazil",
        "mcc": "724",
        "iso": "br",
        "country_code": "55",
        "mnc": "07"
    },
    {
        "network": "Vivo S.A./Telemig ",
        "country": "Brazil",
        "mcc": "724",
        "iso": "br",
        "country_code": "55",
        "mnc": "19"
    },
    {
        "network": "TIM",
        "country": "Brazil",
        "mcc": "724",
        "iso": "br",
        "country_code": "55",
        "mnc": "04"
    },
    {
        "network": "TIM",
        "country": "Brazil",
        "mcc": "724",
        "iso": "br",
        "country_code": "55",
        "mnc": "03"
    },
    {
        "network": "TIM",
        "country": "Brazil",
        "mcc": "724",
        "iso": "br",
        "country_code": "55",
        "mnc": "02"
    },
    {
        "network": "Unicel do Brasil Telecomunicacoes Ltda",
        "country": "Brazil",
        "mcc": "724",
        "iso": "br",
        "country_code": "55",
        "mnc": "37"
    },
    {
        "network": "Vivo S.A./Telemig ",
        "country": "Brazil",
        "mcc": "724",
        "iso": "br",
        "country_code": "55",
        "mnc": "23"
    },
    {
        "network": "Vivo S.A./Telemig ",
        "country": "Brazil",
        "mcc": "724",
        "iso": "br",
        "country_code": "55",
        "mnc": "11"
    },
    {
        "network": "Vivo S.A./Telemig ",
        "country": "Brazil",
        "mcc": "724",
        "iso": "br",
        "country_code": "55",
        "mnc": "10"
    },
    {
        "network": "Vivo S.A./Telemig ",
        "country": "Brazil",
        "mcc": "724",
        "iso": "br",
        "country_code": "55",
        "mnc": "06"
    },
    {
        "network": "Caribbean Cellular",
        "country": "British Virgin Islands",
        "mcc": "348",
        "iso": "vg",
        "country_code": "284",
        "mnc": "570"
    },
    {
        "network": "Digicel",
        "country": "British Virgin Islands",
        "mcc": "348",
        "iso": "vg",
        "country_code": "284",
        "mnc": "770"
    },
    {
        "network": "LIME",
        "country": "British Virgin Islands",
        "mcc": "348",
        "iso": "vg",
        "country_code": "284",
        "mnc": "170"
    },
    {
        "network": "b-mobile",
        "country": "Brunei Darussalam",
        "mcc": "528",
        "iso": "bn",
        "country_code": "673",
        "mnc": "02"
    },
    {
        "network": "Datastream (DTSCom)",
        "country": "Brunei Darussalam",
        "mcc": "528",
        "iso": "bn",
        "country_code": "673",
        "mnc": "11"
    },
    {
        "network": "Telekom Brunei Bhd (TelBru)",
        "country": "Brunei Darussalam",
        "mcc": "528",
        "iso": "bn",
        "country_code": "673",
        "mnc": "01"
    },
    {
        "network": "BTC Mobile EOOD (vivatel)",
        "country": "Bulgaria",
        "mcc": "284",
        "iso": "bg",
        "country_code": "359",
        "mnc": "06"
    },
    {
        "network": "BTC Mobile EOOD (vivatel)",
        "country": "Bulgaria",
        "mcc": "284",
        "iso": "bg",
        "country_code": "359",
        "mnc": "03"
    },
    {
        "network": "Telenor/Cosmo/Globul",
        "country": "Bulgaria",
        "mcc": "284",
        "iso": "bg",
        "country_code": "359",
        "mnc": "05"
    },
    {
        "network": "MobilTel AD",
        "country": "Bulgaria",
        "mcc": "284",
        "iso": "bg",
        "country_code": "359",
        "mnc": "01"
    },
    {
        "network": "TeleCel",
        "country": "Burkina Faso",
        "mcc": "613",
        "iso": "bf",
        "country_code": "226",
        "mnc": "03"
    },
    {
        "network": "TeleMob-OnaTel",
        "country": "Burkina Faso",
        "mcc": "613",
        "iso": "bf",
        "country_code": "226",
        "mnc": "01"
    },
    {
        "network": "Airtel/ZAIN/CelTel",
        "country": "Burkina Faso",
        "mcc": "613",
        "iso": "bf",
        "country_code": "226",
        "mnc": "02"
    },
    {
        "network": "Africel / Safaris",
        "country": "Burundi",
        "mcc": "642",
        "iso": "bi",
        "country_code": "257",
        "mnc": "02"
    },
    {
        "network": "Lumitel/Viettel",
        "country": "Burundi",
        "mcc": "642",
        "iso": "bi",
        "country_code": "257",
        "mnc": "08"
    },
    {
        "network": "Onatel / Telecel ",
        "country": "Burundi",
        "mcc": "642",
        "iso": "bi",
        "country_code": "257",
        "mnc": "03"
    },
    {
        "network": "Smart Mobile / LACELL ",
        "country": "Burundi",
        "mcc": "642",
        "iso": "bi",
        "country_code": "257",
        "mnc": "07"
    },
    {
        "network": "Spacetel / Econet / Leo ",
        "country": "Burundi",
        "mcc": "642",
        "iso": "bi",
        "country_code": "257",
        "mnc": "01"
    },
    {
        "network": "Spacetel / Econet / Leo ",
        "country": "Burundi",
        "mcc": "642",
        "iso": "bi",
        "country_code": "257",
        "mnc": "82"
    },
    {
        "network": "Cambodia Advance Communications Co. Ltd (CADCOMMS)",
        "country": "Cambodia",
        "mcc": "456",
        "iso": "kh",
        "country_code": "855",
        "mnc": "04"
    },
    {
        "network": "Smart Mobile",
        "country": "Cambodia",
        "mcc": "456",
        "iso": "kh",
        "country_code": "855",
        "mnc": "02"
    },
    {
        "network": "Metfone",
        "country": "Cambodia",
        "mcc": "456",
        "iso": "kh",
        "country_code": "855",
        "mnc": "08"
    },
    {
        "network": "MFone/Camshin/Cellcard",
        "country": "Cambodia",
        "mcc": "456",
        "iso": "kh",
        "country_code": "855",
        "mnc": "18"
    },
    {
        "network": "Mobitel/Cam GSM",
        "country": "Cambodia",
        "mcc": "456",
        "iso": "kh",
        "country_code": "855",
        "mnc": "01"
    },
    {
        "network": "QB/Cambodia Adv. Comms.",
        "country": "Cambodia",
        "mcc": "456",
        "iso": "kh",
        "country_code": "855",
        "mnc": "03"
    },
    {
        "network": "Smart Mobile",
        "country": "Cambodia",
        "mcc": "456",
        "iso": "kh",
        "country_code": "855",
        "mnc": "05"
    },
    {
        "network": "Smart Mobile",
        "country": "Cambodia",
        "mcc": "456",
        "iso": "kh",
        "country_code": "855",
        "mnc": "06"
    },
    {
        "network": "Sotelco/Beeline",
        "country": "Cambodia",
        "mcc": "456",
        "iso": "kh",
        "country_code": "855",
        "mnc": "09"
    },
    {
        "network": "MTN",
        "country": "Cameroon",
        "mcc": "624",
        "iso": "cm",
        "country_code": "237",
        "mnc": "01"
    },
    {
        "network": "Nextel",
        "country": "Cameroon",
        "mcc": "624",
        "iso": "cm",
        "country_code": "237",
        "mnc": "04"
    },
    {
        "network": "Orange",
        "country": "Cameroon",
        "mcc": "624",
        "iso": "cm",
        "country_code": "237",
        "mnc": "02"
    },
    {
        "network": "BC Tel Mobility",
        "country": "Canada",
        "mcc": "302",
        "iso": "ca",
        "country_code": "1",
        "mnc": "652"
    },
    {
        "network": "Bell Aliant",
        "country": "Canada",
        "mcc": "302",
        "iso": "ca",
        "country_code": "1",
        "mnc": "630"
    },
    {
        "network": "Bell Mobility",
        "country": "Canada",
        "mcc": "302",
        "iso": "ca",
        "country_code": "1",
        "mnc": "651"
    },
    {
        "network": "Bell Mobility",
        "country": "Canada",
        "mcc": "302",
        "iso": "ca",
        "country_code": "1",
        "mnc": "610"
    },
    {
        "network": "CityWest Mobility",
        "country": "Canada",
        "mcc": "302",
        "iso": "ca",
        "country_code": "1",
        "mnc": "670"
    },
    {
        "network": "Clearnet",
        "country": "Canada",
        "mcc": "302",
        "iso": "ca",
        "country_code": "1",
        "mnc": "361"
    },
    {
        "network": "Clearnet",
        "country": "Canada",
        "mcc": "302",
        "iso": "ca",
        "country_code": "1",
        "mnc": "360"
    },
    {
        "network": "DMTS Mobility",
        "country": "Canada",
        "mcc": "302",
        "iso": "ca",
        "country_code": "1",
        "mnc": "380"
    },
    {
        "network": "Globalstar Canada",
        "country": "Canada",
        "mcc": "302",
        "iso": "ca",
        "country_code": "1",
        "mnc": "710"
    },
    {
        "network": "Latitude Wireless",
        "country": "Canada",
        "mcc": "302",
        "iso": "ca",
        "country_code": "1",
        "mnc": "640"
    },
    {
        "network": "FIDO (Rogers AT&T/ Microcell)",
        "country": "Canada",
        "mcc": "302",
        "iso": "ca",
        "country_code": "1",
        "mnc": "370"
    },
    {
        "network": "mobilicity",
        "country": "Canada",
        "mcc": "302",
        "iso": "ca",
        "country_code": "1",
        "mnc": "320"
    },
    {
        "network": "MT&T Mobility",
        "country": "Canada",
        "mcc": "302",
        "iso": "ca",
        "country_code": "1",
        "mnc": "702"
    },
    {
        "network": "MTS Mobility",
        "country": "Canada",
        "mcc": "302",
        "iso": "ca",
        "country_code": "1",
        "mnc": "660"
    },
    {
        "network": "MTS Mobility",
        "country": "Canada",
        "mcc": "302",
        "iso": "ca",
        "country_code": "1",
        "mnc": "655"
    },
    {
        "network": "NB Tel Mobility",
        "country": "Canada",
        "mcc": "302",
        "iso": "ca",
        "country_code": "1",
        "mnc": "701"
    },
    {
        "network": "New Tel Mobility",
        "country": "Canada",
        "mcc": "302",
        "iso": "ca",
        "country_code": "1",
        "mnc": "703"
    },
    {
        "network": "Public Mobile",
        "country": "Canada",
        "mcc": "302",
        "iso": "ca",
        "country_code": "1",
        "mnc": "760"
    },
    {
        "network": "Quebectel Mobility",
        "country": "Canada",
        "mcc": "302",
        "iso": "ca",
        "country_code": "1",
        "mnc": "657"
    },
    {
        "network": "Rogers AT&T Wireless",
        "country": "Canada",
        "mcc": "302",
        "iso": "ca",
        "country_code": "1",
        "mnc": "720"
    },
    {
        "network": "Sask Tel Mobility",
        "country": "Canada",
        "mcc": "302",
        "iso": "ca",
        "country_code": "1",
        "mnc": "680"
    },
    {
        "network": "Sask Tel Mobility",
        "country": "Canada",
        "mcc": "302",
        "iso": "ca",
        "country_code": "1",
        "mnc": "654"
    },
    {
        "network": "Sask Tel Mobility",
        "country": "Canada",
        "mcc": "302",
        "iso": "ca",
        "country_code": "1",
        "mnc": "780"
    },
    {
        "network": "Tbay Mobility",
        "country": "Canada",
        "mcc": "302",
        "iso": "ca",
        "country_code": "1",
        "mnc": "656"
    },
    {
        "network": "Telus Mobility",
        "country": "Canada",
        "mcc": "302",
        "iso": "ca",
        "country_code": "1",
        "mnc": "653"
    },
    {
        "network": "Telus Mobility",
        "country": "Canada",
        "mcc": "302",
        "iso": "ca",
        "country_code": "1",
        "mnc": "220"
    },
    {
        "network": "Videotron",
        "country": "Canada",
        "mcc": "302",
        "iso": "ca",
        "country_code": "1",
        "mnc": "500"
    },
    {
        "network": "WIND",
        "country": "Canada",
        "mcc": "302",
        "iso": "ca",
        "country_code": "1",
        "mnc": "490"
    },
    {
        "network": "CV Movel",
        "country": "Cape Verde",
        "mcc": "625",
        "iso": "cv",
        "country_code": "238",
        "mnc": "01"
    },
    {
        "network": "T+ Telecom",
        "country": "Cape Verde",
        "mcc": "625",
        "iso": "cv",
        "country_code": "238",
        "mnc": "02"
    },
    {
        "network": "Digicel Cayman Ltd",
        "country": "Cayman Islands",
        "mcc": "346",
        "iso": "ky",
        "country_code": "1345",
        "mnc": "050"
    },
    {
        "network": "Digicel Ltd.",
        "country": "Cayman Islands",
        "mcc": "346",
        "iso": "ky",
        "country_code": "1345",
        "mnc": "006"
    },
    {
        "network": "LIME / Cable & Wirel.",
        "country": "Cayman Islands",
        "mcc": "346",
        "iso": "ky",
        "country_code": "1345",
        "mnc": "140"
    },
    {
        "network": "Centrafr. Telecom+",
        "country": "Central African Rep.",
        "mcc": "623",
        "iso": "cf",
        "country_code": "236",
        "mnc": "01"
    },
    {
        "network": "Nationlink",
        "country": "Central African Rep.",
        "mcc": "623",
        "iso": "cf",
        "country_code": "236",
        "mnc": "04"
    },
    {
        "network": "Orange/Celca",
        "country": "Central African Rep.",
        "mcc": "623",
        "iso": "cf",
        "country_code": "236",
        "mnc": "03"
    },
    {
        "network": "Telecel Centraf. ",
        "country": "Central African Rep.",
        "mcc": "623",
        "iso": "cf",
        "country_code": "236",
        "mnc": "02"
    },
    {
        "network": "Salam/Sotel",
        "country": "Chad",
        "mcc": "622",
        "iso": "td",
        "country_code": "235",
        "mnc": "04"
    },
    {
        "network": "Tchad Mobile",
        "country": "Chad",
        "mcc": "622",
        "iso": "td",
        "country_code": "235",
        "mnc": "02"
    },
    {
        "network": "Tigo/Milicom/Tchad Mobile",
        "country": "Chad",
        "mcc": "622",
        "iso": "td",
        "country_code": "235",
        "mnc": "03"
    },
    {
        "network": "Airtel/ZAIN/Celtel",
        "country": "Chad",
        "mcc": "622",
        "iso": "td",
        "country_code": "235",
        "mnc": "01"
    },
    {
        "network": "Blue Two Chile SA",
        "country": "Chile",
        "mcc": "730",
        "iso": "cl",
        "country_code": "56",
        "mnc": "06"
    },
    {
        "network": "Celupago SA",
        "country": "Chile",
        "mcc": "730",
        "iso": "cl",
        "country_code": "56",
        "mnc": "11"
    },
    {
        "network": "Cibeles Telecom SA",
        "country": "Chile",
        "mcc": "730",
        "iso": "cl",
        "country_code": "56",
        "mnc": "15"
    },
    {
        "network": "Claro",
        "country": "Chile",
        "mcc": "730",
        "iso": "cl",
        "country_code": "56",
        "mnc": "03"
    },
    {
        "network": "Entel Telefonia",
        "country": "Chile",
        "mcc": "730",
        "iso": "cl",
        "country_code": "56",
        "mnc": "10"
    },
    {
        "network": "Entel Telefonia Mov",
        "country": "Chile",
        "mcc": "730",
        "iso": "cl",
        "country_code": "56",
        "mnc": "01"
    },
    {
        "network": "Netline Telefonica Movil Ltda",
        "country": "Chile",
        "mcc": "730",
        "iso": "cl",
        "country_code": "56",
        "mnc": "14"
    },
    {
        "network": "Nextel SA",
        "country": "Chile",
        "mcc": "730",
        "iso": "cl",
        "country_code": "56",
        "mnc": "09"
    },
    {
        "network": "Nextel SA",
        "country": "Chile",
        "mcc": "730",
        "iso": "cl",
        "country_code": "56",
        "mnc": "05"
    },
    {
        "network": "Nextel SA",
        "country": "Chile",
        "mcc": "730",
        "iso": "cl",
        "country_code": "56",
        "mnc": "04"
    },
    {
        "network": "Sociedad Falabella Movil SPA",
        "country": "Chile",
        "mcc": "730",
        "iso": "cl",
        "country_code": "56",
        "mnc": "19"
    },
    {
        "network": "TELEFONICA",
        "country": "Chile",
        "mcc": "730",
        "iso": "cl",
        "country_code": "56",
        "mnc": "02"
    },
    {
        "network": "TELEFONICA",
        "country": "Chile",
        "mcc": "730",
        "iso": "cl",
        "country_code": "56",
        "mnc": "07"
    },
    {
        "network": "Telestar Movil SA",
        "country": "Chile",
        "mcc": "730",
        "iso": "cl",
        "country_code": "56",
        "mnc": "12"
    },
    {
        "network": "TESAM SA",
        "country": "Chile",
        "mcc": "730",
        "iso": "cl",
        "country_code": "56",
        "mnc": "00"
    },
    {
        "network": "Tribe Mobile SPA",
        "country": "Chile",
        "mcc": "730",
        "iso": "cl",
        "country_code": "56",
        "mnc": "13"
    },
    {
        "network": "VTR Banda Ancha SA",
        "country": "Chile",
        "mcc": "730",
        "iso": "cl",
        "country_code": "56",
        "mnc": "08"
    },
    {
        "network": "China Mobile GSM",
        "country": "China",
        "mcc": "460",
        "iso": "cn",
        "country_code": "86",
        "mnc": "07"
    },
    {
        "network": "China Mobile GSM",
        "country": "China",
        "mcc": "460",
        "iso": "cn",
        "country_code": "86",
        "mnc": "02"
    },
    {
        "network": "China Mobile GSM",
        "country": "China",
        "mcc": "460",
        "iso": "cn",
        "country_code": "86",
        "mnc": "00"
    },
    {
        "network": "China Space Mobile Satellite Telecommunications Co. Ltd (China Spacecom)",
        "country": "China",
        "mcc": "460",
        "iso": "cn",
        "country_code": "86",
        "mnc": "04"
    },
    {
        "network": "China Telecom",
        "country": "China",
        "mcc": "460",
        "iso": "cn",
        "country_code": "86",
        "mnc": "03"
    },
    {
        "network": "China Telecom",
        "country": "China",
        "mcc": "460",
        "iso": "cn",
        "country_code": "86",
        "mnc": "05"
    },
    {
        "network": "China Unicom",
        "country": "China",
        "mcc": "460",
        "iso": "cn",
        "country_code": "86",
        "mnc": "06"
    },
    {
        "network": "China Unicom",
        "country": "China",
        "mcc": "460",
        "iso": "cn",
        "country_code": "86",
        "mnc": "01"
    },
    {
        "network": "Avantel SAS",
        "country": "Colombia",
        "mcc": "732",
        "iso": "co",
        "country_code": "57",
        "mnc": "130"
    },
    {
        "network": "Movistar",
        "country": "Colombia",
        "mcc": "732",
        "iso": "co",
        "country_code": "57",
        "mnc": "102"
    },
    {
        "network": "TIGO/Colombia Movil",
        "country": "Colombia",
        "mcc": "732",
        "iso": "co",
        "country_code": "57",
        "mnc": "103"
    },
    {
        "network": "TIGO/Colombia Movil",
        "country": "Colombia",
        "mcc": "732",
        "iso": "co",
        "country_code": "57",
        "mnc": "001"
    },
    {
        "network": "Comcel S.A. Occel S.A./Celcaribe",
        "country": "Colombia",
        "mcc": "732",
        "iso": "co",
        "country_code": "57",
        "mnc": "101"
    },
    {
        "network": "Edatel S.A.",
        "country": "Colombia",
        "mcc": "732",
        "iso": "co",
        "country_code": "57",
        "mnc": "002"
    },
    {
        "network": "eTb",
        "country": "Colombia",
        "mcc": "732",
        "iso": "co",
        "country_code": "57",
        "mnc": "187"
    },
    {
        "network": "Movistar",
        "country": "Colombia",
        "mcc": "732",
        "iso": "co",
        "country_code": "57",
        "mnc": "123"
    },
    {
        "network": "TIGO/Colombia Movil",
        "country": "Colombia",
        "mcc": "732",
        "iso": "co",
        "country_code": "57",
        "mnc": "111"
    },
    {
        "network": "UNE EPM Telecomunicaciones SA ESP",
        "country": "Colombia",
        "mcc": "732",
        "iso": "co",
        "country_code": "57",
        "mnc": "020"
    },
    {
        "network": "UNE EPM Telecomunicaciones SA ESP",
        "country": "Colombia",
        "mcc": "732",
        "iso": "co",
        "country_code": "57",
        "mnc": "142"
    },
    {
        "network": "Virgin Mobile Colombia SAS",
        "country": "Colombia",
        "mcc": "732",
        "iso": "co",
        "country_code": "57",
        "mnc": "154"
    },
    {
        "network": "HURI - SNPT",
        "country": "Comoros",
        "mcc": "654",
        "iso": "km",
        "country_code": "269",
        "mnc": "01"
    },
    {
        "network": "Africell",
        "country": "Congo, Dem. Rep.",
        "mcc": "630",
        "iso": "cd",
        "country_code": "243",
        "mnc": "90"
    },
    {
        "network": "Orange RDC sarl",
        "country": "Congo, Dem. Rep.",
        "mcc": "630",
        "iso": "cd",
        "country_code": "243",
        "mnc": "86"
    },
    {
        "network": "SuperCell",
        "country": "Congo, Dem. Rep.",
        "mcc": "630",
        "iso": "cd",
        "country_code": "243",
        "mnc": "05"
    },
    {
        "network": "TIGO/Oasis",
        "country": "Congo, Dem. Rep.",
        "mcc": "630",
        "iso": "cd",
        "country_code": "243",
        "mnc": "89"
    },
    {
        "network": "Vodacom",
        "country": "Congo, Dem. Rep.",
        "mcc": "630",
        "iso": "cd",
        "country_code": "243",
        "mnc": "01"
    },
    {
        "network": "Yozma Timeturns sprl (YTT)",
        "country": "Congo, Dem. Rep.",
        "mcc": "630",
        "iso": "cd",
        "country_code": "243",
        "mnc": "88"
    },
    {
        "network": "Airtel/ZAIN",
        "country": "Congo, Dem. Rep.",
        "mcc": "630",
        "iso": "cd",
        "country_code": "243",
        "mnc": "02"
    },
    {
        "network": "Airtel SA",
        "country": "Congo, Republic",
        "mcc": "629",
        "iso": "cg",
        "country_code": "242",
        "mnc": "01"
    },
    {
        "network": "Azur SA (ETC)",
        "country": "Congo, Republic",
        "mcc": "629",
        "iso": "cg",
        "country_code": "242",
        "mnc": "02"
    },
    {
        "network": "MTN/Libertis",
        "country": "Congo, Republic",
        "mcc": "629",
        "iso": "cg",
        "country_code": "242",
        "mnc": "10"
    },
    {
        "network": "Warid",
        "country": "Congo, Republic",
        "mcc": "629",
        "iso": "cg",
        "country_code": "242",
        "mnc": "07"
    },
    {
        "network": "Telecom Cook Islands",
        "country": "Cook Islands",
        "mcc": "548",
        "iso": "ck",
        "country_code": "682",
        "mnc": "01"
    },
    {
        "network": "Claro",
        "country": "Costa Rica",
        "mcc": "712",
        "iso": "cr",
        "country_code": "506",
        "mnc": "03"
    },
    {
        "network": "ICE",
        "country": "Costa Rica",
        "mcc": "712",
        "iso": "cr",
        "country_code": "506",
        "mnc": "02"
    },
    {
        "network": "ICE",
        "country": "Costa Rica",
        "mcc": "712",
        "iso": "cr",
        "country_code": "506",
        "mnc": "01"
    },
    {
        "network": "Movistar",
        "country": "Costa Rica",
        "mcc": "712",
        "iso": "cr",
        "country_code": "506",
        "mnc": "04"
    },
    {
        "network": "Virtualis",
        "country": "Costa Rica",
        "mcc": "712",
        "iso": "cr",
        "country_code": "506",
        "mnc": "20"
    },
    {
        "network": "T-Mobile/Cronet",
        "country": "Croatia",
        "mcc": "219",
        "iso": "hr",
        "country_code": "385",
        "mnc": "01"
    },
    {
        "network": "Tele2",
        "country": "Croatia",
        "mcc": "219",
        "iso": "hr",
        "country_code": "385",
        "mnc": "02"
    },
    {
        "network": "VIPnet d.o.o.",
        "country": "Croatia",
        "mcc": "219",
        "iso": "hr",
        "country_code": "385",
        "mnc": "10"
    },
    {
        "network": "C-COM",
        "country": "Cuba",
        "mcc": "368",
        "iso": "cu",
        "country_code": "53",
        "mnc": "01"
    },
    {
        "network": "EOCG Wireless NV",
        "country": "Curacao",
        "mcc": "362",
        "iso": "cw",
        "country_code": "599",
        "mnc": "95"
    },
    {
        "network": "Polycom N.V./ Digicel",
        "country": "Curacao",
        "mcc": "362",
        "iso": "cw",
        "country_code": "599",
        "mnc": "69"
    },
    {
        "network": "MTN/Areeba",
        "country": "Cyprus",
        "mcc": "280",
        "iso": "cy",
        "country_code": "357",
        "mnc": "10"
    },
    {
        "network": "PrimeTel PLC",
        "country": "Cyprus",
        "mcc": "280",
        "iso": "cy",
        "country_code": "357",
        "mnc": "20"
    },
    {
        "network": "Vodafone/CyTa",
        "country": "Cyprus",
        "mcc": "280",
        "iso": "cy",
        "country_code": "357",
        "mnc": "01"
    },
    {
        "network": "Compatel s.r.o.",
        "country": "Czech Rep.",
        "mcc": "230",
        "iso": "cz",
        "country_code": "420",
        "mnc": "08"
    },
    {
        "network": "O2",
        "country": "Czech Rep.",
        "mcc": "230",
        "iso": "cz",
        "country_code": "420",
        "mnc": "02"
    },
    {
        "network": "T-Mobile / RadioMobil",
        "country": "Czech Rep.",
        "mcc": "230",
        "iso": "cz",
        "country_code": "420",
        "mnc": "01"
    },
    {
        "network": "Travel Telekommunikation s.r.o.",
        "country": "Czech Rep.",
        "mcc": "230",
        "iso": "cz",
        "country_code": "420",
        "mnc": "05"
    },
    {
        "network": "Ufone",
        "country": "Czech Rep.",
        "mcc": "230",
        "iso": "cz",
        "country_code": "420",
        "mnc": "04"
    },
    {
        "network": "Vodafone",
        "country": "Czech Rep.",
        "mcc": "230",
        "iso": "cz",
        "country_code": "420",
        "mnc": "03"
    },
    {
        "network": "Vodafone",
        "country": "Czech Rep.",
        "mcc": "230",
        "iso": "cz",
        "country_code": "420",
        "mnc": "99"
    },
    {
        "network": "ApS KBUS",
        "country": "Denmark",
        "mcc": "238",
        "iso": "dk",
        "country_code": "45",
        "mnc": "05"
    },
    {
        "network": "Banedanmark",
        "country": "Denmark",
        "mcc": "238",
        "iso": "dk",
        "country_code": "45",
        "mnc": "23"
    },
    {
        "network": "CoolTEL ApS",
        "country": "Denmark",
        "mcc": "238",
        "iso": "dk",
        "country_code": "45",
        "mnc": "28"
    },
    {
        "network": "H3G",
        "country": "Denmark",
        "mcc": "238",
        "iso": "dk",
        "country_code": "45",
        "mnc": "06"
    },
    {
        "network": "Lycamobile Ltd",
        "country": "Denmark",
        "mcc": "238",
        "iso": "dk",
        "country_code": "45",
        "mnc": "12"
    },
    {
        "network": "Mach Connectivity ApS",
        "country": "Denmark",
        "mcc": "238",
        "iso": "dk",
        "country_code": "45",
        "mnc": "03"
    },
    {
        "network": "Mundio Mobile",
        "country": "Denmark",
        "mcc": "238",
        "iso": "dk",
        "country_code": "45",
        "mnc": "07"
    },
    {
        "network": "NextGen Mobile Ltd (CardBoardFish)",
        "country": "Denmark",
        "mcc": "238",
        "iso": "dk",
        "country_code": "45",
        "mnc": "04"
    },
    {
        "network": "TDC Denmark",
        "country": "Denmark",
        "mcc": "238",
        "iso": "dk",
        "country_code": "45",
        "mnc": "10"
    },
    {
        "network": "TDC Denmark",
        "country": "Denmark",
        "mcc": "238",
        "iso": "dk",
        "country_code": "45",
        "mnc": "01"
    },
    {
        "network": "Telenor/Sonofon",
        "country": "Denmark",
        "mcc": "238",
        "iso": "dk",
        "country_code": "45",
        "mnc": "77"
    },
    {
        "network": "Telenor/Sonofon",
        "country": "Denmark",
        "mcc": "238",
        "iso": "dk",
        "country_code": "45",
        "mnc": "02"
    },
    {
        "network": "Telia",
        "country": "Denmark",
        "mcc": "238",
        "iso": "dk",
        "country_code": "45",
        "mnc": "20"
    },
    {
        "network": "Telia",
        "country": "Denmark",
        "mcc": "238",
        "iso": "dk",
        "country_code": "45",
        "mnc": "30"
    },
    {
        "network": "Djibouti Telecom SA (Evatis)",
        "country": "Djibouti",
        "mcc": "638",
        "iso": "dj",
        "country_code": "253",
        "mnc": "01"
    },
    {
        "network": "C & W",
        "country": "Dominica",
        "mcc": "366",
        "iso": "dm",
        "country_code": "1767",
        "mnc": "110"
    },
    {
        "network": "Cingular Wireless/Digicel",
        "country": "Dominica",
        "mcc": "366",
        "iso": "dm",
        "country_code": "1767",
        "mnc": "020"
    },
    {
        "network": "Wireless Ventures (Dominica) Ltd (Digicel Dominica)",
        "country": "Dominica",
        "mcc": "366",
        "iso": "dm",
        "country_code": "1767",
        "mnc": "050"
    },
    {
        "network": "Claro",
        "country": "Dominican Republic",
        "mcc": "370",
        "iso": "do",
        "country_code": "1809",
        "mnc": "02"
    },
    {
        "network": "Orange",
        "country": "Dominican Republic",
        "mcc": "370",
        "iso": "do",
        "country_code": "1809",
        "mnc": "01"
    },
    {
        "network": "TRIcom",
        "country": "Dominican Republic",
        "mcc": "370",
        "iso": "do",
        "country_code": "1809",
        "mnc": "03"
    },
    {
        "network": "Trilogy Dominicana S. A.",
        "country": "Dominican Republic",
        "mcc": "370",
        "iso": "do",
        "country_code": "1809",
        "mnc": "04"
    },
    {
        "network": "Alegro/Telcsa",
        "country": "Ecuador",
        "mcc": "740",
        "iso": "ec",
        "country_code": "593",
        "mnc": "02"
    },
    {
        "network": "MOVISTAR/OteCel",
        "country": "Ecuador",
        "mcc": "740",
        "iso": "ec",
        "country_code": "593",
        "mnc": "00"
    },
    {
        "network": "Claro/Port",
        "country": "Ecuador",
        "mcc": "740",
        "iso": "ec",
        "country_code": "593",
        "mnc": "01"
    },
    {
        "network": "Orange/Mobinil",
        "country": "Egypt",
        "mcc": "602",
        "iso": "eg",
        "country_code": "20",
        "mnc": "01"
    },
    {
        "network": "ETISALAT",
        "country": "Egypt",
        "mcc": "602",
        "iso": "eg",
        "country_code": "20",
        "mnc": "03"
    },
    {
        "network": "Vodafone/Mirsfone ",
        "country": "Egypt",
        "mcc": "602",
        "iso": "eg",
        "country_code": "20",
        "mnc": "02"
    },
    {
        "network": "CLARO/CTE",
        "country": "El Salvador",
        "mcc": "706",
        "iso": "sv",
        "country_code": "503",
        "mnc": "01"
    },
    {
        "network": "Digicel",
        "country": "El Salvador",
        "mcc": "706",
        "iso": "sv",
        "country_code": "503",
        "mnc": "02"
    },
    {
        "network": "INTELFON SA de CV",
        "country": "El Salvador",
        "mcc": "706",
        "iso": "sv",
        "country_code": "503",
        "mnc": "05"
    },
    {
        "network": "Telefonica",
        "country": "El Salvador",
        "mcc": "706",
        "iso": "sv",
        "country_code": "503",
        "mnc": "04"
    },
    {
        "network": "Telemovil",
        "country": "El Salvador",
        "mcc": "706",
        "iso": "sv",
        "country_code": "503",
        "mnc": "03"
    },
    {
        "network": "HiTs-GE",
        "country": "Equatorial Guinea",
        "mcc": "627",
        "iso": "gq",
        "country_code": "240",
        "mnc": "03"
    },
    {
        "network": "ORANGE/GETESA",
        "country": "Equatorial Guinea",
        "mcc": "627",
        "iso": "gq",
        "country_code": "240",
        "mnc": "01"
    },
    {
        "network": "Eritel",
        "country": "Eritrea",
        "mcc": "657",
        "iso": "er",
        "country_code": "291",
        "mnc": "01"
    },
    {
        "network": "EMT GSM",
        "country": "Estonia",
        "mcc": "248",
        "iso": "ee",
        "country_code": "372",
        "mnc": "01"
    },
    {
        "network": "Radiolinja Eesti",
        "country": "Estonia",
        "mcc": "248",
        "iso": "ee",
        "country_code": "372",
        "mnc": "02"
    },
    {
        "network": "Tele2 Eesti AS",
        "country": "Estonia",
        "mcc": "248",
        "iso": "ee",
        "country_code": "372",
        "mnc": "03"
    },
    {
        "network": "Top Connect OU",
        "country": "Estonia",
        "mcc": "248",
        "iso": "ee",
        "country_code": "372",
        "mnc": "04"
    },
    {
        "network": "ETH/MTN",
        "country": "Ethiopia",
        "mcc": "636",
        "iso": "et",
        "country_code": "251",
        "mnc": "01"
    },
    {
        "network": "Cable and Wireless South Atlantic Ltd (Falkland Islands",
        "country": "Falkland Islands (Malvinas)",
        "mcc": "750",
        "iso": "fk",
        "country_code": "500",
        "mnc": "001"
    },
    {
        "network": "Edge Mobile Sp/F",
        "country": "Faroe Islands",
        "mcc": "288",
        "iso": "fo",
        "country_code": "298",
        "mnc": "03"
    },
    {
        "network": "Faroese Telecom",
        "country": "Faroe Islands",
        "mcc": "288",
        "iso": "fo",
        "country_code": "298",
        "mnc": "01"
    },
    {
        "network": "Kall GSM",
        "country": "Faroe Islands",
        "mcc": "288",
        "iso": "fo",
        "country_code": "298",
        "mnc": "02"
    },
    {
        "network": "DigiCell",
        "country": "Fiji",
        "mcc": "542",
        "iso": "fj",
        "country_code": "679",
        "mnc": "02"
    },
    {
        "network": "Vodafone",
        "country": "Fiji",
        "mcc": "542",
        "iso": "fj",
        "country_code": "679",
        "mnc": "01"
    },
    {
        "network": "Alands",
        "country": "Finland",
        "mcc": "244",
        "iso": "fi",
        "country_code": "358",
        "mnc": "14"
    },
    {
        "network": "Compatel Ltd",
        "country": "Finland",
        "mcc": "244",
        "iso": "fi",
        "country_code": "358",
        "mnc": "26"
    },
    {
        "network": "DNA/Finnet",
        "country": "Finland",
        "mcc": "244",
        "iso": "fi",
        "country_code": "358",
        "mnc": "12"
    },
    {
        "network": "DNA/Finnet",
        "country": "Finland",
        "mcc": "244",
        "iso": "fi",
        "country_code": "358",
        "mnc": "04"
    },
    {
        "network": "DNA/Finnet",
        "country": "Finland",
        "mcc": "244",
        "iso": "fi",
        "country_code": "358",
        "mnc": "03"
    },
    {
        "network": "DNA/Finnet",
        "country": "Finland",
        "mcc": "244",
        "iso": "fi",
        "country_code": "358",
        "mnc": "13"
    },
    {
        "network": "Elisa/Saunalahti",
        "country": "Finland",
        "mcc": "244",
        "iso": "fi",
        "country_code": "358",
        "mnc": "05"
    },
    {
        "network": "Elisa/Saunalahti",
        "country": "Finland",
        "mcc": "244",
        "iso": "fi",
        "country_code": "358",
        "mnc": "21"
    },
    {
        "network": "ID-Mobile",
        "country": "Finland",
        "mcc": "244",
        "iso": "fi",
        "country_code": "358",
        "mnc": "82"
    },
    {
        "network": "Mundio Mobile (Finland) Ltd",
        "country": "Finland",
        "mcc": "244",
        "iso": "fi",
        "country_code": "358",
        "mnc": "11"
    },
    {
        "network": "Nokia Oyj",
        "country": "Finland",
        "mcc": "244",
        "iso": "fi",
        "country_code": "358",
        "mnc": "09"
    },
    {
        "network": "TDC Oy Finland",
        "country": "Finland",
        "mcc": "244",
        "iso": "fi",
        "country_code": "358",
        "mnc": "10"
    },
    {
        "network": "TeliaSonera",
        "country": "Finland",
        "mcc": "244",
        "iso": "fi",
        "country_code": "358",
        "mnc": "91"
    },
    {
        "network": "AFONE SA",
        "country": "France",
        "mcc": "208",
        "iso": "fr",
        "country_code": "33",
        "mnc": "27"
    },
    {
        "network": "Association Plate-forme Telecom",
        "country": "France",
        "mcc": "208",
        "iso": "fr",
        "country_code": "33",
        "mnc": "92"
    },
    {
        "network": "Astrium",
        "country": "France",
        "mcc": "208",
        "iso": "fr",
        "country_code": "33",
        "mnc": "28"
    },
    {
        "network": "Bouygues Telecom",
        "country": "France",
        "mcc": "208",
        "iso": "fr",
        "country_code": "33",
        "mnc": "21"
    },
    {
        "network": "Bouygues Telecom",
        "country": "France",
        "mcc": "208",
        "iso": "fr",
        "country_code": "33",
        "mnc": "20"
    },
    {
        "network": "Bouygues Telecom",
        "country": "France",
        "mcc": "208",
        "iso": "fr",
        "country_code": "33",
        "mnc": "88"
    },
    {
        "network": "Lliad/FREE Mobile",
        "country": "France",
        "mcc": "208",
        "iso": "fr",
        "country_code": "33",
        "mnc": "14"
    },
    {
        "network": "GlobalStar",
        "country": "France",
        "mcc": "208",
        "iso": "fr",
        "country_code": "33",
        "mnc": "07"
    },
    {
        "network": "GlobalStar",
        "country": "France",
        "mcc": "208",
        "iso": "fr",
        "country_code": "33",
        "mnc": "06"
    },
    {
        "network": "GlobalStar",
        "country": "France",
        "mcc": "208",
        "iso": "fr",
        "country_code": "33",
        "mnc": "05"
    },
    {
        "network": "Orange",
        "country": "France",
        "mcc": "208",
        "iso": "fr",
        "country_code": "33",
        "mnc": "29"
    },
    {
        "network": "Legos - Local Exchange Global Operation Services SA",
        "country": "France",
        "mcc": "208",
        "iso": "fr",
        "country_code": "33",
        "mnc": "17"
    },
    {
        "network": "Lliad/FREE Mobile",
        "country": "France",
        "mcc": "208",
        "iso": "fr",
        "country_code": "33",
        "mnc": "15"
    },
    {
        "network": "Lliad/FREE Mobile",
        "country": "France",
        "mcc": "208",
        "iso": "fr",
        "country_code": "33",
        "mnc": "16"
    },
    {
        "network": "Lycamobile SARL",
        "country": "France",
        "mcc": "208",
        "iso": "fr",
        "country_code": "33",
        "mnc": "25"
    },
    {
        "network": "MobiquiThings",
        "country": "France",
        "mcc": "208",
        "iso": "fr",
        "country_code": "33",
        "mnc": "24"
    },
    {
        "network": "MobiquiThings",
        "country": "France",
        "mcc": "208",
        "iso": "fr",
        "country_code": "33",
        "mnc": "03"
    },
    {
        "network": "Mundio Mobile (France) Ltd",
        "country": "France",
        "mcc": "208",
        "iso": "fr",
        "country_code": "33",
        "mnc": "31"
    },
    {
        "network": "NRJ",
        "country": "France",
        "mcc": "208",
        "iso": "fr",
        "country_code": "33",
        "mnc": "26"
    },
    {
        "network": "Virgin Mobile/Omer",
        "country": "France",
        "mcc": "208",
        "iso": "fr",
        "country_code": "33",
        "mnc": "89"
    },
    {
        "network": "Virgin Mobile/Omer",
        "country": "France",
        "mcc": "208",
        "iso": "fr",
        "country_code": "33",
        "mnc": "23"
    },
    {
        "network": "Orange",
        "country": "France",
        "mcc": "208",
        "iso": "fr",
        "country_code": "33",
        "mnc": "91"
    },
    {
        "network": "Orange",
        "country": "France",
        "mcc": "208",
        "iso": "fr",
        "country_code": "33",
        "mnc": "02"
    },
    {
        "network": "Orange",
        "country": "France",
        "mcc": "208",
        "iso": "fr",
        "country_code": "33",
        "mnc": "01"
    },
    {
        "network": "S.F.R.",
        "country": "France",
        "mcc": "208",
        "iso": "fr",
        "country_code": "33",
        "mnc": "13"
    },
    {
        "network": "S.F.R.",
        "country": "France",
        "mcc": "208",
        "iso": "fr",
        "country_code": "33",
        "mnc": "10"
    },
    {
        "network": "S.F.R.",
        "country": "France",
        "mcc": "208",
        "iso": "fr",
        "country_code": "33",
        "mnc": "09"
    },
    {
        "network": "S.F.R.",
        "country": "France",
        "mcc": "208",
        "iso": "fr",
        "country_code": "33",
        "mnc": "11"
    },
    {
        "network": "SISTEER",
        "country": "France",
        "mcc": "208",
        "iso": "fr",
        "country_code": "33",
        "mnc": "04"
    },
    {
        "network": "Tel/Te",
        "country": "France",
        "mcc": "208",
        "iso": "fr",
        "country_code": "33",
        "mnc": "00"
    },
    {
        "network": "Transatel SA",
        "country": "France",
        "mcc": "208",
        "iso": "fr",
        "country_code": "33",
        "mnc": "22"
    },
    {
        "network": "Bouygues/DigiCel",
        "country": "French Guiana",
        "mcc": "340",
        "iso": "fg",
        "country_code": "594",
        "mnc": "20"
    },
    {
        "network": "Orange Caribe",
        "country": "French Guiana",
        "mcc": "340",
        "iso": "fg",
        "country_code": "594",
        "mnc": "01"
    },
    {
        "network": "Outremer Telecom",
        "country": "French Guiana",
        "mcc": "340",
        "iso": "fg",
        "country_code": "594",
        "mnc": "02"
    },
    {
        "network": "TelCell GSM",
        "country": "French Guiana",
        "mcc": "340",
        "iso": "fg",
        "country_code": "594",
        "mnc": "03"
    },
    {
        "network": "TelCell GSM",
        "country": "French Guiana",
        "mcc": "340",
        "iso": "fg",
        "country_code": "594",
        "mnc": "11"
    },
    {
        "network": "Pacific Mobile Telecom (PMT)",
        "country": "French Polynesia",
        "mcc": "547",
        "iso": "pf",
        "country_code": "689",
        "mnc": "15"
    },
    {
        "network": "Vini/Tikiphone",
        "country": "French Polynesia",
        "mcc": "547",
        "iso": "pf",
        "country_code": "689",
        "mnc": "20"
    },
    {
        "network": "Azur/Usan S.A.",
        "country": "Gabon",
        "mcc": "628",
        "iso": "ga",
        "country_code": "241",
        "mnc": "04"
    },
    {
        "network": "Libertis S.A.",
        "country": "Gabon",
        "mcc": "628",
        "iso": "ga",
        "country_code": "241",
        "mnc": "01"
    },
    {
        "network": "MOOV/Telecel",
        "country": "Gabon",
        "mcc": "628",
        "iso": "ga",
        "country_code": "241",
        "mnc": "02"
    },
    {
        "network": "Airtel/ZAIN/Celtel Gabon S.A.",
        "country": "Gabon",
        "mcc": "628",
        "iso": "ga",
        "country_code": "241",
        "mnc": "03"
    },
    {
        "network": "Africel",
        "country": "Gambia",
        "mcc": "607",
        "iso": "gm",
        "country_code": "220",
        "mnc": "02"
    },
    {
        "network": "Comium",
        "country": "Gambia",
        "mcc": "607",
        "iso": "gm",
        "country_code": "220",
        "mnc": "03"
    },
    {
        "network": "Gamcel",
        "country": "Gambia",
        "mcc": "607",
        "iso": "gm",
        "country_code": "220",
        "mnc": "01"
    },
    {
        "network": "Q-Cell",
        "country": "Gambia",
        "mcc": "607",
        "iso": "gm",
        "country_code": "220",
        "mnc": "04"
    },
    {
        "network": "Geocell Ltd.",
        "country": "Georgia",
        "mcc": "282",
        "iso": "ge",
        "country_code": "995",
        "mnc": "01"
    },
    {
        "network": "Iberiatel Ltd.",
        "country": "Georgia",
        "mcc": "282",
        "iso": "ge",
        "country_code": "995",
        "mnc": "03"
    },
    {
        "network": "Magti GSM Ltd.",
        "country": "Georgia",
        "mcc": "282",
        "iso": "ge",
        "country_code": "995",
        "mnc": "02"
    },
    {
        "network": "MobiTel/Beeline",
        "country": "Georgia",
        "mcc": "282",
        "iso": "ge",
        "country_code": "995",
        "mnc": "04"
    },
    {
        "network": "Silknet",
        "country": "Georgia",
        "mcc": "282",
        "iso": "ge",
        "country_code": "995",
        "mnc": "05"
    },
    {
        "network": "E-Plus",
        "country": "Germany",
        "mcc": "262",
        "iso": "de",
        "country_code": "49",
        "mnc": "17"
    },
    {
        "network": "DB Netz AG",
        "country": "Germany",
        "mcc": "262",
        "iso": "de",
        "country_code": "49",
        "mnc": "10"
    },
    {
        "network": "Debitel",
        "country": "Germany",
        "mcc": "262",
        "iso": "de",
        "country_code": "49",
        "mnc": "n/a"
    },
    {
        "network": "E-Plus",
        "country": "Germany",
        "mcc": "262",
        "iso": "de",
        "country_code": "49",
        "mnc": "03"
    },
    {
        "network": "E-Plus",
        "country": "Germany",
        "mcc": "262",
        "iso": "de",
        "country_code": "49",
        "mnc": "05"
    },
    {
        "network": "E-Plus",
        "country": "Germany",
        "mcc": "262",
        "iso": "de",
        "country_code": "49",
        "mnc": "77"
    },
    {
        "network": "E-Plus",
        "country": "Germany",
        "mcc": "262",
        "iso": "de",
        "country_code": "49",
        "mnc": "12"
    },
    {
        "network": "E-Plus",
        "country": "Germany",
        "mcc": "262",
        "iso": "de",
        "country_code": "49",
        "mnc": "20"
    },
    {
        "network": "Group 3G UMTS",
        "country": "Germany",
        "mcc": "262",
        "iso": "de",
        "country_code": "49",
        "mnc": "14"
    },
    {
        "network": "Lycamobile",
        "country": "Germany",
        "mcc": "262",
        "iso": "de",
        "country_code": "49",
        "mnc": "43"
    },
    {
        "network": "Mobilcom",
        "country": "Germany",
        "mcc": "262",
        "iso": "de",
        "country_code": "49",
        "mnc": "13"
    },
    {
        "network": "O2",
        "country": "Germany",
        "mcc": "262",
        "iso": "de",
        "country_code": "49",
        "mnc": "07"
    },
    {
        "network": "O2",
        "country": "Germany",
        "mcc": "262",
        "iso": "de",
        "country_code": "49",
        "mnc": "11"
    },
    {
        "network": "O2",
        "country": "Germany",
        "mcc": "262",
        "iso": "de",
        "country_code": "49",
        "mnc": "08"
    },
    {
        "network": "Talkline",
        "country": "Germany",
        "mcc": "262",
        "iso": "de",
        "country_code": "49",
        "mnc": "n/a"
    },
    {
        "network": "T-mobile/Telekom",
        "country": "Germany",
        "mcc": "262",
        "iso": "de",
        "country_code": "49",
        "mnc": "06"
    },
    {
        "network": "T-mobile/Telekom",
        "country": "Germany",
        "mcc": "262",
        "iso": "de",
        "country_code": "49",
        "mnc": "01"
    },
    {
        "network": "Telogic/ViStream",
        "country": "Germany",
        "mcc": "262",
        "iso": "de",
        "country_code": "49",
        "mnc": "16"
    },
    {
        "network": "Vodafone D2",
        "country": "Germany",
        "mcc": "262",
        "iso": "de",
        "country_code": "49",
        "mnc": "02"
    },
    {
        "network": "Vodafone D2",
        "country": "Germany",
        "mcc": "262",
        "iso": "de",
        "country_code": "49",
        "mnc": "42"
    },
    {
        "network": "Vodafone D2",
        "country": "Germany",
        "mcc": "262",
        "iso": "de",
        "country_code": "49",
        "mnc": "09"
    },
    {
        "network": "Vodafone D2",
        "country": "Germany",
        "mcc": "262",
        "iso": "de",
        "country_code": "49",
        "mnc": "04"
    },
    {
        "network": "Expresso Ghana Ltd",
        "country": "Ghana",
        "mcc": "620",
        "iso": "gh",
        "country_code": "233",
        "mnc": "04"
    },
    {
        "network": "GloMobile",
        "country": "Ghana",
        "mcc": "620",
        "iso": "gh",
        "country_code": "233",
        "mnc": "07"
    },
    {
        "network": "Milicom/Tigo",
        "country": "Ghana",
        "mcc": "620",
        "iso": "gh",
        "country_code": "233",
        "mnc": "03"
    },
    {
        "network": "MTN",
        "country": "Ghana",
        "mcc": "620",
        "iso": "gh",
        "country_code": "233",
        "mnc": "01"
    },
    {
        "network": "Vodafone",
        "country": "Ghana",
        "mcc": "620",
        "iso": "gh",
        "country_code": "233",
        "mnc": "02"
    },
    {
        "network": "Airtel/ZAIN",
        "country": "Ghana",
        "mcc": "620",
        "iso": "gh",
        "country_code": "233",
        "mnc": "06"
    },
    {
        "network": "CTS Mobile",
        "country": "Gibraltar",
        "mcc": "266",
        "iso": "gi",
        "country_code": "350",
        "mnc": "06"
    },
    {
        "network": "eazi telecom",
        "country": "Gibraltar",
        "mcc": "266",
        "iso": "gi",
        "country_code": "350",
        "mnc": "09"
    },
    {
        "network": "Gibtel GSM",
        "country": "Gibraltar",
        "mcc": "266",
        "iso": "gi",
        "country_code": "350",
        "mnc": "01"
    },
    {
        "network": "AMD Telecom SA",
        "country": "Greece",
        "mcc": "202",
        "iso": "gr",
        "country_code": "30",
        "mnc": "07"
    },
    {
        "network": "Cosmote",
        "country": "Greece",
        "mcc": "202",
        "iso": "gr",
        "country_code": "30",
        "mnc": "02"
    },
    {
        "network": "Cosmote",
        "country": "Greece",
        "mcc": "202",
        "iso": "gr",
        "country_code": "30",
        "mnc": "01"
    },
    {
        "network": "CyTa Mobile",
        "country": "Greece",
        "mcc": "202",
        "iso": "gr",
        "country_code": "30",
        "mnc": "14"
    },
    {
        "network": "Organismos Sidirodromon Ellados (OSE)",
        "country": "Greece",
        "mcc": "202",
        "iso": "gr",
        "country_code": "30",
        "mnc": "04"
    },
    {
        "network": "OTE Hellenic Telecommunications Organization SA",
        "country": "Greece",
        "mcc": "202",
        "iso": "gr",
        "country_code": "30",
        "mnc": "03"
    },
    {
        "network": "Tim/Wind",
        "country": "Greece",
        "mcc": "202",
        "iso": "gr",
        "country_code": "30",
        "mnc": "10"
    },
    {
        "network": "Tim/Wind",
        "country": "Greece",
        "mcc": "202",
        "iso": "gr",
        "country_code": "30",
        "mnc": "09"
    },
    {
        "network": "Vodafone",
        "country": "Greece",
        "mcc": "202",
        "iso": "gr",
        "country_code": "30",
        "mnc": "05"
    },
    {
        "network": "Tele Greenland",
        "country": "Greenland",
        "mcc": "290",
        "iso": "gl",
        "country_code": "299",
        "mnc": "01"
    },
    {
        "network": "Cable & Wireless",
        "country": "Grenada",
        "mcc": "352",
        "iso": "gd",
        "country_code": "1473",
        "mnc": "110"
    },
    {
        "network": "Digicel",
        "country": "Grenada",
        "mcc": "352",
        "iso": "gd",
        "country_code": "1473",
        "mnc": "030"
    },
    {
        "network": "Digicel",
        "country": "Grenada",
        "mcc": "352",
        "iso": "gd",
        "country_code": "1473",
        "mnc": "050"
    },
    {
        "network": "Dauphin Telecom SU (Guadeloupe Telecom)",
        "country": "Guadeloupe ",
        "mcc": "340",
        "iso": "gp",
        "country_code": "590",
        "mnc": "08"
    },
    {
        "network": "",
        "country": "Guadeloupe ",
        "mcc": "340",
        "iso": "gp",
        "country_code": "590",
        "mnc": "10"
    },
    {
        "network": "Docomo",
        "country": "Guam",
        "mcc": "310",
        "iso": "gu",
        "country_code": "1671",
        "mnc": "370"
    },
    {
        "network": "Docomo",
        "country": "Guam",
        "mcc": "310",
        "iso": "gu",
        "country_code": "1671",
        "mnc": "470"
    },
    {
        "network": "GTA Wireless",
        "country": "Guam",
        "mcc": "310",
        "iso": "gu",
        "country_code": "1671",
        "mnc": "140"
    },
    {
        "network": "Guam Teleph. Auth",
        "country": "Guam",
        "mcc": "310",
        "iso": "gu",
        "country_code": "1671",
        "mnc": "033"
    },
    {
        "network": "IT&E OverSeas",
        "country": "Guam",
        "mcc": "310",
        "iso": "gu",
        "country_code": "1671",
        "mnc": "032"
    },
    {
        "network": "Wave Runner LLC",
        "country": "Guam",
        "mcc": "311",
        "iso": "gu",
        "country_code": "1671",
        "mnc": "250"
    },
    {
        "network": "Claro",
        "country": "Guatemala",
        "mcc": "704",
        "iso": "gt",
        "country_code": "502",
        "mnc": "01"
    },
    {
        "network": "Telefonica",
        "country": "Guatemala",
        "mcc": "704",
        "iso": "gt",
        "country_code": "502",
        "mnc": "03"
    },
    {
        "network": "TIGO/COMCEL",
        "country": "Guatemala",
        "mcc": "704",
        "iso": "gt",
        "country_code": "502",
        "mnc": "02"
    },
    {
        "network": "MTN/Areeba",
        "country": "Guinea",
        "mcc": "611",
        "iso": "gn",
        "country_code": "224",
        "mnc": "04"
    },
    {
        "network": "Celcom",
        "country": "Guinea",
        "mcc": "611",
        "iso": "gn",
        "country_code": "224",
        "mnc": "05"
    },
    {
        "network": "Intercel",
        "country": "Guinea",
        "mcc": "611",
        "iso": "gn",
        "country_code": "224",
        "mnc": "03"
    },
    {
        "network": "Orange/Sonatel/Spacetel",
        "country": "Guinea",
        "mcc": "611",
        "iso": "gn",
        "country_code": "224",
        "mnc": "01"
    },
    {
        "network": "SotelGui",
        "country": "Guinea",
        "mcc": "611",
        "iso": "gn",
        "country_code": "224",
        "mnc": "02"
    },
    {
        "network": "GuineTel",
        "country": "Guinea-Bissau",
        "mcc": "632",
        "iso": "gw",
        "country_code": "245",
        "mnc": "01"
    },
    {
        "network": "Orange",
        "country": "Guinea-Bissau",
        "mcc": "632",
        "iso": "gw",
        "country_code": "245",
        "mnc": "03"
    },
    {
        "network": "SpaceTel",
        "country": "Guinea-Bissau",
        "mcc": "632",
        "iso": "gw",
        "country_code": "245",
        "mnc": "02"
    },
    {
        "network": "Cellink Plus",
        "country": "Guyana",
        "mcc": "738",
        "iso": "gy",
        "country_code": "592",
        "mnc": "02"
    },
    {
        "network": "DigiCel",
        "country": "Guyana",
        "mcc": "738",
        "iso": "gy",
        "country_code": "592",
        "mnc": "01"
    },
    {
        "network": "Comcel",
        "country": "Haiti",
        "mcc": "372",
        "iso": "ht",
        "country_code": "509",
        "mnc": "01"
    },
    {
        "network": "Digicel",
        "country": "Haiti",
        "mcc": "372",
        "iso": "ht",
        "country_code": "509",
        "mnc": "02"
    },
    {
        "network": "National Telecom SA (NatCom)",
        "country": "Haiti",
        "mcc": "372",
        "iso": "ht",
        "country_code": "509",
        "mnc": "03"
    },
    {
        "network": "Digicel",
        "country": "Honduras",
        "mcc": "708",
        "iso": "hn",
        "country_code": "504",
        "mnc": "040"
    },
    {
        "network": "HonduTel",
        "country": "Honduras",
        "mcc": "708",
        "iso": "hn",
        "country_code": "504",
        "mnc": "030"
    },
    {
        "network": "SERCOM/CLARO",
        "country": "Honduras",
        "mcc": "708",
        "iso": "hn",
        "country_code": "504",
        "mnc": "001"
    },
    {
        "network": "Telefonica/CELTEL",
        "country": "Honduras",
        "mcc": "708",
        "iso": "hn",
        "country_code": "504",
        "mnc": "002"
    },
    {
        "network": "China Mobile/Peoples",
        "country": "Hongkong, China",
        "mcc": "454",
        "iso": "hk",
        "country_code": "852",
        "mnc": "13"
    },
    {
        "network": "China Mobile/Peoples",
        "country": "Hongkong, China",
        "mcc": "454",
        "iso": "hk",
        "country_code": "852",
        "mnc": "12"
    },
    {
        "network": "China Mobile/Peoples",
        "country": "Hongkong, China",
        "mcc": "454",
        "iso": "hk",
        "country_code": "852",
        "mnc": "28"
    },
    {
        "network": "China Motion",
        "country": "Hongkong, China",
        "mcc": "454",
        "iso": "hk",
        "country_code": "852",
        "mnc": "09"
    },
    {
        "network": "China Unicom Ltd",
        "country": "Hongkong, China",
        "mcc": "454",
        "iso": "hk",
        "country_code": "852",
        "mnc": "07"
    },
    {
        "network": "China-HongKong Telecom Ltd (CHKTL)",
        "country": "Hongkong, China",
        "mcc": "454",
        "iso": "hk",
        "country_code": "852",
        "mnc": "11"
    },
    {
        "network": "Citic Telecom Ltd.",
        "country": "Hongkong, China",
        "mcc": "454",
        "iso": "hk",
        "country_code": "852",
        "mnc": "01"
    },
    {
        "network": "CSL Ltd.",
        "country": "Hongkong, China",
        "mcc": "454",
        "iso": "hk",
        "country_code": "852",
        "mnc": "02"
    },
    {
        "network": "CSL Ltd.",
        "country": "Hongkong, China",
        "mcc": "454",
        "iso": "hk",
        "country_code": "852",
        "mnc": "00"
    },
    {
        "network": "CSL Ltd.",
        "country": "Hongkong, China",
        "mcc": "454",
        "iso": "hk",
        "country_code": "852",
        "mnc": "18"
    },
    {
        "network": "CSL/New World PCS Ltd.",
        "country": "Hongkong, China",
        "mcc": "454",
        "iso": "hk",
        "country_code": "852",
        "mnc": "10"
    },
    {
        "network": "H3G/Hutchinson",
        "country": "Hongkong, China",
        "mcc": "454",
        "iso": "hk",
        "country_code": "852",
        "mnc": "03"
    },
    {
        "network": "H3G/Hutchinson",
        "country": "Hongkong, China",
        "mcc": "454",
        "iso": "hk",
        "country_code": "852",
        "mnc": "14"
    },
    {
        "network": "H3G/Hutchinson",
        "country": "Hongkong, China",
        "mcc": "454",
        "iso": "hk",
        "country_code": "852",
        "mnc": "05"
    },
    {
        "network": "H3G/Hutchinson",
        "country": "Hongkong, China",
        "mcc": "454",
        "iso": "hk",
        "country_code": "852",
        "mnc": "04"
    },
    {
        "network": "HKT/PCCW",
        "country": "Hongkong, China",
        "mcc": "454",
        "iso": "hk",
        "country_code": "852",
        "mnc": "19"
    },
    {
        "network": "HKT/PCCW",
        "country": "Hongkong, China",
        "mcc": "454",
        "iso": "hk",
        "country_code": "852",
        "mnc": "20"
    },
    {
        "network": "HKT/PCCW",
        "country": "Hongkong, China",
        "mcc": "454",
        "iso": "hk",
        "country_code": "852",
        "mnc": "29"
    },
    {
        "network": "HKT/PCCW",
        "country": "Hongkong, China",
        "mcc": "454",
        "iso": "hk",
        "country_code": "852",
        "mnc": "16"
    },
    {
        "network": "shared by private TETRA systems",
        "country": "Hongkong, China",
        "mcc": "454",
        "iso": "hk",
        "country_code": "852",
        "mnc": "47"
    },
    {
        "network": "shared by private TETRA systems",
        "country": "Hongkong, China",
        "mcc": "454",
        "iso": "hk",
        "country_code": "852",
        "mnc": "40"
    },
    {
        "network": "Truephone",
        "country": "Hongkong, China",
        "mcc": "454",
        "iso": "hk",
        "country_code": "852",
        "mnc": "08"
    },
    {
        "network": "Vodafone/SmarTone",
        "country": "Hongkong, China",
        "mcc": "454",
        "iso": "hk",
        "country_code": "852",
        "mnc": "17"
    },
    {
        "network": "Vodafone/SmarTone",
        "country": "Hongkong, China",
        "mcc": "454",
        "iso": "hk",
        "country_code": "852",
        "mnc": "15"
    },
    {
        "network": "Vodafone/SmarTone",
        "country": "Hongkong, China",
        "mcc": "454",
        "iso": "hk",
        "country_code": "852",
        "mnc": "06"
    },
    {
        "network": "Pannon/Telenor",
        "country": "Hungary",
        "mcc": "216",
        "iso": "hu",
        "country_code": "36",
        "mnc": "01"
    },
    {
        "network": "T-mobile/Magyar",
        "country": "Hungary",
        "mcc": "216",
        "iso": "hu",
        "country_code": "36",
        "mnc": "30"
    },
    {
        "network": "UPC Magyarorszag Kft.",
        "country": "Hungary",
        "mcc": "216",
        "iso": "hu",
        "country_code": "36",
        "mnc": "71"
    },
    {
        "network": "Vodafone",
        "country": "Hungary",
        "mcc": "216",
        "iso": "hu",
        "country_code": "36",
        "mnc": "70"
    },
    {
        "network": "Amitelo",
        "country": "Iceland",
        "mcc": "274",
        "iso": "is",
        "country_code": "354",
        "mnc": "09"
    },
    {
        "network": "IceCell",
        "country": "Iceland",
        "mcc": "274",
        "iso": "is",
        "country_code": "354",
        "mnc": "07"
    },
    {
        "network": "Siminn",
        "country": "Iceland",
        "mcc": "274",
        "iso": "is",
        "country_code": "354",
        "mnc": "08"
    },
    {
        "network": "Siminn",
        "country": "Iceland",
        "mcc": "274",
        "iso": "is",
        "country_code": "354",
        "mnc": "01"
    },
    {
        "network": "NOVA",
        "country": "Iceland",
        "mcc": "274",
        "iso": "is",
        "country_code": "354",
        "mnc": "11"
    },
    {
        "network": "VIKING/IMC",
        "country": "Iceland",
        "mcc": "274",
        "iso": "is",
        "country_code": "354",
        "mnc": "04"
    },
    {
        "network": "Vodafone/Tal hf",
        "country": "Iceland",
        "mcc": "274",
        "iso": "is",
        "country_code": "354",
        "mnc": "05"
    },
    {
        "network": "Vodafone/Tal hf",
        "country": "Iceland",
        "mcc": "274",
        "iso": "is",
        "country_code": "354",
        "mnc": "03"
    },
    {
        "network": "Vodafone/Tal hf",
        "country": "Iceland",
        "mcc": "274",
        "iso": "is",
        "country_code": "354",
        "mnc": "02"
    },
    {
        "network": "Aircel",
        "country": "India",
        "mcc": "404",
        "iso": "in",
        "country_code": "91",
        "mnc": "25"
    },
    {
        "network": "Aircel",
        "country": "India",
        "mcc": "404",
        "iso": "in",
        "country_code": "91",
        "mnc": "17"
    },
    {
        "network": "Aircel",
        "country": "India",
        "mcc": "404",
        "iso": "in",
        "country_code": "91",
        "mnc": "42"
    },
    {
        "network": "Aircel",
        "country": "India",
        "mcc": "404",
        "iso": "in",
        "country_code": "91",
        "mnc": "33"
    },
    {
        "network": "Aircel",
        "country": "India",
        "mcc": "404",
        "iso": "in",
        "country_code": "91",
        "mnc": "29"
    },
    {
        "network": "Aircel",
        "country": "India",
        "mcc": "404",
        "iso": "in",
        "country_code": "91",
        "mnc": "28"
    },
    {
        "network": "Aircel Digilink India",
        "country": "India",
        "mcc": "404",
        "iso": "in",
        "country_code": "91",
        "mnc": "15"
    },
    {
        "network": "Aircel Digilink India",
        "country": "India",
        "mcc": "404",
        "iso": "in",
        "country_code": "91",
        "mnc": "60"
    },
    {
        "network": "Aircel Digilink India",
        "country": "India",
        "mcc": "404",
        "iso": "in",
        "country_code": "91",
        "mnc": "01"
    },
    {
        "network": "AirTel",
        "country": "India",
        "mcc": "405",
        "iso": "in",
        "country_code": "91",
        "mnc": "53"
    },
    {
        "network": "Barakhamba Sales & Serv.",
        "country": "India",
        "mcc": "404",
        "iso": "in",
        "country_code": "91",
        "mnc": "86"
    },
    {
        "network": "Barakhamba Sales & Serv.",
        "country": "India",
        "mcc": "404",
        "iso": "in",
        "country_code": "91",
        "mnc": "13"
    },
    {
        "network": "BSNL",
        "country": "India",
        "mcc": "404",
        "iso": "in",
        "country_code": "91",
        "mnc": "76"
    },
    {
        "network": "BSNL",
        "country": "India",
        "mcc": "404",
        "iso": "in",
        "country_code": "91",
        "mnc": "53"
    },
    {
        "network": "BSNL",
        "country": "India",
        "mcc": "404",
        "iso": "in",
        "country_code": "91",
        "mnc": "62"
    },
    {
        "network": "BSNL",
        "country": "India",
        "mcc": "404",
        "iso": "in",
        "country_code": "91",
        "mnc": "59"
    },
    {
        "network": "BSNL",
        "country": "India",
        "mcc": "404",
        "iso": "in",
        "country_code": "91",
        "mnc": "75"
    },
    {
        "network": "BSNL",
        "country": "India",
        "mcc": "404",
        "iso": "in",
        "country_code": "91",
        "mnc": "51"
    },
    {
        "network": "BSNL",
        "country": "India",
        "mcc": "404",
        "iso": "in",
        "country_code": "91",
        "mnc": "81"
    },
    {
        "network": "BSNL",
        "country": "India",
        "mcc": "404",
        "iso": "in",
        "country_code": "91",
        "mnc": "58"
    },
    {
        "network": "BSNL",
        "country": "India",
        "mcc": "404",
        "iso": "in",
        "country_code": "91",
        "mnc": "74"
    },
    {
        "network": "BSNL",
        "country": "India",
        "mcc": "404",
        "iso": "in",
        "country_code": "91",
        "mnc": "38"
    },
    {
        "network": "BSNL",
        "country": "India",
        "mcc": "404",
        "iso": "in",
        "country_code": "91",
        "mnc": "80"
    },
    {
        "network": "BSNL",
        "country": "India",
        "mcc": "404",
        "iso": "in",
        "country_code": "91",
        "mnc": "57"
    },
    {
        "network": "BSNL",
        "country": "India",
        "mcc": "404",
        "iso": "in",
        "country_code": "91",
        "mnc": "73"
    },
    {
        "network": "BSNL",
        "country": "India",
        "mcc": "404",
        "iso": "in",
        "country_code": "91",
        "mnc": "34"
    },
    {
        "network": "BSNL",
        "country": "India",
        "mcc": "404",
        "iso": "in",
        "country_code": "91",
        "mnc": "55"
    },
    {
        "network": "BSNL",
        "country": "India",
        "mcc": "404",
        "iso": "in",
        "country_code": "91",
        "mnc": "66"
    },
    {
        "network": "BSNL",
        "country": "India",
        "mcc": "404",
        "iso": "in",
        "country_code": "91",
        "mnc": "72"
    },
    {
        "network": "BSNL",
        "country": "India",
        "mcc": "404",
        "iso": "in",
        "country_code": "91",
        "mnc": "77"
    },
    {
        "network": "BSNL",
        "country": "India",
        "mcc": "404",
        "iso": "in",
        "country_code": "91",
        "mnc": "54"
    },
    {
        "network": "BSNL",
        "country": "India",
        "mcc": "404",
        "iso": "in",
        "country_code": "91",
        "mnc": "64"
    },
    {
        "network": "BSNL",
        "country": "India",
        "mcc": "404",
        "iso": "in",
        "country_code": "91",
        "mnc": "71"
    },
    {
        "network": "Bharti Airtel Limited (Delhi)",
        "country": "India",
        "mcc": "404",
        "iso": "in",
        "country_code": "91",
        "mnc": "10"
    },
    {
        "network": "Bharti Airtel Limited (Karnataka) (India)",
        "country": "India",
        "mcc": "404",
        "iso": "in",
        "country_code": "91",
        "mnc": "045"
    },
    {
        "network": "CellOne A&N",
        "country": "India",
        "mcc": "404",
        "iso": "in",
        "country_code": "91",
        "mnc": "79"
    },
    {
        "network": "Escorts Telecom Ltd.",
        "country": "India",
        "mcc": "404",
        "iso": "in",
        "country_code": "91",
        "mnc": "82"
    },
    {
        "network": "Escorts Telecom Ltd.",
        "country": "India",
        "mcc": "404",
        "iso": "in",
        "country_code": "91",
        "mnc": "89"
    },
    {
        "network": "Escorts Telecom Ltd.",
        "country": "India",
        "mcc": "404",
        "iso": "in",
        "country_code": "91",
        "mnc": "88"
    },
    {
        "network": "Escorts Telecom Ltd.",
        "country": "India",
        "mcc": "404",
        "iso": "in",
        "country_code": "91",
        "mnc": "87"
    },
    {
        "network": "Escotel Mobile Communications",
        "country": "India",
        "mcc": "404",
        "iso": "in",
        "country_code": "91",
        "mnc": "56"
    },
    {
        "network": "Escotel Mobile Communications",
        "country": "India",
        "mcc": "404",
        "iso": "in",
        "country_code": "91",
        "mnc": "12"
    },
    {
        "network": "Escotel Mobile Communications",
        "country": "India",
        "mcc": "404",
        "iso": "in",
        "country_code": "91",
        "mnc": "19"
    },
    {
        "network": "Fascel Limited",
        "country": "India",
        "mcc": "405",
        "iso": "in",
        "country_code": "91",
        "mnc": "05"
    },
    {
        "network": "Fascel",
        "country": "India",
        "mcc": "404",
        "iso": "in",
        "country_code": "91",
        "mnc": "05"
    },
    {
        "network": "Hexacom India",
        "country": "India",
        "mcc": "404",
        "iso": "in",
        "country_code": "91",
        "mnc": "70"
    },
    {
        "network": "Hexcom India",
        "country": "India",
        "mcc": "404",
        "iso": "in",
        "country_code": "91",
        "mnc": "16"
    },
    {
        "network": "Idea Cellular Ltd.",
        "country": "India",
        "mcc": "404",
        "iso": "in",
        "country_code": "91",
        "mnc": "78"
    },
    {
        "network": "Idea Cellular Ltd.",
        "country": "India",
        "mcc": "404",
        "iso": "in",
        "country_code": "91",
        "mnc": "07"
    },
    {
        "network": "Idea Cellular Ltd.",
        "country": "India",
        "mcc": "404",
        "iso": "in",
        "country_code": "91",
        "mnc": "04"
    },
    {
        "network": "Idea Cellular Ltd.",
        "country": "India",
        "mcc": "404",
        "iso": "in",
        "country_code": "91",
        "mnc": "24"
    },
    {
        "network": "Idea Cellular Ltd.",
        "country": "India",
        "mcc": "404",
        "iso": "in",
        "country_code": "91",
        "mnc": "22"
    },
    {
        "network": "Mahanagar Telephone Nigam",
        "country": "India",
        "mcc": "404",
        "iso": "in",
        "country_code": "91",
        "mnc": "69"
    },
    {
        "network": "Mahanagar Telephone Nigam",
        "country": "India",
        "mcc": "404",
        "iso": "in",
        "country_code": "91",
        "mnc": "68"
    },
    {
        "network": "Reliable Internet Services",
        "country": "India",
        "mcc": "404",
        "iso": "in",
        "country_code": "91",
        "mnc": "83"
    },
    {
        "network": "Reliance Telecom Private",
        "country": "India",
        "mcc": "404",
        "iso": "in",
        "country_code": "91",
        "mnc": "50"
    },
    {
        "network": "Reliance Telecom Private",
        "country": "India",
        "mcc": "404",
        "iso": "in",
        "country_code": "91",
        "mnc": "67"
    },
    {
        "network": "Reliance Telecom Private",
        "country": "India",
        "mcc": "404",
        "iso": "in",
        "country_code": "91",
        "mnc": "18"
    },
    {
        "network": "Reliance Telecom Private",
        "country": "India",
        "mcc": "404",
        "iso": "in",
        "country_code": "91",
        "mnc": "85"
    },
    {
        "network": "Reliance Telecom Private",
        "country": "India",
        "mcc": "404",
        "iso": "in",
        "country_code": "91",
        "mnc": "09"
    },
    {
        "network": "Reliance Telecom Private",
        "country": "India",
        "mcc": "404",
        "iso": "in",
        "country_code": "91",
        "mnc": "36"
    },
    {
        "network": "Reliance Telecom Private",
        "country": "India",
        "mcc": "404",
        "iso": "in",
        "country_code": "91",
        "mnc": "52"
    },
    {
        "network": "RPG Cellular",
        "country": "India",
        "mcc": "404",
        "iso": "in",
        "country_code": "91",
        "mnc": "41"
    },
    {
        "network": "Spice",
        "country": "India",
        "mcc": "404",
        "iso": "in",
        "country_code": "91",
        "mnc": "14"
    },
    {
        "network": "Spice",
        "country": "India",
        "mcc": "404",
        "iso": "in",
        "country_code": "91",
        "mnc": "44"
    },
    {
        "network": "Sterling Cellular Ltd.",
        "country": "India",
        "mcc": "404",
        "iso": "in",
        "country_code": "91",
        "mnc": "11"
    },
    {
        "network": "TATA / Karnataka",
        "country": "India",
        "mcc": "405",
        "iso": "in",
        "country_code": "91",
        "mnc": "034"
    },
    {
        "network": "Usha Martin Telecom",
        "country": "India",
        "mcc": "404",
        "iso": "in",
        "country_code": "91",
        "mnc": "30"
    },
    {
        "network": "Axis/Natrindo",
        "country": "Indonesia",
        "mcc": "510",
        "iso": "id",
        "country_code": "62",
        "mnc": "08"
    },
    {
        "network": "Esia (PT Bakrie Telecom) (CDMA)",
        "country": "Indonesia",
        "mcc": "510",
        "iso": "id",
        "country_code": "62",
        "mnc": "99"
    },
    {
        "network": "Flexi (PT Telkom) (CDMA)",
        "country": "Indonesia",
        "mcc": "510",
        "iso": "id",
        "country_code": "62",
        "mnc": "07"
    },
    {
        "network": "H3G CP",
        "country": "Indonesia",
        "mcc": "510",
        "iso": "id",
        "country_code": "62",
        "mnc": "89"
    },
    {
        "network": "Indosat/Satelindo/M3",
        "country": "Indonesia",
        "mcc": "510",
        "iso": "id",
        "country_code": "62",
        "mnc": "21"
    },
    {
        "network": "Indosat/Satelindo/M3",
        "country": "Indonesia",
        "mcc": "510",
        "iso": "id",
        "country_code": "62",
        "mnc": "01"
    },
    {
        "network": "PT Pasifik Satelit Nusantara (PSN)",
        "country": "Indonesia",
        "mcc": "510",
        "iso": "id",
        "country_code": "62",
        "mnc": "00"
    },
    {
        "network": "PT Sampoerna Telekomunikasi Indonesia (STI)",
        "country": "Indonesia",
        "mcc": "510",
        "iso": "id",
        "country_code": "62",
        "mnc": "27"
    },
    {
        "network": "PT Smartfren Telecom Tbk",
        "country": "Indonesia",
        "mcc": "510",
        "iso": "id",
        "country_code": "62",
        "mnc": "28"
    },
    {
        "network": "PT Smartfren Telecom Tbk",
        "country": "Indonesia",
        "mcc": "510",
        "iso": "id",
        "country_code": "62",
        "mnc": "09"
    },
    {
        "network": "PT. Excelcom",
        "country": "Indonesia",
        "mcc": "510",
        "iso": "id",
        "country_code": "62",
        "mnc": "11"
    },
    {
        "network": "Telkomsel",
        "country": "Indonesia",
        "mcc": "510",
        "iso": "id",
        "country_code": "62",
        "mnc": "10"
    },
    {
        "network": "Antarctica",
        "country": "International Networks",
        "mcc": "901",
        "iso": "n/a",
        "country_code": "882",
        "mnc": "13"
    },
    {
        "network": "Mobile Telecommunications Company of Esfahan JV-PJS (MTCE)",
        "country": "Iran ",
        "mcc": "432",
        "iso": "ir",
        "country_code": "98",
        "mnc": "19"
    },
    {
        "network": "MTCE",
        "country": "Iran ",
        "mcc": "432",
        "iso": "ir",
        "country_code": "98",
        "mnc": "70"
    },
    {
        "network": "MTN/IranCell",
        "country": "Iran ",
        "mcc": "432",
        "iso": "ir",
        "country_code": "98",
        "mnc": "35"
    },
    {
        "network": "Rightel",
        "country": "Iran ",
        "mcc": "432",
        "iso": "ir",
        "country_code": "98",
        "mnc": "20"
    },
    {
        "network": "Taliya",
        "country": "Iran ",
        "mcc": "432",
        "iso": "ir",
        "country_code": "98",
        "mnc": "32"
    },
    {
        "network": "MCI/TCI",
        "country": "Iran ",
        "mcc": "432",
        "iso": "ir",
        "country_code": "98",
        "mnc": "11"
    },
    {
        "network": "TKC/KFZO",
        "country": "Iran ",
        "mcc": "432",
        "iso": "ir",
        "country_code": "98",
        "mnc": "14"
    },
    {
        "network": "Asia Cell",
        "country": "Iraq",
        "mcc": "418",
        "iso": "iq",
        "country_code": "964",
        "mnc": "05"
    },
    {
        "network": "Itisaluna and Kalemat",
        "country": "Iraq",
        "mcc": "418",
        "iso": "iq",
        "country_code": "964",
        "mnc": "92"
    },
    {
        "network": "Korek",
        "country": "Iraq",
        "mcc": "418",
        "iso": "iq",
        "country_code": "964",
        "mnc": "82"
    },
    {
        "network": "Korek",
        "country": "Iraq",
        "mcc": "418",
        "iso": "iq",
        "country_code": "964",
        "mnc": "40"
    },
    {
        "network": "Mobitel (Iraq-Kurdistan) and Moutiny",
        "country": "Iraq",
        "mcc": "418",
        "iso": "iq",
        "country_code": "964",
        "mnc": "45"
    },
    {
        "network": "Orascom Telecom",
        "country": "Iraq",
        "mcc": "418",
        "iso": "iq",
        "country_code": "964",
        "mnc": "30"
    },
    {
        "network": "ZAIN/Atheer/Orascom",
        "country": "Iraq",
        "mcc": "418",
        "iso": "iq",
        "country_code": "964",
        "mnc": "20"
    },
    {
        "network": "Sanatel",
        "country": "Iraq",
        "mcc": "418",
        "iso": "iq",
        "country_code": "964",
        "mnc": "08"
    },
    {
        "network": "Access Telecom Ltd.",
        "country": "Ireland",
        "mcc": "272",
        "iso": "ie",
        "country_code": "353",
        "mnc": "04"
    },
    {
        "network": "Clever Communications Ltd",
        "country": "Ireland",
        "mcc": "272",
        "iso": "ie",
        "country_code": "353",
        "mnc": "09"
    },
    {
        "network": "eircom Ltd",
        "country": "Ireland",
        "mcc": "272",
        "iso": "ie",
        "country_code": "353",
        "mnc": "07"
    },
    {
        "network": "Three/H3G",
        "country": "Ireland",
        "mcc": "272",
        "iso": "ie",
        "country_code": "353",
        "mnc": "05"
    },
    {
        "network": "Tesco Mobile/Liffey Telecom",
        "country": "Ireland",
        "mcc": "272",
        "iso": "ie",
        "country_code": "353",
        "mnc": "11"
    },
    {
        "network": "Lycamobile",
        "country": "Ireland",
        "mcc": "272",
        "iso": "ie",
        "country_code": "353",
        "mnc": "13"
    },
    {
        "network": "Meteor Mobile Ltd.",
        "country": "Ireland",
        "mcc": "272",
        "iso": "ie",
        "country_code": "353",
        "mnc": "03"
    },
    {
        "network": "Three/O2/Digifone",
        "country": "Ireland",
        "mcc": "272",
        "iso": "ie",
        "country_code": "353",
        "mnc": "02"
    },
    {
        "network": "Vodafone Eircell",
        "country": "Ireland",
        "mcc": "272",
        "iso": "ie",
        "country_code": "353",
        "mnc": "01"
    },
    {
        "network": "Alon Cellular Ltd",
        "country": "Israel",
        "mcc": "425",
        "iso": "il",
        "country_code": "972",
        "mnc": "14"
    },
    {
        "network": "Cellcom ltd.",
        "country": "Israel",
        "mcc": "425",
        "iso": "il",
        "country_code": "972",
        "mnc": "02"
    },
    {
        "network": "Golan Telekom",
        "country": "Israel",
        "mcc": "425",
        "iso": "il",
        "country_code": "972",
        "mnc": "08"
    },
    {
        "network": "Home Cellular Ltd",
        "country": "Israel",
        "mcc": "425",
        "iso": "il",
        "country_code": "972",
        "mnc": "15"
    },
    {
        "network": "Hot Mobile/Mirs",
        "country": "Israel",
        "mcc": "425",
        "iso": "il",
        "country_code": "972",
        "mnc": "77"
    },
    {
        "network": "Hot Mobile/Mirs",
        "country": "Israel",
        "mcc": "425",
        "iso": "il",
        "country_code": "972",
        "mnc": "07"
    },
    {
        "network": "Orange/Partner Co. Ltd.",
        "country": "Israel",
        "mcc": "425",
        "iso": "il",
        "country_code": "972",
        "mnc": "01"
    },
    {
        "network": "Pelephone",
        "country": "Israel",
        "mcc": "425",
        "iso": "il",
        "country_code": "972",
        "mnc": "12"
    },
    {
        "network": "Pelephone",
        "country": "Israel",
        "mcc": "425",
        "iso": "il",
        "country_code": "972",
        "mnc": "03"
    },
    {
        "network": "Rami Levy Hashikma Marketing Communications Ltd",
        "country": "Israel",
        "mcc": "425",
        "iso": "il",
        "country_code": "972",
        "mnc": "16"
    },
    {
        "network": "Telzar/AZI ",
        "country": "Israel",
        "mcc": "425",
        "iso": "il",
        "country_code": "972",
        "mnc": "19"
    },
    {
        "network": "BT Italia SpA",
        "country": "Italy",
        "mcc": "222",
        "iso": "it",
        "country_code": "39",
        "mnc": "34"
    },
    {
        "network": "Elsacom",
        "country": "Italy",
        "mcc": "222",
        "iso": "it",
        "country_code": "39",
        "mnc": "02"
    },
    {
        "network": "Fastweb SpA",
        "country": "Italy",
        "mcc": "222",
        "iso": "it",
        "country_code": "39",
        "mnc": "08"
    },
    {
        "network": "Fix Line",
        "country": "Italy",
        "mcc": "222",
        "iso": "it",
        "country_code": "39",
        "mnc": "00"
    },
    {
        "network": "Hi3G",
        "country": "Italy",
        "mcc": "222",
        "iso": "it",
        "country_code": "39",
        "mnc": "99"
    },
    {
        "network": "IPSE 2000",
        "country": "Italy",
        "mcc": "222",
        "iso": "it",
        "country_code": "39",
        "mnc": "77"
    },
    {
        "network": "Lycamobile Srl",
        "country": "Italy",
        "mcc": "222",
        "iso": "it",
        "country_code": "39",
        "mnc": "35"
    },
    {
        "network": "Noverca Italia Srl",
        "country": "Italy",
        "mcc": "222",
        "iso": "it",
        "country_code": "39",
        "mnc": "07"
    },
    {
        "network": "PosteMobile SpA",
        "country": "Italy",
        "mcc": "222",
        "iso": "it",
        "country_code": "39",
        "mnc": "33"
    },
    {
        "network": "Premium Number(s)",
        "country": "Italy",
        "mcc": "222",
        "iso": "it",
        "country_code": "39",
        "mnc": "00"
    },
    {
        "network": "RFI Rete Ferroviaria Italiana SpA",
        "country": "Italy",
        "mcc": "222",
        "iso": "it",
        "country_code": "39",
        "mnc": "30"
    },
    {
        "network": "Telecom Italia Mobile SpA",
        "country": "Italy",
        "mcc": "222",
        "iso": "it",
        "country_code": "39",
        "mnc": "43"
    },
    {
        "network": "TIM",
        "country": "Italy",
        "mcc": "222",
        "iso": "it",
        "country_code": "39",
        "mnc": "01"
    },
    {
        "network": "Telecom Italia Mobile SpA",
        "country": "Italy",
        "mcc": "222",
        "iso": "it",
        "country_code": "39",
        "mnc": "48"
    },
    {
        "network": "Vodafone",
        "country": "Italy",
        "mcc": "222",
        "iso": "it",
        "country_code": "39",
        "mnc": "10"
    },
    {
        "network": "Vodafone",
        "country": "Italy",
        "mcc": "222",
        "iso": "it",
        "country_code": "39",
        "mnc": "06"
    },
    {
        "network": "VOIP Line",
        "country": "Italy",
        "mcc": "222",
        "iso": "it",
        "country_code": "39",
        "mnc": "00"
    },
    {
        "network": "WIND (Blu) -",
        "country": "Italy",
        "mcc": "222",
        "iso": "it",
        "country_code": "39",
        "mnc": "44"
    },
    {
        "network": "WIND (Blu) -",
        "country": "Italy",
        "mcc": "222",
        "iso": "it",
        "country_code": "39",
        "mnc": "88"
    },
    {
        "network": "Aircomm SA",
        "country": "Ivory Coast",
        "mcc": "612",
        "iso": "ci",
        "country_code": "225",
        "mnc": "07"
    },
    {
        "network": "Atlantik Tel./Moov",
        "country": "Ivory Coast",
        "mcc": "612",
        "iso": "ci",
        "country_code": "225",
        "mnc": "02"
    },
    {
        "network": "Comium",
        "country": "Ivory Coast",
        "mcc": "612",
        "iso": "ci",
        "country_code": "225",
        "mnc": "04"
    },
    {
        "network": "Comstar",
        "country": "Ivory Coast",
        "mcc": "612",
        "iso": "ci",
        "country_code": "225",
        "mnc": "01"
    },
    {
        "network": "MTN",
        "country": "Ivory Coast",
        "mcc": "612",
        "iso": "ci",
        "country_code": "225",
        "mnc": "05"
    },
    {
        "network": "Orange",
        "country": "Ivory Coast",
        "mcc": "612",
        "iso": "ci",
        "country_code": "225",
        "mnc": "03"
    },
    {
        "network": "OriCell",
        "country": "Ivory Coast",
        "mcc": "612",
        "iso": "ci",
        "country_code": "225",
        "mnc": "06"
    },
    {
        "network": "Cable & Wireless",
        "country": "Jamaica",
        "mcc": "338",
        "iso": "jm",
        "country_code": "1876",
        "mnc": "020"
    },
    {
        "network": "Cable & Wireless",
        "country": "Jamaica",
        "mcc": "338",
        "iso": "jm",
        "country_code": "1876",
        "mnc": "110"
    },
    {
        "network": "Cable & Wireless",
        "country": "Jamaica",
        "mcc": "338",
        "iso": "jm",
        "country_code": "1876",
        "mnc": "180"
    },
    {
        "network": "DIGICEL/Mossel",
        "country": "Jamaica",
        "mcc": "338",
        "iso": "jm",
        "country_code": "1876",
        "mnc": "050"
    },
    {
        "network": "Y-Mobile",
        "country": "Japan",
        "mcc": "440",
        "iso": "jp",
        "country_code": "81",
        "mnc": "00"
    },
    {
        "network": "KDDI Corporation",
        "country": "Japan",
        "mcc": "440",
        "iso": "jp",
        "country_code": "81",
        "mnc": "76"
    },
    {
        "network": "KDDI Corporation",
        "country": "Japan",
        "mcc": "440",
        "iso": "jp",
        "country_code": "81",
        "mnc": "71"
    },
    {
        "network": "KDDI Corporation",
        "country": "Japan",
        "mcc": "440",
        "iso": "jp",
        "country_code": "81",
        "mnc": "53"
    },
    {
        "network": "KDDI Corporation",
        "country": "Japan",
        "mcc": "440",
        "iso": "jp",
        "country_code": "81",
        "mnc": "77"
    },
    {
        "network": "KDDI Corporation",
        "country": "Japan",
        "mcc": "440",
        "iso": "jp",
        "country_code": "81",
        "mnc": "08"
    },
    {
        "network": "KDDI Corporation",
        "country": "Japan",
        "mcc": "440",
        "iso": "jp",
        "country_code": "81",
        "mnc": "72"
    },
    {
        "network": "KDDI Corporation",
        "country": "Japan",
        "mcc": "440",
        "iso": "jp",
        "country_code": "81",
        "mnc": "54"
    },
    {
        "network": "KDDI Corporation",
        "country": "Japan",
        "mcc": "440",
        "iso": "jp",
        "country_code": "81",
        "mnc": "79"
    },
    {
        "network": "KDDI Corporation",
        "country": "Japan",
        "mcc": "440",
        "iso": "jp",
        "country_code": "81",
        "mnc": "07"
    },
    {
        "network": "KDDI Corporation",
        "country": "Japan",
        "mcc": "440",
        "iso": "jp",
        "country_code": "81",
        "mnc": "73"
    },
    {
        "network": "KDDI Corporation",
        "country": "Japan",
        "mcc": "440",
        "iso": "jp",
        "country_code": "81",
        "mnc": "55"
    },
    {
        "network": "KDDI Corporation",
        "country": "Japan",
        "mcc": "440",
        "iso": "jp",
        "country_code": "81",
        "mnc": "88"
    },
    {
        "network": "KDDI Corporation",
        "country": "Japan",
        "mcc": "440",
        "iso": "jp",
        "country_code": "81",
        "mnc": "50"
    },
    {
        "network": "KDDI Corporation",
        "country": "Japan",
        "mcc": "440",
        "iso": "jp",
        "country_code": "81",
        "mnc": "74"
    },
    {
        "network": "KDDI Corporation",
        "country": "Japan",
        "mcc": "440",
        "iso": "jp",
        "country_code": "81",
        "mnc": "70"
    },
    {
        "network": "KDDI Corporation",
        "country": "Japan",
        "mcc": "440",
        "iso": "jp",
        "country_code": "81",
        "mnc": "89"
    },
    {
        "network": "KDDI Corporation",
        "country": "Japan",
        "mcc": "440",
        "iso": "jp",
        "country_code": "81",
        "mnc": "51"
    },
    {
        "network": "KDDI Corporation",
        "country": "Japan",
        "mcc": "440",
        "iso": "jp",
        "country_code": "81",
        "mnc": "75"
    },
    {
        "network": "KDDI Corporation",
        "country": "Japan",
        "mcc": "440",
        "iso": "jp",
        "country_code": "81",
        "mnc": "56"
    },
    {
        "network": "KDDI Corporation",
        "country": "Japan",
        "mcc": "440",
        "iso": "jp",
        "country_code": "81",
        "mnc": "52"
    },
    {
        "network": "KDDI Corporation",
        "country": "Japan",
        "mcc": "441",
        "iso": "jp",
        "country_code": "81",
        "mnc": "70"
    },
    {
        "network": "NTT Docomo",
        "country": "Japan",
        "mcc": "440",
        "iso": "jp",
        "country_code": "81",
        "mnc": "02"
    },
    {
        "network": "NTT Docomo",
        "country": "Japan",
        "mcc": "440",
        "iso": "jp",
        "country_code": "81",
        "mnc": "22"
    },
    {
        "network": "NTT Docomo",
        "country": "Japan",
        "mcc": "441",
        "iso": "jp",
        "country_code": "81",
        "mnc": "43"
    },
    {
        "network": "NTT Docomo",
        "country": "Japan",
        "mcc": "440",
        "iso": "jp",
        "country_code": "81",
        "mnc": "27"
    },
    {
        "network": "NTT Docomo",
        "country": "Japan",
        "mcc": "440",
        "iso": "jp",
        "country_code": "81",
        "mnc": "87"
    },
    {
        "network": "NTT Docomo",
        "country": "Japan",
        "mcc": "440",
        "iso": "jp",
        "country_code": "81",
        "mnc": "17"
    },
    {
        "network": "NTT Docomo",
        "country": "Japan",
        "mcc": "440",
        "iso": "jp",
        "country_code": "81",
        "mnc": "31"
    },
    {
        "network": "NTT Docomo",
        "country": "Japan",
        "mcc": "440",
        "iso": "jp",
        "country_code": "81",
        "mnc": "65"
    },
    {
        "network": "NTT Docomo",
        "country": "Japan",
        "mcc": "440",
        "iso": "jp",
        "country_code": "81",
        "mnc": "36"
    },
    {
        "network": "NTT Docomo",
        "country": "Japan",
        "mcc": "441",
        "iso": "jp",
        "country_code": "81",
        "mnc": "92"
    },
    {
        "network": "NTT Docomo",
        "country": "Japan",
        "mcc": "440",
        "iso": "jp",
        "country_code": "81",
        "mnc": "03"
    },
    {
        "network": "NTT Docomo",
        "country": "Japan",
        "mcc": "440",
        "iso": "jp",
        "country_code": "81",
        "mnc": "12"
    },
    {
        "network": "NTT Docomo",
        "country": "Japan",
        "mcc": "440",
        "iso": "jp",
        "country_code": "81",
        "mnc": "58"
    },
    {
        "network": "NTT Docomo",
        "country": "Japan",
        "mcc": "440",
        "iso": "jp",
        "country_code": "81",
        "mnc": "28"
    },
    {
        "network": "NTT Docomo",
        "country": "Japan",
        "mcc": "440",
        "iso": "jp",
        "country_code": "81",
        "mnc": "61"
    },
    {
        "network": "NTT Docomo",
        "country": "Japan",
        "mcc": "440",
        "iso": "jp",
        "country_code": "81",
        "mnc": "18"
    },
    {
        "network": "NTT Docomo",
        "country": "Japan",
        "mcc": "441",
        "iso": "jp",
        "country_code": "81",
        "mnc": "91"
    },
    {
        "network": "NTT Docomo",
        "country": "Japan",
        "mcc": "440",
        "iso": "jp",
        "country_code": "81",
        "mnc": "32"
    },
    {
        "network": "NTT Docomo",
        "country": "Japan",
        "mcc": "440",
        "iso": "jp",
        "country_code": "81",
        "mnc": "66"
    },
    {
        "network": "NTT Docomo",
        "country": "Japan",
        "mcc": "440",
        "iso": "jp",
        "country_code": "81",
        "mnc": "35"
    },
    {
        "network": "NTT Docomo",
        "country": "Japan",
        "mcc": "441",
        "iso": "jp",
        "country_code": "81",
        "mnc": "93"
    },
    {
        "network": "NTT Docomo",
        "country": "Japan",
        "mcc": "441",
        "iso": "jp",
        "country_code": "81",
        "mnc": "40"
    },
    {
        "network": "NTT Docomo",
        "country": "Japan",
        "mcc": "440",
        "iso": "jp",
        "country_code": "81",
        "mnc": "09"
    },
    {
        "network": "NTT Docomo",
        "country": "Japan",
        "mcc": "440",
        "iso": "jp",
        "country_code": "81",
        "mnc": "49"
    },
    {
        "network": "NTT Docomo",
        "country": "Japan",
        "mcc": "440",
        "iso": "jp",
        "country_code": "81",
        "mnc": "29"
    },
    {
        "network": "NTT Docomo",
        "country": "Japan",
        "mcc": "440",
        "iso": "jp",
        "country_code": "81",
        "mnc": "60"
    },
    {
        "network": "NTT Docomo",
        "country": "Japan",
        "mcc": "440",
        "iso": "jp",
        "country_code": "81",
        "mnc": "19"
    },
    {
        "network": "NTT Docomo",
        "country": "Japan",
        "mcc": "441",
        "iso": "jp",
        "country_code": "81",
        "mnc": "90"
    },
    {
        "network": "NTT Docomo",
        "country": "Japan",
        "mcc": "440",
        "iso": "jp",
        "country_code": "81",
        "mnc": "33"
    },
    {
        "network": "NTT Docomo",
        "country": "Japan",
        "mcc": "440",
        "iso": "jp",
        "country_code": "81",
        "mnc": "67"
    },
    {
        "network": "NTT Docomo",
        "country": "Japan",
        "mcc": "440",
        "iso": "jp",
        "country_code": "81",
        "mnc": "14"
    },
    {
        "network": "NTT Docomo",
        "country": "Japan",
        "mcc": "441",
        "iso": "jp",
        "country_code": "81",
        "mnc": "94"
    },
    {
        "network": "NTT Docomo",
        "country": "Japan",
        "mcc": "441",
        "iso": "jp",
        "country_code": "81",
        "mnc": "41"
    },
    {
        "network": "NTT Docomo",
        "country": "Japan",
        "mcc": "440",
        "iso": "jp",
        "country_code": "81",
        "mnc": "62"
    },
    {
        "network": "NTT Docomo",
        "country": "Japan",
        "mcc": "440",
        "iso": "jp",
        "country_code": "81",
        "mnc": "39"
    },
    {
        "network": "NTT Docomo",
        "country": "Japan",
        "mcc": "440",
        "iso": "jp",
        "country_code": "81",
        "mnc": "30"
    },
    {
        "network": "NTT Docomo",
        "country": "Japan",
        "mcc": "440",
        "iso": "jp",
        "country_code": "81",
        "mnc": "10"
    },
    {
        "network": "NTT Docomo",
        "country": "Japan",
        "mcc": "441",
        "iso": "jp",
        "country_code": "81",
        "mnc": "45"
    },
    {
        "network": "NTT Docomo",
        "country": "Japan",
        "mcc": "440",
        "iso": "jp",
        "country_code": "81",
        "mnc": "24"
    },
    {
        "network": "NTT Docomo",
        "country": "Japan",
        "mcc": "440",
        "iso": "jp",
        "country_code": "81",
        "mnc": "68"
    },
    {
        "network": "NTT Docomo",
        "country": "Japan",
        "mcc": "440",
        "iso": "jp",
        "country_code": "81",
        "mnc": "15"
    },
    {
        "network": "NTT Docomo",
        "country": "Japan",
        "mcc": "441",
        "iso": "jp",
        "country_code": "81",
        "mnc": "98"
    },
    {
        "network": "NTT Docomo",
        "country": "Japan",
        "mcc": "441",
        "iso": "jp",
        "country_code": "81",
        "mnc": "42"
    },
    {
        "network": "NTT Docomo",
        "country": "Japan",
        "mcc": "440",
        "iso": "jp",
        "country_code": "81",
        "mnc": "63"
    },
    {
        "network": "NTT Docomo",
        "country": "Japan",
        "mcc": "440",
        "iso": "jp",
        "country_code": "81",
        "mnc": "38"
    },
    {
        "network": "NTT Docomo",
        "country": "Japan",
        "mcc": "440",
        "iso": "jp",
        "country_code": "81",
        "mnc": "26"
    },
    {
        "network": "NTT Docomo",
        "country": "Japan",
        "mcc": "440",
        "iso": "jp",
        "country_code": "81",
        "mnc": "11"
    },
    {
        "network": "NTT Docomo",
        "country": "Japan",
        "mcc": "440",
        "iso": "jp",
        "country_code": "81",
        "mnc": "23"
    },
    {
        "network": "NTT Docomo",
        "country": "Japan",
        "mcc": "440",
        "iso": "jp",
        "country_code": "81",
        "mnc": "01"
    },
    {
        "network": "NTT Docomo",
        "country": "Japan",
        "mcc": "440",
        "iso": "jp",
        "country_code": "81",
        "mnc": "21"
    },
    {
        "network": "NTT Docomo",
        "country": "Japan",
        "mcc": "441",
        "iso": "jp",
        "country_code": "81",
        "mnc": "44"
    },
    {
        "network": "NTT Docomo",
        "country": "Japan",
        "mcc": "440",
        "iso": "jp",
        "country_code": "81",
        "mnc": "13"
    },
    {
        "network": "NTT Docomo",
        "country": "Japan",
        "mcc": "440",
        "iso": "jp",
        "country_code": "81",
        "mnc": "69"
    },
    {
        "network": "NTT Docomo",
        "country": "Japan",
        "mcc": "440",
        "iso": "jp",
        "country_code": "81",
        "mnc": "16"
    },
    {
        "network": "NTT Docomo",
        "country": "Japan",
        "mcc": "441",
        "iso": "jp",
        "country_code": "81",
        "mnc": "99"
    },
    {
        "network": "NTT Docomo",
        "country": "Japan",
        "mcc": "440",
        "iso": "jp",
        "country_code": "81",
        "mnc": "34"
    },
    {
        "network": "NTT Docomo",
        "country": "Japan",
        "mcc": "440",
        "iso": "jp",
        "country_code": "81",
        "mnc": "64"
    },
    {
        "network": "NTT Docomo",
        "country": "Japan",
        "mcc": "440",
        "iso": "jp",
        "country_code": "81",
        "mnc": "37"
    },
    {
        "network": "NTT Docomo",
        "country": "Japan",
        "mcc": "440",
        "iso": "jp",
        "country_code": "81",
        "mnc": "25"
    },
    {
        "network": "NTT Docomo",
        "country": "Japan",
        "mcc": "440",
        "iso": "jp",
        "country_code": "81",
        "mnc": "99"
    },
    {
        "network": "Okinawa Cellular Telephone",
        "country": "Japan",
        "mcc": "440",
        "iso": "jp",
        "country_code": "81",
        "mnc": "78"
    },
    {
        "network": "SoftBank Mobile Corp",
        "country": "Japan",
        "mcc": "440",
        "iso": "jp",
        "country_code": "81",
        "mnc": "46"
    },
    {
        "network": "SoftBank Mobile Corp",
        "country": "Japan",
        "mcc": "440",
        "iso": "jp",
        "country_code": "81",
        "mnc": "97"
    },
    {
        "network": "SoftBank Mobile Corp",
        "country": "Japan",
        "mcc": "440",
        "iso": "jp",
        "country_code": "81",
        "mnc": "42"
    },
    {
        "network": "SoftBank Mobile Corp",
        "country": "Japan",
        "mcc": "441",
        "iso": "jp",
        "country_code": "81",
        "mnc": "65"
    },
    {
        "network": "SoftBank Mobile Corp",
        "country": "Japan",
        "mcc": "440",
        "iso": "jp",
        "country_code": "81",
        "mnc": "90"
    },
    {
        "network": "SoftBank Mobile Corp",
        "country": "Japan",
        "mcc": "440",
        "iso": "jp",
        "country_code": "81",
        "mnc": "92"
    },
    {
        "network": "SoftBank Mobile Corp",
        "country": "Japan",
        "mcc": "440",
        "iso": "jp",
        "country_code": "81",
        "mnc": "98"
    },
    {
        "network": "SoftBank Mobile Corp",
        "country": "Japan",
        "mcc": "440",
        "iso": "jp",
        "country_code": "81",
        "mnc": "43"
    },
    {
        "network": "SoftBank Mobile Corp",
        "country": "Japan",
        "mcc": "440",
        "iso": "jp",
        "country_code": "81",
        "mnc": "93"
    },
    {
        "network": "SoftBank Mobile Corp",
        "country": "Japan",
        "mcc": "440",
        "iso": "jp",
        "country_code": "81",
        "mnc": "48"
    },
    {
        "network": "SoftBank Mobile Corp",
        "country": "Japan",
        "mcc": "440",
        "iso": "jp",
        "country_code": "81",
        "mnc": "06"
    },
    {
        "network": "SoftBank Mobile Corp",
        "country": "Japan",
        "mcc": "441",
        "iso": "jp",
        "country_code": "81",
        "mnc": "61"
    },
    {
        "network": "SoftBank Mobile Corp",
        "country": "Japan",
        "mcc": "440",
        "iso": "jp",
        "country_code": "81",
        "mnc": "44"
    },
    {
        "network": "SoftBank Mobile Corp",
        "country": "Japan",
        "mcc": "440",
        "iso": "jp",
        "country_code": "81",
        "mnc": "94"
    },
    {
        "network": "SoftBank Mobile Corp",
        "country": "Japan",
        "mcc": "440",
        "iso": "jp",
        "country_code": "81",
        "mnc": "04"
    },
    {
        "network": "SoftBank Mobile Corp",
        "country": "Japan",
        "mcc": "441",
        "iso": "jp",
        "country_code": "81",
        "mnc": "62"
    },
    {
        "network": "SoftBank Mobile Corp",
        "country": "Japan",
        "mcc": "440",
        "iso": "jp",
        "country_code": "81",
        "mnc": "45"
    },
    {
        "network": "SoftBank Mobile Corp",
        "country": "Japan",
        "mcc": "440",
        "iso": "jp",
        "country_code": "81",
        "mnc": "20"
    },
    {
        "network": "SoftBank Mobile Corp",
        "country": "Japan",
        "mcc": "440",
        "iso": "jp",
        "country_code": "81",
        "mnc": "96"
    },
    {
        "network": "SoftBank Mobile Corp",
        "country": "Japan",
        "mcc": "440",
        "iso": "jp",
        "country_code": "81",
        "mnc": "40"
    },
    {
        "network": "SoftBank Mobile Corp",
        "country": "Japan",
        "mcc": "441",
        "iso": "jp",
        "country_code": "81",
        "mnc": "63"
    },
    {
        "network": "SoftBank Mobile Corp",
        "country": "Japan",
        "mcc": "440",
        "iso": "jp",
        "country_code": "81",
        "mnc": "47"
    },
    {
        "network": "SoftBank Mobile Corp",
        "country": "Japan",
        "mcc": "440",
        "iso": "jp",
        "country_code": "81",
        "mnc": "95"
    },
    {
        "network": "SoftBank Mobile Corp",
        "country": "Japan",
        "mcc": "440",
        "iso": "jp",
        "country_code": "81",
        "mnc": "41"
    },
    {
        "network": "SoftBank Mobile Corp",
        "country": "Japan",
        "mcc": "441",
        "iso": "jp",
        "country_code": "81",
        "mnc": "64"
    },
    {
        "network": "KDDI Corporation",
        "country": "Japan",
        "mcc": "440",
        "iso": "jp",
        "country_code": "81",
        "mnc": "83"
    },
    {
        "network": "KDDI Corporation",
        "country": "Japan",
        "mcc": "440",
        "iso": "jp",
        "country_code": "81",
        "mnc": "85"
    },
    {
        "network": "KDDI Corporation",
        "country": "Japan",
        "mcc": "440",
        "iso": "jp",
        "country_code": "81",
        "mnc": "81"
    },
    {
        "network": "KDDI Corporation",
        "country": "Japan",
        "mcc": "440",
        "iso": "jp",
        "country_code": "81",
        "mnc": "80"
    },
    {
        "network": "KDDI Corporation",
        "country": "Japan",
        "mcc": "440",
        "iso": "jp",
        "country_code": "81",
        "mnc": "86"
    },
    {
        "network": "KDDI Corporation",
        "country": "Japan",
        "mcc": "440",
        "iso": "jp",
        "country_code": "81",
        "mnc": "84"
    },
    {
        "network": "KDDI Corporation",
        "country": "Japan",
        "mcc": "440",
        "iso": "jp",
        "country_code": "81",
        "mnc": "82"
    },
    {
        "network": "Orange/Petra",
        "country": "Jordan",
        "mcc": "416",
        "iso": "jo",
        "country_code": "962",
        "mnc": "77"
    },
    {
        "network": "Umniah Mobile Co.",
        "country": "Jordan",
        "mcc": "416",
        "iso": "jo",
        "country_code": "962",
        "mnc": "03"
    },
    {
        "network": "Xpress",
        "country": "Jordan",
        "mcc": "416",
        "iso": "jo",
        "country_code": "962",
        "mnc": "02"
    },
    {
        "network": "ZAIN /J.M.T.S",
        "country": "Jordan",
        "mcc": "416",
        "iso": "jo",
        "country_code": "962",
        "mnc": "01"
    },
    {
        "network": "Beeline/KaR-Tel LLP",
        "country": "Kazakhstan",
        "mcc": "401",
        "iso": "kz",
        "country_code": "7",
        "mnc": "01"
    },
    {
        "network": "Dalacom/Altel",
        "country": "Kazakhstan",
        "mcc": "401",
        "iso": "kz",
        "country_code": "7",
        "mnc": "07"
    },
    {
        "network": "K-Cell",
        "country": "Kazakhstan",
        "mcc": "401",
        "iso": "kz",
        "country_code": "7",
        "mnc": "02"
    },
    {
        "network": "Tele2/NEO/MTS",
        "country": "Kazakhstan",
        "mcc": "401",
        "iso": "kz",
        "country_code": "7",
        "mnc": "77"
    },
    {
        "network": "Econet Wireless",
        "country": "Kenya",
        "mcc": "639",
        "iso": "ke",
        "country_code": "254",
        "mnc": "05"
    },
    {
        "network": "Orange",
        "country": "Kenya",
        "mcc": "639",
        "iso": "ke",
        "country_code": "254",
        "mnc": "07"
    },
    {
        "network": "Safaricom Ltd.",
        "country": "Kenya",
        "mcc": "639",
        "iso": "ke",
        "country_code": "254",
        "mnc": "02"
    },
    {
        "network": "Airtel/Zain/Celtel Ltd.",
        "country": "Kenya",
        "mcc": "639",
        "iso": "ke",
        "country_code": "254",
        "mnc": "03"
    },
    {
        "network": "Kiribati Frigate",
        "country": "Kiribati",
        "mcc": "545",
        "iso": "ki",
        "country_code": "686",
        "mnc": "09"
    },
    {
        "network": "Sun Net",
        "country": "Korea N., Dem. People's Rep.",
        "mcc": "467",
        "iso": "kp",
        "country_code": "850",
        "mnc": "193"
    },
    {
        "network": "KT Freetel Co. Ltd.",
        "country": "Korea S, Republic of",
        "mcc": "450",
        "iso": "kr",
        "country_code": "82",
        "mnc": "02"
    },
    {
        "network": "KT Freetel Co. Ltd.",
        "country": "Korea S, Republic of",
        "mcc": "450",
        "iso": "kr",
        "country_code": "82",
        "mnc": "04"
    },
    {
        "network": "KT Freetel Co. Ltd.",
        "country": "Korea S, Republic of",
        "mcc": "450",
        "iso": "kr",
        "country_code": "82",
        "mnc": "08"
    },
    {
        "network": "LG Telecom",
        "country": "Korea S, Republic of",
        "mcc": "450",
        "iso": "kr",
        "country_code": "82",
        "mnc": "06"
    },
    {
        "network": "SK Telecom",
        "country": "Korea S, Republic of",
        "mcc": "450",
        "iso": "kr",
        "country_code": "82",
        "mnc": "03"
    },
    {
        "network": "SK Telecom Co. Ltd",
        "country": "Korea S, Republic of",
        "mcc": "450",
        "iso": "kr",
        "country_code": "82",
        "mnc": "05"
    },
    {
        "network": "Viva",
        "country": "Kuwait",
        "mcc": "419",
        "iso": "kw",
        "country_code": "965",
        "mnc": "04"
    },
    {
        "network": "Wataniya",
        "country": "Kuwait",
        "mcc": "419",
        "iso": "kw",
        "country_code": "965",
        "mnc": "03"
    },
    {
        "network": "Zain",
        "country": "Kuwait",
        "mcc": "419",
        "iso": "kw",
        "country_code": "965",
        "mnc": "02"
    },
    {
        "network": "AkTel LLC",
        "country": "Kyrgyzstan",
        "mcc": "437",
        "iso": "kg",
        "country_code": "996",
        "mnc": "03"
    },
    {
        "network": "Beeline/Bitel",
        "country": "Kyrgyzstan",
        "mcc": "437",
        "iso": "kg",
        "country_code": "996",
        "mnc": "01"
    },
    {
        "network": "MEGACOM",
        "country": "Kyrgyzstan",
        "mcc": "437",
        "iso": "kg",
        "country_code": "996",
        "mnc": "05"
    },
    {
        "network": "O!/NUR Telecom",
        "country": "Kyrgyzstan",
        "mcc": "437",
        "iso": "kg",
        "country_code": "996",
        "mnc": "09"
    },
    {
        "network": "ETL Mobile",
        "country": "Laos P.D.R.",
        "mcc": "457",
        "iso": "la",
        "country_code": "856",
        "mnc": "02"
    },
    {
        "network": "Lao Tel",
        "country": "Laos P.D.R.",
        "mcc": "457",
        "iso": "la",
        "country_code": "856",
        "mnc": "01"
    },
    {
        "network": "Beeline/Tigo/Millicom",
        "country": "Laos P.D.R.",
        "mcc": "457",
        "iso": "la",
        "country_code": "856",
        "mnc": "08"
    },
    {
        "network": "UNITEL/LAT",
        "country": "Laos P.D.R.",
        "mcc": "457",
        "iso": "la",
        "country_code": "856",
        "mnc": "03"
    },
    {
        "network": "Bite",
        "country": "Latvia",
        "mcc": "247",
        "iso": "lv",
        "country_code": "371",
        "mnc": "05"
    },
    {
        "network": "Latvian Mobile Phone",
        "country": "Latvia",
        "mcc": "247",
        "iso": "lv",
        "country_code": "371",
        "mnc": "01"
    },
    {
        "network": "SIA Camel Mobile",
        "country": "Latvia",
        "mcc": "247",
        "iso": "lv",
        "country_code": "371",
        "mnc": "09"
    },
    {
        "network": "SIA IZZI",
        "country": "Latvia",
        "mcc": "247",
        "iso": "lv",
        "country_code": "371",
        "mnc": "08"
    },
    {
        "network": "SIA Master Telecom",
        "country": "Latvia",
        "mcc": "247",
        "iso": "lv",
        "country_code": "371",
        "mnc": "07"
    },
    {
        "network": "SIA Rigatta",
        "country": "Latvia",
        "mcc": "247",
        "iso": "lv",
        "country_code": "371",
        "mnc": "06"
    },
    {
        "network": "Tele2",
        "country": "Latvia",
        "mcc": "247",
        "iso": "lv",
        "country_code": "371",
        "mnc": "02"
    },
    {
        "network": "TRIATEL/Telekom Baltija",
        "country": "Latvia",
        "mcc": "247",
        "iso": "lv",
        "country_code": "371",
        "mnc": "03"
    },
    {
        "network": "Cellis",
        "country": "Lebanon",
        "mcc": "415",
        "iso": "lb",
        "country_code": "961",
        "mnc": "32"
    },
    {
        "network": "Cellis",
        "country": "Lebanon",
        "mcc": "415",
        "iso": "lb",
        "country_code": "961",
        "mnc": "35"
    },
    {
        "network": "Cellis",
        "country": "Lebanon",
        "mcc": "415",
        "iso": "lb",
        "country_code": "961",
        "mnc": "33"
    },
    {
        "network": "FTML Cellis",
        "country": "Lebanon",
        "mcc": "415",
        "iso": "lb",
        "country_code": "961",
        "mnc": "34"
    },
    {
        "network": "MIC2/LibanCell/MTC",
        "country": "Lebanon",
        "mcc": "415",
        "iso": "lb",
        "country_code": "961",
        "mnc": "38"
    },
    {
        "network": "MIC2/LibanCell/MTC",
        "country": "Lebanon",
        "mcc": "415",
        "iso": "lb",
        "country_code": "961",
        "mnc": "37"
    },
    {
        "network": "MIC2/LibanCell/MTC",
        "country": "Lebanon",
        "mcc": "415",
        "iso": "lb",
        "country_code": "961",
        "mnc": "39"
    },
    {
        "network": "MIC1 (Alfa)",
        "country": "Lebanon",
        "mcc": "415",
        "iso": "lb",
        "country_code": "961",
        "mnc": "01"
    },
    {
        "network": "MIC2/LibanCell/MTC",
        "country": "Lebanon",
        "mcc": "415",
        "iso": "lb",
        "country_code": "961",
        "mnc": "03"
    },
    {
        "network": "MIC2/LibanCell/MTC",
        "country": "Lebanon",
        "mcc": "415",
        "iso": "lb",
        "country_code": "961",
        "mnc": "36"
    },
    {
        "network": "Econet/Ezi-cel",
        "country": "Lesotho",
        "mcc": "651",
        "iso": "ls",
        "country_code": "266",
        "mnc": "02"
    },
    {
        "network": "Vodacom Lesotho",
        "country": "Lesotho",
        "mcc": "651",
        "iso": "ls",
        "country_code": "266",
        "mnc": "01"
    },
    {
        "network": "CELLCOM",
        "country": "Liberia",
        "mcc": "618",
        "iso": "lr",
        "country_code": "231",
        "mnc": "07"
    },
    {
        "network": "Comium BVI",
        "country": "Liberia",
        "mcc": "618",
        "iso": "lr",
        "country_code": "231",
        "mnc": "04"
    },
    {
        "network": "Libercell",
        "country": "Liberia",
        "mcc": "618",
        "iso": "lr",
        "country_code": "231",
        "mnc": "02"
    },
    {
        "network": "LibTelco",
        "country": "Liberia",
        "mcc": "618",
        "iso": "lr",
        "country_code": "231",
        "mnc": "20"
    },
    {
        "network": "Lonestar",
        "country": "Liberia",
        "mcc": "618",
        "iso": "lr",
        "country_code": "231",
        "mnc": "01"
    },
    {
        "network": "Al-Madar",
        "country": "Libya",
        "mcc": "606",
        "iso": "ly",
        "country_code": "218",
        "mnc": "02"
    },
    {
        "network": "Al-Madar",
        "country": "Libya",
        "mcc": "606",
        "iso": "ly",
        "country_code": "218",
        "mnc": "01"
    },
    {
        "network": "Hatef",
        "country": "Libya",
        "mcc": "606",
        "iso": "ly",
        "country_code": "218",
        "mnc": "06"
    },
    {
        "network": "Libyana",
        "country": "Libya",
        "mcc": "606",
        "iso": "ly",
        "country_code": "218",
        "mnc": "00"
    },
    {
        "network": "Libyana",
        "country": "Libya",
        "mcc": "606",
        "iso": "ly",
        "country_code": "218",
        "mnc": "03"
    },
    {
        "network": "CUBIC (Liechtenstein",
        "country": "Liechtenstein",
        "mcc": "295",
        "iso": "li",
        "country_code": "423",
        "mnc": "06"
    },
    {
        "network": "First Mobile AG",
        "country": "Liechtenstein",
        "mcc": "295",
        "iso": "li",
        "country_code": "423",
        "mnc": "07"
    },
    {
        "network": "Orange",
        "country": "Liechtenstein",
        "mcc": "295",
        "iso": "li",
        "country_code": "423",
        "mnc": "02"
    },
    {
        "network": "Swisscom FL AG",
        "country": "Liechtenstein",
        "mcc": "295",
        "iso": "li",
        "country_code": "423",
        "mnc": "01"
    },
    {
        "network": "Alpmobile/Tele2",
        "country": "Liechtenstein",
        "mcc": "295",
        "iso": "li",
        "country_code": "423",
        "mnc": "77"
    },
    {
        "network": "Telecom FL1 AG",
        "country": "Liechtenstein",
        "mcc": "295",
        "iso": "li",
        "country_code": "423",
        "mnc": "05"
    },
    {
        "network": "Bite",
        "country": "Lithuania",
        "mcc": "246",
        "iso": "lt",
        "country_code": "370",
        "mnc": "02"
    },
    {
        "network": "Omnitel",
        "country": "Lithuania",
        "mcc": "246",
        "iso": "lt",
        "country_code": "370",
        "mnc": "01"
    },
    {
        "network": "Tele2",
        "country": "Lithuania",
        "mcc": "246",
        "iso": "lt",
        "country_code": "370",
        "mnc": "03"
    },
    {
        "network": "Millicom Tango GSM",
        "country": "Luxembourg",
        "mcc": "270",
        "iso": "lu",
        "country_code": "352",
        "mnc": "77"
    },
    {
        "network": "P+T/Post LUXGSM",
        "country": "Luxembourg",
        "mcc": "270",
        "iso": "lu",
        "country_code": "352",
        "mnc": "01"
    },
    {
        "network": "Orange/VOXmobile S.A.",
        "country": "Luxembourg",
        "mcc": "270",
        "iso": "lu",
        "country_code": "352",
        "mnc": "99"
    },
    {
        "network": "C.T.M. TELEMOVEL+",
        "country": "Macao, China",
        "mcc": "455",
        "iso": "mo",
        "country_code": "853",
        "mnc": "04"
    },
    {
        "network": "C.T.M. TELEMOVEL+",
        "country": "Macao, China",
        "mcc": "455",
        "iso": "mo",
        "country_code": "853",
        "mnc": "01"
    },
    {
        "network": "China Telecom",
        "country": "Macao, China",
        "mcc": "455",
        "iso": "mo",
        "country_code": "853",
        "mnc": "02"
    },
    {
        "network": "Hutchison Telephone Co. Ltd",
        "country": "Macao, China",
        "mcc": "455",
        "iso": "mo",
        "country_code": "853",
        "mnc": "05"
    },
    {
        "network": "Hutchison Telephone Co. Ltd",
        "country": "Macao, China",
        "mcc": "455",
        "iso": "mo",
        "country_code": "853",
        "mnc": "03"
    },
    {
        "network": "Smartone Mobile",
        "country": "Macao, China",
        "mcc": "455",
        "iso": "mo",
        "country_code": "853",
        "mnc": "06"
    },
    {
        "network": "Smartone Mobile",
        "country": "Macao, China",
        "mcc": "455",
        "iso": "mo",
        "country_code": "853",
        "mnc": "00"
    },
    {
        "network": "ONE/Cosmofone",
        "country": "Macedonia",
        "mcc": "294",
        "iso": "mk",
        "country_code": "389",
        "mnc": "75"
    },
    {
        "network": "ONE/Cosmofone",
        "country": "Macedonia",
        "mcc": "294",
        "iso": "mk",
        "country_code": "389",
        "mnc": "02"
    },
    {
        "network": "T-Mobile/Mobimak",
        "country": "Macedonia",
        "mcc": "294",
        "iso": "mk",
        "country_code": "389",
        "mnc": "01"
    },
    {
        "network": "VIP Mobile",
        "country": "Macedonia",
        "mcc": "294",
        "iso": "mk",
        "country_code": "389",
        "mnc": "03"
    },
    {
        "network": "Airtel/MADACOM",
        "country": "Madagascar",
        "mcc": "646",
        "iso": "mg",
        "country_code": "261",
        "mnc": "01"
    },
    {
        "network": "Orange/Soci",
        "country": "Madagascar",
        "mcc": "646",
        "iso": "mg",
        "country_code": "261",
        "mnc": "02"
    },
    {
        "network": "Sacel",
        "country": "Madagascar",
        "mcc": "646",
        "iso": "mg",
        "country_code": "261",
        "mnc": "03"
    },
    {
        "network": "Telma",
        "country": "Madagascar",
        "mcc": "646",
        "iso": "mg",
        "country_code": "261",
        "mnc": "04"
    },
    {
        "network": "TNM/Telekom Network Ltd.",
        "country": "Malawi",
        "mcc": "650",
        "iso": "mw",
        "country_code": "265",
        "mnc": "01"
    },
    {
        "network": "Airtel/Zain/Celtel ltd.",
        "country": "Malawi",
        "mcc": "650",
        "iso": "mw",
        "country_code": "265",
        "mnc": "10"
    },
    {
        "network": "Art900",
        "country": "Malaysia",
        "mcc": "502",
        "iso": "my",
        "country_code": "60",
        "mnc": "01"
    },
    {
        "network": "Baraka Telecom Sdn Bhd",
        "country": "Malaysia",
        "mcc": "502",
        "iso": "my",
        "country_code": "60",
        "mnc": "151"
    },
    {
        "network": "CelCom",
        "country": "Malaysia",
        "mcc": "502",
        "iso": "my",
        "country_code": "60",
        "mnc": "13"
    },
    {
        "network": "CelCom",
        "country": "Malaysia",
        "mcc": "502",
        "iso": "my",
        "country_code": "60",
        "mnc": "198"
    },
    {
        "network": "CelCom",
        "country": "Malaysia",
        "mcc": "502",
        "iso": "my",
        "country_code": "60",
        "mnc": "19"
    },
    {
        "network": "Digi Telecommunications",
        "country": "Malaysia",
        "mcc": "502",
        "iso": "my",
        "country_code": "60",
        "mnc": "16"
    },
    {
        "network": "Digi Telecommunications",
        "country": "Malaysia",
        "mcc": "502",
        "iso": "my",
        "country_code": "60",
        "mnc": "10"
    },
    {
        "network": "Electcoms Wireless Sdn Bhd",
        "country": "Malaysia",
        "mcc": "502",
        "iso": "my",
        "country_code": "60",
        "mnc": "20"
    },
    {
        "network": "Maxis",
        "country": "Malaysia",
        "mcc": "502",
        "iso": "my",
        "country_code": "60",
        "mnc": "17"
    },
    {
        "network": "Maxis",
        "country": "Malaysia",
        "mcc": "502",
        "iso": "my",
        "country_code": "60",
        "mnc": "12"
    },
    {
        "network": "MTX Utara",
        "country": "Malaysia",
        "mcc": "502",
        "iso": "my",
        "country_code": "60",
        "mnc": "11"
    },
    {
        "network": "Webe/Packet One Networks (Malaysia) Sdn Bhd",
        "country": "Malaysia",
        "mcc": "502",
        "iso": "my",
        "country_code": "60",
        "mnc": "153"
    },
    {
        "network": "Samata Communications Sdn Bhd",
        "country": "Malaysia",
        "mcc": "502",
        "iso": "my",
        "country_code": "60",
        "mnc": "155"
    },
    {
        "network": "Tron/Talk Focus Sdn Bhd",
        "country": "Malaysia",
        "mcc": "502",
        "iso": "my",
        "country_code": "60",
        "mnc": "154"
    },
    {
        "network": "U Mobile",
        "country": "Malaysia",
        "mcc": "502",
        "iso": "my",
        "country_code": "60",
        "mnc": "18"
    },
    {
        "network": "XOX Com Sdn Bhd",
        "country": "Malaysia",
        "mcc": "502",
        "iso": "my",
        "country_code": "60",
        "mnc": "195"
    },
    {
        "network": "YES",
        "country": "Malaysia",
        "mcc": "502",
        "iso": "my",
        "country_code": "60",
        "mnc": "152"
    },
    {
        "network": "Dhiraagu/C&W",
        "country": "Maldives",
        "mcc": "472",
        "iso": "mv",
        "country_code": "960",
        "mnc": "01"
    },
    {
        "network": "Ooredo/Wataniya",
        "country": "Maldives",
        "mcc": "472",
        "iso": "mv",
        "country_code": "960",
        "mnc": "02"
    },
    {
        "network": "Malitel",
        "country": "Mali",
        "mcc": "610",
        "iso": "ml",
        "country_code": "223",
        "mnc": "01"
    },
    {
        "network": "Orange/IKATEL",
        "country": "Mali",
        "mcc": "610",
        "iso": "ml",
        "country_code": "223",
        "mnc": "02"
    },
    {
        "network": "GO Mobile",
        "country": "Malta",
        "mcc": "278",
        "iso": "mt",
        "country_code": "356",
        "mnc": "21"
    },
    {
        "network": "Melita",
        "country": "Malta",
        "mcc": "278",
        "iso": "mt",
        "country_code": "356",
        "mnc": "77"
    },
    {
        "network": "Vodafone",
        "country": "Malta",
        "mcc": "278",
        "iso": "mt",
        "country_code": "356",
        "mnc": "01"
    },
    {
        "network": "UTS Caraibe",
        "country": "Martinique (French Department of)",
        "mcc": "340",
        "iso": "mq",
        "country_code": "596",
        "mnc": "12"
    },
    {
        "network": "Chinguitel SA",
        "country": "Mauritania",
        "mcc": "609",
        "iso": "mr",
        "country_code": "222",
        "mnc": "02"
    },
    {
        "network": "Mattel",
        "country": "Mauritania",
        "mcc": "609",
        "iso": "mr",
        "country_code": "222",
        "mnc": "01"
    },
    {
        "network": "Mauritel",
        "country": "Mauritania",
        "mcc": "609",
        "iso": "mr",
        "country_code": "222",
        "mnc": "10"
    },
    {
        "network": "Emtel Ltd",
        "country": "Mauritius",
        "mcc": "617",
        "iso": "mu",
        "country_code": "230",
        "mnc": "10"
    },
    {
        "network": "Mahanagar Telephone",
        "country": "Mauritius",
        "mcc": "617",
        "iso": "mu",
        "country_code": "230",
        "mnc": "02"
    },
    {
        "network": "Mahanagar Telephone",
        "country": "Mauritius",
        "mcc": "617",
        "iso": "mu",
        "country_code": "230",
        "mnc": "03"
    },
    {
        "network": "Orange/Cellplus",
        "country": "Mauritius",
        "mcc": "617",
        "iso": "mu",
        "country_code": "230",
        "mnc": "01"
    },
    {
        "network": "AT&T/IUSACell",
        "country": "Mexico",
        "mcc": "334",
        "iso": "mx",
        "country_code": "52",
        "mnc": "50"
    },
    {
        "network": "AT&T/IUSACell",
        "country": "Mexico",
        "mcc": "334",
        "iso": "mx",
        "country_code": "52",
        "mnc": "050"
    },
    {
        "network": "AT&T/IUSACell",
        "country": "Mexico",
        "mcc": "334",
        "iso": "mx",
        "country_code": "52",
        "mnc": "040"
    },
    {
        "network": "AT&T/IUSACell",
        "country": "Mexico",
        "mcc": "334",
        "iso": "mx",
        "country_code": "52",
        "mnc": "04"
    },
    {
        "network": "Movistar/Pegaso",
        "country": "Mexico",
        "mcc": "334",
        "iso": "mx",
        "country_code": "52",
        "mnc": "03"
    },
    {
        "network": "Movistar/Pegaso",
        "country": "Mexico",
        "mcc": "334",
        "iso": "mx",
        "country_code": "52",
        "mnc": "030"
    },
    {
        "network": "NEXTEL",
        "country": "Mexico",
        "mcc": "334",
        "iso": "mx",
        "country_code": "52",
        "mnc": "090"
    },
    {
        "network": "NEXTEL",
        "country": "Mexico",
        "mcc": "334",
        "iso": "mx",
        "country_code": "52",
        "mnc": "010"
    },
    {
        "network": "NEXTEL",
        "country": "Mexico",
        "mcc": "334",
        "iso": "mx",
        "country_code": "52",
        "mnc": "09"
    },
    {
        "network": "NEXTEL",
        "country": "Mexico",
        "mcc": "334",
        "iso": "mx",
        "country_code": "52",
        "mnc": "01"
    },
    {
        "network": "Operadora Unefon SA de CV",
        "country": "Mexico",
        "mcc": "334",
        "iso": "mx",
        "country_code": "52",
        "mnc": "080"
    },
    {
        "network": "Operadora Unefon SA de CV",
        "country": "Mexico",
        "mcc": "334",
        "iso": "mx",
        "country_code": "52",
        "mnc": "070"
    },
    {
        "network": "SAI PCS",
        "country": "Mexico",
        "mcc": "334",
        "iso": "mx",
        "country_code": "52",
        "mnc": "060"
    },
    {
        "network": "TelCel/America Movil",
        "country": "Mexico",
        "mcc": "334",
        "iso": "mx",
        "country_code": "52",
        "mnc": "02"
    },
    {
        "network": "TelCel/America Movil",
        "country": "Mexico",
        "mcc": "334",
        "iso": "mx",
        "country_code": "52",
        "mnc": "020"
    },
    {
        "network": "FSM Telecom",
        "country": "Micronesia",
        "mcc": "550",
        "iso": "fm",
        "country_code": "691",
        "mnc": "01"
    },
    {
        "network": "Eventis Mobile",
        "country": "Moldova",
        "mcc": "259",
        "iso": "md",
        "country_code": "373",
        "mnc": "04"
    },
    {
        "network": "IDC/Unite ",
        "country": "Moldova",
        "mcc": "259",
        "iso": "md",
        "country_code": "373",
        "mnc": "05"
    },
    {
        "network": "IDC/Unite ",
        "country": "Moldova",
        "mcc": "259",
        "iso": "md",
        "country_code": "373",
        "mnc": "99"
    },
    {
        "network": "IDC/Unite ",
        "country": "Moldova",
        "mcc": "259",
        "iso": "md",
        "country_code": "373",
        "mnc": "03"
    },
    {
        "network": "Moldcell",
        "country": "Moldova",
        "mcc": "259",
        "iso": "md",
        "country_code": "373",
        "mnc": "02"
    },
    {
        "network": "Orange/Voxtel",
        "country": "Moldova",
        "mcc": "259",
        "iso": "md",
        "country_code": "373",
        "mnc": "01"
    },
    {
        "network": "Monaco Telecom",
        "country": "Monaco",
        "mcc": "212",
        "iso": "mc",
        "country_code": "377",
        "mnc": "10"
    },
    {
        "network": "Monaco Telecom",
        "country": "Monaco",
        "mcc": "212",
        "iso": "mc",
        "country_code": "377",
        "mnc": "01"
    },
    {
        "network": "G-Mobile Corporation Ltd",
        "country": "Mongolia",
        "mcc": "428",
        "iso": "mn",
        "country_code": "976",
        "mnc": "98"
    },
    {
        "network": "Mobicom",
        "country": "Mongolia",
        "mcc": "428",
        "iso": "mn",
        "country_code": "976",
        "mnc": "99"
    },
    {
        "network": "Skytel Co. Ltd",
        "country": "Mongolia",
        "mcc": "428",
        "iso": "mn",
        "country_code": "976",
        "mnc": "91"
    },
    {
        "network": "Skytel Co. Ltd",
        "country": "Mongolia",
        "mcc": "428",
        "iso": "mn",
        "country_code": "976",
        "mnc": "00"
    },
    {
        "network": "Unitel",
        "country": "Mongolia",
        "mcc": "428",
        "iso": "mn",
        "country_code": "976",
        "mnc": "88"
    },
    {
        "network": "Monet/T-mobile",
        "country": "Montenegro",
        "mcc": "297",
        "iso": "me",
        "country_code": "382",
        "mnc": "02"
    },
    {
        "network": "Mtel",
        "country": "Montenegro",
        "mcc": "297",
        "iso": "me",
        "country_code": "382",
        "mnc": "03"
    },
    {
        "network": "Telenor/Promonte GSM",
        "country": "Montenegro",
        "mcc": "297",
        "iso": "me",
        "country_code": "382",
        "mnc": "01"
    },
    {
        "network": "Cable & Wireless ",
        "country": "Montserrat",
        "mcc": "354",
        "iso": "ms",
        "country_code": "1664",
        "mnc": "860"
    },
    {
        "network": "IAM/Itissallat",
        "country": "Morocco",
        "mcc": "604",
        "iso": "ma",
        "country_code": "212",
        "mnc": "01"
    },
    {
        "network": "INWI/WANA",
        "country": "Morocco",
        "mcc": "604",
        "iso": "ma",
        "country_code": "212",
        "mnc": "02"
    },
    {
        "network": "Medi Telecom",
        "country": "Morocco",
        "mcc": "604",
        "iso": "ma",
        "country_code": "212",
        "mnc": "00"
    },
    {
        "network": "mCel",
        "country": "Mozambique",
        "mcc": "643",
        "iso": "mz",
        "country_code": "258",
        "mnc": "01"
    },
    {
        "network": "Movitel",
        "country": "Mozambique",
        "mcc": "643",
        "iso": "mz",
        "country_code": "258",
        "mnc": "03"
    },
    {
        "network": "Vodacom",
        "country": "Mozambique",
        "mcc": "643",
        "iso": "mz",
        "country_code": "258",
        "mnc": "04"
    },
    {
        "network": "Myanmar Post & Teleco.",
        "country": "Myanmar (Burma)",
        "mcc": "414",
        "iso": "mm",
        "country_code": "95",
        "mnc": "01"
    },
    {
        "network": "Oreedoo",
        "country": "Myanmar (Burma)",
        "mcc": "414",
        "iso": "mm",
        "country_code": "95",
        "mnc": "05"
    },
    {
        "network": "Telenor",
        "country": "Myanmar (Burma)",
        "mcc": "414",
        "iso": "mm",
        "country_code": "95",
        "mnc": "06"
    },
    {
        "network": "Leo / Orascom",
        "country": "Namibia",
        "mcc": "649",
        "iso": "na",
        "country_code": "264",
        "mnc": "03"
    },
    {
        "network": "MTC",
        "country": "Namibia",
        "mcc": "649",
        "iso": "na",
        "country_code": "264",
        "mnc": "01"
    },
    {
        "network": "Switch/Nam. Telec.",
        "country": "Namibia",
        "mcc": "649",
        "iso": "na",
        "country_code": "264",
        "mnc": "02"
    },
    {
        "network": "Ncell",
        "country": "Nepal",
        "mcc": "429",
        "iso": "np",
        "country_code": "977",
        "mnc": "02"
    },
    {
        "network": "NT Mobile / Namaste",
        "country": "Nepal",
        "mcc": "429",
        "iso": "np",
        "country_code": "977",
        "mnc": "01"
    },
    {
        "network": "Smart Cell",
        "country": "Nepal",
        "mcc": "429",
        "iso": "np",
        "country_code": "977",
        "mnc": "04"
    },
    {
        "network": "6GMOBILE BV",
        "country": "Netherlands",
        "mcc": "204",
        "iso": "nl",
        "country_code": "31",
        "mnc": "14"
    },
    {
        "network": "Aspider Solutions",
        "country": "Netherlands",
        "mcc": "204",
        "iso": "nl",
        "country_code": "31",
        "mnc": "23"
    },
    {
        "network": "Elephant Talk Communications Premium Rate Services Netherlands BV",
        "country": "Netherlands",
        "mcc": "204",
        "iso": "nl",
        "country_code": "31",
        "mnc": "05"
    },
    {
        "network": "Intercity Mobile Communications BV",
        "country": "Netherlands",
        "mcc": "204",
        "iso": "nl",
        "country_code": "31",
        "mnc": "17"
    },
    {
        "network": "KPN Telecom B.V.",
        "country": "Netherlands",
        "mcc": "204",
        "iso": "nl",
        "country_code": "31",
        "mnc": "69"
    },
    {
        "network": "KPN Telecom B.V.",
        "country": "Netherlands",
        "mcc": "204",
        "iso": "nl",
        "country_code": "31",
        "mnc": "10"
    },
    {
        "network": "KPN Telecom B.V.",
        "country": "Netherlands",
        "mcc": "204",
        "iso": "nl",
        "country_code": "31",
        "mnc": "08"
    },
    {
        "network": "KPN/Telfort",
        "country": "Netherlands",
        "mcc": "204",
        "iso": "nl",
        "country_code": "31",
        "mnc": "12"
    },
    {
        "network": "Lancelot BV",
        "country": "Netherlands",
        "mcc": "204",
        "iso": "nl",
        "country_code": "31",
        "mnc": "28"
    },
    {
        "network": "Lycamobile Ltd",
        "country": "Netherlands",
        "mcc": "204",
        "iso": "nl",
        "country_code": "31",
        "mnc": "09"
    },
    {
        "network": "Mundio/Vectone Mobile",
        "country": "Netherlands",
        "mcc": "204",
        "iso": "nl",
        "country_code": "31",
        "mnc": "06"
    },
    {
        "network": "NS Railinfrabeheer B.V.",
        "country": "Netherlands",
        "mcc": "204",
        "iso": "nl",
        "country_code": "31",
        "mnc": "21"
    },
    {
        "network": "Private Mobility Nederland BV",
        "country": "Netherlands",
        "mcc": "204",
        "iso": "nl",
        "country_code": "31",
        "mnc": "24"
    },
    {
        "network": "T-Mobile B.V.",
        "country": "Netherlands",
        "mcc": "204",
        "iso": "nl",
        "country_code": "31",
        "mnc": "98"
    },
    {
        "network": "T-Mobile B.V.",
        "country": "Netherlands",
        "mcc": "204",
        "iso": "nl",
        "country_code": "31",
        "mnc": "16"
    },
    {
        "network": "T-mobile/former Orange",
        "country": "Netherlands",
        "mcc": "204",
        "iso": "nl",
        "country_code": "31",
        "mnc": "20"
    },
    {
        "network": "Tele2",
        "country": "Netherlands",
        "mcc": "204",
        "iso": "nl",
        "country_code": "31",
        "mnc": "02"
    },
    {
        "network": "Teleena Holding BV",
        "country": "Netherlands",
        "mcc": "204",
        "iso": "nl",
        "country_code": "31",
        "mnc": "07"
    },
    {
        "network": "Unify Mobile",
        "country": "Netherlands",
        "mcc": "204",
        "iso": "nl",
        "country_code": "31",
        "mnc": "68"
    },
    {
        "network": "UPC Nederland BV",
        "country": "Netherlands",
        "mcc": "204",
        "iso": "nl",
        "country_code": "31",
        "mnc": "18"
    },
    {
        "network": "Vodafone Libertel",
        "country": "Netherlands",
        "mcc": "204",
        "iso": "nl",
        "country_code": "31",
        "mnc": "04"
    },
    {
        "network": "Voiceworks Mobile BV",
        "country": "Netherlands",
        "mcc": "204",
        "iso": "nl",
        "country_code": "31",
        "mnc": "03"
    },
    {
        "network": "Ziggo BV",
        "country": "Netherlands",
        "mcc": "204",
        "iso": "nl",
        "country_code": "31",
        "mnc": "15"
    },
    {
        "network": "Cingular Wireless",
        "country": "Netherlands Antilles",
        "mcc": "362",
        "iso": "an",
        "country_code": "599",
        "mnc": "630"
    },
    {
        "network": "TELCELL GSM",
        "country": "Netherlands Antilles",
        "mcc": "362",
        "iso": "an",
        "country_code": "599",
        "mnc": "51"
    },
    {
        "network": "SETEL GSM",
        "country": "Netherlands Antilles",
        "mcc": "362",
        "iso": "an",
        "country_code": "599",
        "mnc": "91"
    },
    {
        "network": "UTS Wireless",
        "country": "Netherlands Antilles",
        "mcc": "362",
        "iso": "an",
        "country_code": "599",
        "mnc": "951"
    },
    {
        "network": "OPT Mobilis",
        "country": "New Caledonia",
        "mcc": "546",
        "iso": "nc",
        "country_code": "687",
        "mnc": "01"
    },
    {
        "network": "2degrees",
        "country": "New Zealand",
        "mcc": "530",
        "iso": "nz",
        "country_code": "64",
        "mnc": "28"
    },
    {
        "network": "Spark/NZ Telecom",
        "country": "New Zealand",
        "mcc": "530",
        "iso": "nz",
        "country_code": "64",
        "mnc": "05"
    },
    {
        "network": "Spark/NZ Telecom",
        "country": "New Zealand",
        "mcc": "530",
        "iso": "nz",
        "country_code": "64",
        "mnc": "02"
    },
    {
        "network": "Telstra",
        "country": "New Zealand",
        "mcc": "530",
        "iso": "nz",
        "country_code": "64",
        "mnc": "04"
    },
    {
        "network": "Two Degrees Mobile Ltd",
        "country": "New Zealand",
        "mcc": "530",
        "iso": "nz",
        "country_code": "64",
        "mnc": "24"
    },
    {
        "network": "Vodafone",
        "country": "New Zealand",
        "mcc": "530",
        "iso": "nz",
        "country_code": "64",
        "mnc": "01"
    },
    {
        "network": "Walker Wireless Ltd.",
        "country": "New Zealand",
        "mcc": "530",
        "iso": "nz",
        "country_code": "64",
        "mnc": "03"
    },
    {
        "network": "Empresa Nicaraguense de Telecomunicaciones SA (ENITEL)",
        "country": "Nicaragua",
        "mcc": "710",
        "iso": "ni",
        "country_code": "505",
        "mnc": "21"
    },
    {
        "network": "Movistar",
        "country": "Nicaragua",
        "mcc": "710",
        "iso": "ni",
        "country_code": "505",
        "mnc": "30"
    },
    {
        "network": "Claro",
        "country": "Nicaragua",
        "mcc": "710",
        "iso": "ni",
        "country_code": "505",
        "mnc": "73"
    },
    {
        "network": "MOOV/TeleCel",
        "country": "Niger",
        "mcc": "614",
        "iso": "ne",
        "country_code": "227",
        "mnc": "03"
    },
    {
        "network": "Orange/Sahelc.",
        "country": "Niger",
        "mcc": "614",
        "iso": "ne",
        "country_code": "227",
        "mnc": "04"
    },
    {
        "network": "Orange/Sahelc.",
        "country": "Niger",
        "mcc": "614",
        "iso": "ne",
        "country_code": "227",
        "mnc": "01"
    },
    {
        "network": "Airtel/Zain/CelTel",
        "country": "Niger",
        "mcc": "614",
        "iso": "ne",
        "country_code": "227",
        "mnc": "02"
    },
    {
        "network": "Airtel/ZAIN/Econet",
        "country": "Nigeria",
        "mcc": "621",
        "iso": "ng",
        "country_code": "234",
        "mnc": "20"
    },
    {
        "network": "ETISALAT",
        "country": "Nigeria",
        "mcc": "621",
        "iso": "ng",
        "country_code": "234",
        "mnc": "60"
    },
    {
        "network": "Glo Mobile",
        "country": "Nigeria",
        "mcc": "621",
        "iso": "ng",
        "country_code": "234",
        "mnc": "50"
    },
    {
        "network": "M-Tel/Nigeria Telecom. Ltd.",
        "country": "Nigeria",
        "mcc": "621",
        "iso": "ng",
        "country_code": "234",
        "mnc": "40"
    },
    {
        "network": "MTN",
        "country": "Nigeria",
        "mcc": "621",
        "iso": "ng",
        "country_code": "234",
        "mnc": "30"
    },
    {
        "network": "Starcomms",
        "country": "Nigeria",
        "mcc": "621",
        "iso": "ng",
        "country_code": "234",
        "mnc": "99"
    },
    {
        "network": "Visafone",
        "country": "Nigeria",
        "mcc": "621",
        "iso": "ng",
        "country_code": "234",
        "mnc": "25"
    },
    {
        "network": "Visafone",
        "country": "Nigeria",
        "mcc": "621",
        "iso": "ng",
        "country_code": "234",
        "mnc": "01"
    },
    {
        "network": "Niue Telecom",
        "country": "Niue",
        "mcc": "555",
        "iso": "nu",
        "country_code": "683",
        "mnc": "01"
    },
    {
        "network": "Com4 AS",
        "country": "Norway",
        "mcc": "242",
        "iso": "no",
        "country_code": "47",
        "mnc": "09"
    },
    {
        "network": "ICE Nordisk Mobiltelefon AS",
        "country": "Norway",
        "mcc": "242",
        "iso": "no",
        "country_code": "47",
        "mnc": "14"
    },
    {
        "network": "Jernbaneverket (GSM-R)",
        "country": "Norway",
        "mcc": "242",
        "iso": "no",
        "country_code": "47",
        "mnc": "21"
    },
    {
        "network": "Jernbaneverket (GSM-R)",
        "country": "Norway",
        "mcc": "242",
        "iso": "no",
        "country_code": "47",
        "mnc": "20"
    },
    {
        "network": "Lycamobile Ltd",
        "country": "Norway",
        "mcc": "242",
        "iso": "no",
        "country_code": "47",
        "mnc": "23"
    },
    {
        "network": "Netcom",
        "country": "Norway",
        "mcc": "242",
        "iso": "no",
        "country_code": "47",
        "mnc": "02"
    },
    {
        "network": "Network Norway AS",
        "country": "Norway",
        "mcc": "242",
        "iso": "no",
        "country_code": "47",
        "mnc": "22"
    },
    {
        "network": "Network Norway AS",
        "country": "Norway",
        "mcc": "242",
        "iso": "no",
        "country_code": "47",
        "mnc": "05"
    },
    {
        "network": "ICE Nordisk Mobiltelefon AS",
        "country": "Norway",
        "mcc": "242",
        "iso": "no",
        "country_code": "47",
        "mnc": "06"
    },
    {
        "network": "TDC Mobil A/S",
        "country": "Norway",
        "mcc": "242",
        "iso": "no",
        "country_code": "47",
        "mnc": "08"
    },
    {
        "network": "Tele2",
        "country": "Norway",
        "mcc": "242",
        "iso": "no",
        "country_code": "47",
        "mnc": "04"
    },
    {
        "network": "Telenor",
        "country": "Norway",
        "mcc": "242",
        "iso": "no",
        "country_code": "47",
        "mnc": "12"
    },
    {
        "network": "Telenor",
        "country": "Norway",
        "mcc": "242",
        "iso": "no",
        "country_code": "47",
        "mnc": "01"
    },
    {
        "network": "Teletopia",
        "country": "Norway",
        "mcc": "242",
        "iso": "no",
        "country_code": "47",
        "mnc": "03"
    },
    {
        "network": "Ventelo AS",
        "country": "Norway",
        "mcc": "242",
        "iso": "no",
        "country_code": "47",
        "mnc": "07"
    },
    {
        "network": "Ventelo AS",
        "country": "Norway",
        "mcc": "242",
        "iso": "no",
        "country_code": "47",
        "mnc": "017"
    },
    {
        "network": "Nawras",
        "country": "Oman",
        "mcc": "422",
        "iso": "om",
        "country_code": "968",
        "mnc": "03"
    },
    {
        "network": "Oman Mobile/GTO",
        "country": "Oman",
        "mcc": "422",
        "iso": "om",
        "country_code": "968",
        "mnc": "02"
    },
    {
        "network": "Instaphone",
        "country": "Pakistan",
        "mcc": "410",
        "iso": "pk",
        "country_code": "92",
        "mnc": "08"
    },
    {
        "network": "Mobilink",
        "country": "Pakistan",
        "mcc": "410",
        "iso": "pk",
        "country_code": "92",
        "mnc": "01"
    },
    {
        "network": "Telenor",
        "country": "Pakistan",
        "mcc": "410",
        "iso": "pk",
        "country_code": "92",
        "mnc": "06"
    },
    {
        "network": "UFONE/PAKTel",
        "country": "Pakistan",
        "mcc": "410",
        "iso": "pk",
        "country_code": "92",
        "mnc": "03"
    },
    {
        "network": "Warid Telecom",
        "country": "Pakistan",
        "mcc": "410",
        "iso": "pk",
        "country_code": "92",
        "mnc": "07"
    },
    {
        "network": "ZONG/CMPak",
        "country": "Pakistan",
        "mcc": "410",
        "iso": "pk",
        "country_code": "92",
        "mnc": "04"
    },
    {
        "network": "Palau Mobile Corp. (PMC) (Palau",
        "country": "Palau (Republic of)",
        "mcc": "552",
        "iso": "pw",
        "country_code": "680",
        "mnc": "80"
    },
    {
        "network": "Palau National Communications Corp. (PNCC) (Palau",
        "country": "Palau (Republic of)",
        "mcc": "552",
        "iso": "pw",
        "country_code": "680",
        "mnc": "01"
    },
    {
        "network": "Jawwal",
        "country": "Palestinian Territory",
        "mcc": "425",
        "iso": "ps",
        "country_code": "970",
        "mnc": "05"
    },
    {
        "network": "Wataniya Mobile",
        "country": "Palestinian Territory",
        "mcc": "425",
        "iso": "ps",
        "country_code": "970",
        "mnc": "06"
    },
    {
        "network": "Cable & W./Mas Movil",
        "country": "Panama",
        "mcc": "714",
        "iso": "pa",
        "country_code": "507",
        "mnc": "01"
    },
    {
        "network": "Claro",
        "country": "Panama",
        "mcc": "714",
        "iso": "pa",
        "country_code": "507",
        "mnc": "03"
    },
    {
        "network": "Digicel",
        "country": "Panama",
        "mcc": "714",
        "iso": "pa",
        "country_code": "507",
        "mnc": "04"
    },
    {
        "network": "Movistar",
        "country": "Panama",
        "mcc": "714",
        "iso": "pa",
        "country_code": "507",
        "mnc": "020"
    },
    {
        "network": "Movistar",
        "country": "Panama",
        "mcc": "714",
        "iso": "pa",
        "country_code": "507",
        "mnc": "02"
    },
    {
        "network": "Digicel",
        "country": "Papua New Guinea",
        "mcc": "537",
        "iso": "pg",
        "country_code": "675",
        "mnc": "03"
    },
    {
        "network": "GreenCom PNG Ltd",
        "country": "Papua New Guinea",
        "mcc": "537",
        "iso": "pg",
        "country_code": "675",
        "mnc": "02"
    },
    {
        "network": "Pacific Mobile",
        "country": "Papua New Guinea",
        "mcc": "537",
        "iso": "pg",
        "country_code": "675",
        "mnc": "01"
    },
    {
        "network": "Claro/Hutchison",
        "country": "Paraguay",
        "mcc": "744",
        "iso": "py",
        "country_code": "595",
        "mnc": "02"
    },
    {
        "network": "Compa",
        "country": "Paraguay",
        "mcc": "744",
        "iso": "py",
        "country_code": "595",
        "mnc": "03"
    },
    {
        "network": "Hola/VOX",
        "country": "Paraguay",
        "mcc": "744",
        "iso": "py",
        "country_code": "595",
        "mnc": "01"
    },
    {
        "network": "TIM/Nucleo/Personal",
        "country": "Paraguay",
        "mcc": "744",
        "iso": "py",
        "country_code": "595",
        "mnc": "05"
    },
    {
        "network": "Tigo/Telecel",
        "country": "Paraguay",
        "mcc": "744",
        "iso": "py",
        "country_code": "595",
        "mnc": "04"
    },
    {
        "network": "Claro /Amer.Mov./TIM",
        "country": "Peru",
        "mcc": "716",
        "iso": "pe",
        "country_code": "51",
        "mnc": "20"
    },
    {
        "network": "Claro /Amer.Mov./TIM",
        "country": "Peru",
        "mcc": "716",
        "iso": "pe",
        "country_code": "51",
        "mnc": "10"
    },
    {
        "network": "GlobalStar",
        "country": "Peru",
        "mcc": "716",
        "iso": "pe",
        "country_code": "51",
        "mnc": "02"
    },
    {
        "network": "GlobalStar",
        "country": "Peru",
        "mcc": "716",
        "iso": "pe",
        "country_code": "51",
        "mnc": "01"
    },
    {
        "network": "Movistar",
        "country": "Peru",
        "mcc": "716",
        "iso": "pe",
        "country_code": "51",
        "mnc": "06"
    },
    {
        "network": "Nextel",
        "country": "Peru",
        "mcc": "716",
        "iso": "pe",
        "country_code": "51",
        "mnc": "17"
    },
    {
        "network": "Nextel",
        "country": "Peru",
        "mcc": "716",
        "iso": "pe",
        "country_code": "51",
        "mnc": "07"
    },
    {
        "network": "Viettel Mobile",
        "country": "Peru",
        "mcc": "716",
        "iso": "pe",
        "country_code": "51",
        "mnc": "15"
    },
    {
        "network": "Fix Line",
        "country": "Philippines",
        "mcc": "515",
        "iso": "ph",
        "country_code": "63",
        "mnc": "00"
    },
    {
        "network": "Globe Telecom",
        "country": "Philippines",
        "mcc": "515",
        "iso": "ph",
        "country_code": "63",
        "mnc": "01"
    },
    {
        "network": "Globe Telecom",
        "country": "Philippines",
        "mcc": "515",
        "iso": "ph",
        "country_code": "63",
        "mnc": "02"
    },
    {
        "network": "Next Mobile",
        "country": "Philippines",
        "mcc": "515",
        "iso": "ph",
        "country_code": "63",
        "mnc": "88"
    },
    {
        "network": "RED Mobile/Cure",
        "country": "Philippines",
        "mcc": "515",
        "iso": "ph",
        "country_code": "63",
        "mnc": "18"
    },
    {
        "network": "Smart",
        "country": "Philippines",
        "mcc": "515",
        "iso": "ph",
        "country_code": "63",
        "mnc": "03"
    },
    {
        "network": "SUN/Digitel",
        "country": "Philippines",
        "mcc": "515",
        "iso": "ph",
        "country_code": "63",
        "mnc": "05"
    },
    {
        "network": "Aero2 SP",
        "country": "Poland",
        "mcc": "260",
        "iso": "pl",
        "country_code": "48",
        "mnc": "17"
    },
    {
        "network": "AMD Telecom.",
        "country": "Poland",
        "mcc": "260",
        "iso": "pl",
        "country_code": "48",
        "mnc": "18"
    },
    {
        "network": "CallFreedom Sp. z o.o.",
        "country": "Poland",
        "mcc": "260",
        "iso": "pl",
        "country_code": "48",
        "mnc": "38"
    },
    {
        "network": "Cyfrowy POLSAT S.A.",
        "country": "Poland",
        "mcc": "260",
        "iso": "pl",
        "country_code": "48",
        "mnc": "12"
    },
    {
        "network": "e-Telko",
        "country": "Poland",
        "mcc": "260",
        "iso": "pl",
        "country_code": "48",
        "mnc": "08"
    },
    {
        "network": "Lycamobile",
        "country": "Poland",
        "mcc": "260",
        "iso": "pl",
        "country_code": "48",
        "mnc": "09"
    },
    {
        "network": "Mobyland",
        "country": "Poland",
        "mcc": "260",
        "iso": "pl",
        "country_code": "48",
        "mnc": "16"
    },
    {
        "network": "Mundio Mobile Sp. z o.o.",
        "country": "Poland",
        "mcc": "260",
        "iso": "pl",
        "country_code": "48",
        "mnc": "36"
    },
    {
        "network": "Play/P4",
        "country": "Poland",
        "mcc": "260",
        "iso": "pl",
        "country_code": "48",
        "mnc": "07"
    },
    {
        "network": "NORDISK Polska",
        "country": "Poland",
        "mcc": "260",
        "iso": "pl",
        "country_code": "48",
        "mnc": "11"
    },
    {
        "network": "Orange/IDEA/Centertel",
        "country": "Poland",
        "mcc": "260",
        "iso": "pl",
        "country_code": "48",
        "mnc": "05"
    },
    {
        "network": "Orange/IDEA/Centertel",
        "country": "Poland",
        "mcc": "260",
        "iso": "pl",
        "country_code": "48",
        "mnc": "03"
    },
    {
        "network": "PKP Polskie Linie Kolejowe S.A.",
        "country": "Poland",
        "mcc": "260",
        "iso": "pl",
        "country_code": "48",
        "mnc": "35"
    },
    {
        "network": "Play/P4",
        "country": "Poland",
        "mcc": "260",
        "iso": "pl",
        "country_code": "48",
        "mnc": "98"
    },
    {
        "network": "Play/P4",
        "country": "Poland",
        "mcc": "260",
        "iso": "pl",
        "country_code": "48",
        "mnc": "06"
    },
    {
        "network": "Polkomtel/Plus",
        "country": "Poland",
        "mcc": "260",
        "iso": "pl",
        "country_code": "48",
        "mnc": "01"
    },
    {
        "network": "Sferia",
        "country": "Poland",
        "mcc": "260",
        "iso": "pl",
        "country_code": "48",
        "mnc": "13"
    },
    {
        "network": "Sferia",
        "country": "Poland",
        "mcc": "260",
        "iso": "pl",
        "country_code": "48",
        "mnc": "10"
    },
    {
        "network": "Sferia",
        "country": "Poland",
        "mcc": "260",
        "iso": "pl",
        "country_code": "48",
        "mnc": "14"
    },
    {
        "network": "T-Mobile/ERA",
        "country": "Poland",
        "mcc": "260",
        "iso": "pl",
        "country_code": "48",
        "mnc": "02"
    },
    {
        "network": "T-Mobile/ERA",
        "country": "Poland",
        "mcc": "260",
        "iso": "pl",
        "country_code": "48",
        "mnc": "34"
    },
    {
        "network": "Tele2",
        "country": "Poland",
        "mcc": "260",
        "iso": "pl",
        "country_code": "48",
        "mnc": "04"
    },
    {
        "network": "Tele2",
        "country": "Poland",
        "mcc": "260",
        "iso": "pl",
        "country_code": "48",
        "mnc": "15"
    },
    {
        "network": "Lycamobile",
        "country": "Portugal",
        "mcc": "268",
        "iso": "pt",
        "country_code": "351",
        "mnc": "04"
    },
    {
        "network": "NOS/Optimus",
        "country": "Portugal",
        "mcc": "268",
        "iso": "pt",
        "country_code": "351",
        "mnc": "07"
    },
    {
        "network": "NOS/Optimus",
        "country": "Portugal",
        "mcc": "268",
        "iso": "pt",
        "country_code": "351",
        "mnc": "03"
    },
    {
        "network": "MEO/TMN",
        "country": "Portugal",
        "mcc": "268",
        "iso": "pt",
        "country_code": "351",
        "mnc": "06"
    },
    {
        "network": "Vodafone",
        "country": "Portugal",
        "mcc": "268",
        "iso": "pt",
        "country_code": "351",
        "mnc": "01"
    },
    {
        "network": "Puerto Rico Telephone Company Inc. (PRTC)",
        "country": "Puerto Rico",
        "mcc": "330",
        "iso": "pr",
        "country_code": "",
        "mnc": "110"
    },
    {
        "network": "Puerto Rico Telephone Company Inc. (PRTC)",
        "country": "Puerto Rico",
        "mcc": "330",
        "iso": "pr",
        "country_code": "",
        "mnc": "11"
    },
    {
        "network": "Ooredoo/Qtel",
        "country": "Qatar",
        "mcc": "427",
        "iso": "qa",
        "country_code": "974",
        "mnc": "01"
    },
    {
        "network": "Vodafone",
        "country": "Qatar",
        "mcc": "427",
        "iso": "qa",
        "country_code": "974",
        "mnc": "02"
    },
    {
        "network": "Orange",
        "country": "Reunion",
        "mcc": "647",
        "iso": "re",
        "country_code": "262",
        "mnc": "00"
    },
    {
        "network": "Outremer Telecom",
        "country": "Reunion",
        "mcc": "647",
        "iso": "re",
        "country_code": "262",
        "mnc": "02"
    },
    {
        "network": "SFR",
        "country": "Reunion",
        "mcc": "647",
        "iso": "re",
        "country_code": "262",
        "mnc": "10"
    },
    {
        "network": "Cosmote",
        "country": "Romania",
        "mcc": "226",
        "iso": "ro",
        "country_code": "40",
        "mnc": "03"
    },
    {
        "network": "Enigma Systems",
        "country": "Romania",
        "mcc": "226",
        "iso": "ro",
        "country_code": "40",
        "mnc": "11"
    },
    {
        "network": "Lycamobile",
        "country": "Romania",
        "mcc": "226",
        "iso": "ro",
        "country_code": "40",
        "mnc": "16"
    },
    {
        "network": "Orange",
        "country": "Romania",
        "mcc": "226",
        "iso": "ro",
        "country_code": "40",
        "mnc": "10"
    },
    {
        "network": "RCS&RDS Digi Mobile",
        "country": "Romania",
        "mcc": "226",
        "iso": "ro",
        "country_code": "40",
        "mnc": "05"
    },
    {
        "network": "Romtelecom SA",
        "country": "Romania",
        "mcc": "226",
        "iso": "ro",
        "country_code": "40",
        "mnc": "02"
    },
    {
        "network": "Telemobil/Zapp",
        "country": "Romania",
        "mcc": "226",
        "iso": "ro",
        "country_code": "40",
        "mnc": "06"
    },
    {
        "network": "Vodafone",
        "country": "Romania",
        "mcc": "226",
        "iso": "ro",
        "country_code": "40",
        "mnc": "01"
    },
    {
        "network": "Telemobil/Zapp",
        "country": "Romania",
        "mcc": "226",
        "iso": "ro",
        "country_code": "40",
        "mnc": "04"
    },
    {
        "network": "Baykal Westcom",
        "country": "Russian Federation",
        "mcc": "250",
        "iso": "ru",
        "country_code": "79",
        "mnc": "12"
    },
    {
        "network": "BeeLine/VimpelCom",
        "country": "Russian Federation",
        "mcc": "250",
        "iso": "ru",
        "country_code": "79",
        "mnc": "28"
    },
    {
        "network": "DTC/Don Telecom",
        "country": "Russian Federation",
        "mcc": "250",
        "iso": "ru",
        "country_code": "79",
        "mnc": "10"
    },
    {
        "network": "Kuban GSM",
        "country": "Russian Federation",
        "mcc": "250",
        "iso": "ru",
        "country_code": "79",
        "mnc": "13"
    },
    {
        "network": "MOTIV/LLC Ekaterinburg-2000",
        "country": "Russian Federation",
        "mcc": "250",
        "iso": "ru",
        "country_code": "79",
        "mnc": "35"
    },
    {
        "network": "Megafon",
        "country": "Russian Federation",
        "mcc": "250",
        "iso": "ru",
        "country_code": "79",
        "mnc": "02"
    },
    {
        "network": "MTS",
        "country": "Russian Federation",
        "mcc": "250",
        "iso": "ru",
        "country_code": "79",
        "mnc": "01"
    },
    {
        "network": "NCC",
        "country": "Russian Federation",
        "mcc": "250",
        "iso": "ru",
        "country_code": "79",
        "mnc": "03"
    },
    {
        "network": "NTC",
        "country": "Russian Federation",
        "mcc": "250",
        "iso": "ru",
        "country_code": "79",
        "mnc": "16"
    },
    {
        "network": "OJSC Altaysvyaz",
        "country": "Russian Federation",
        "mcc": "250",
        "iso": "ru",
        "country_code": "79",
        "mnc": "19"
    },
    {
        "network": "Orensot",
        "country": "Russian Federation",
        "mcc": "250",
        "iso": "ru",
        "country_code": "79",
        "mnc": "11"
    },
    {
        "network": "Printelefone",
        "country": "Russian Federation",
        "mcc": "250",
        "iso": "ru",
        "country_code": "79",
        "mnc": "92"
    },
    {
        "network": "Sibchallenge",
        "country": "Russian Federation",
        "mcc": "250",
        "iso": "ru",
        "country_code": "79",
        "mnc": "04"
    },
    {
        "network": "StavTelesot",
        "country": "Russian Federation",
        "mcc": "250",
        "iso": "ru",
        "country_code": "79",
        "mnc": "44"
    },
    {
        "network": "Tele2/ECC/Volgogr.",
        "country": "Russian Federation",
        "mcc": "250",
        "iso": "ru",
        "country_code": "79",
        "mnc": "20"
    },
    {
        "network": "Telecom XXL",
        "country": "Russian Federation",
        "mcc": "250",
        "iso": "ru",
        "country_code": "79",
        "mnc": "93"
    },
    {
        "network": "UralTel",
        "country": "Russian Federation",
        "mcc": "250",
        "iso": "ru",
        "country_code": "79",
        "mnc": "39"
    },
    {
        "network": "UralTel",
        "country": "Russian Federation",
        "mcc": "250",
        "iso": "ru",
        "country_code": "79",
        "mnc": "17"
    },
    {
        "network": "BeeLine/VimpelCom",
        "country": "Russian Federation",
        "mcc": "250",
        "iso": "ru",
        "country_code": "79",
        "mnc": "99"
    },
    {
        "network": "Yenisey Telecom",
        "country": "Russian Federation",
        "mcc": "250",
        "iso": "ru",
        "country_code": "79",
        "mnc": "05"
    },
    {
        "network": "ZAO SMARTS",
        "country": "Russian Federation",
        "mcc": "250",
        "iso": "ru",
        "country_code": "79",
        "mnc": "15"
    },
    {
        "network": "ZAO SMARTS",
        "country": "Russian Federation",
        "mcc": "250",
        "iso": "ru",
        "country_code": "79",
        "mnc": "07"
    },
    {
        "network": "Airtel",
        "country": "Rwanda",
        "mcc": "635",
        "iso": "rw",
        "country_code": "250",
        "mnc": "14"
    },
    {
        "network": "MTN/Rwandacell",
        "country": "Rwanda",
        "mcc": "635",
        "iso": "rw",
        "country_code": "250",
        "mnc": "10"
    },
    {
        "network": "TIGO",
        "country": "Rwanda",
        "mcc": "635",
        "iso": "rw",
        "country_code": "250",
        "mnc": "13"
    },
    {
        "network": "Cable & Wireless",
        "country": "Saint Kitts and Nevis",
        "mcc": "356",
        "iso": "kn",
        "country_code": "1869",
        "mnc": "110"
    },
    {
        "network": "Digicel",
        "country": "Saint Kitts and Nevis",
        "mcc": "356",
        "iso": "kn",
        "country_code": "1869",
        "mnc": "50"
    },
    {
        "network": "UTS Cariglobe",
        "country": "Saint Kitts and Nevis",
        "mcc": "356",
        "iso": "kn",
        "country_code": "1869",
        "mnc": "70"
    },
    {
        "network": "Cable & Wireless",
        "country": "Saint Lucia",
        "mcc": "358",
        "iso": "lc",
        "country_code": "1758",
        "mnc": "110"
    },
    {
        "network": "Cingular Wireless",
        "country": "Saint Lucia",
        "mcc": "358",
        "iso": "lc",
        "country_code": "1758",
        "mnc": "30"
    },
    {
        "network": "Digicel (St Lucia) Limited",
        "country": "Saint Lucia",
        "mcc": "358",
        "iso": "lc",
        "country_code": "1758",
        "mnc": "50"
    },
    {
        "network": "Samoatel Mobile",
        "country": "Samoa",
        "mcc": "549",
        "iso": "ws",
        "country_code": "685",
        "mnc": "27"
    },
    {
        "network": "Telecom Samoa Cellular Ltd.",
        "country": "Samoa",
        "mcc": "549",
        "iso": "ws",
        "country_code": "685",
        "mnc": "01"
    },
    {
        "network": "Prima Telecom",
        "country": "San Marino",
        "mcc": "292",
        "iso": "sm",
        "country_code": "378",
        "mnc": "01"
    },
    {
        "network": "CSTmovel",
        "country": "Sao Tome & Principe",
        "mcc": "626",
        "iso": "st",
        "country_code": "239",
        "mnc": "01"
    },
    {
        "network": "AeroMobile",
        "country": "Satellite Networks",
        "mcc": "901",
        "iso": "n/a",
        "country_code": "870",
        "mnc": "14"
    },
    {
        "network": "InMarSAT",
        "country": "Satellite Networks",
        "mcc": "901",
        "iso": "n/a",
        "country_code": "870",
        "mnc": "11"
    },
    {
        "network": "Maritime Communications Partner AS",
        "country": "Satellite Networks",
        "mcc": "901",
        "iso": "n/a",
        "country_code": "870",
        "mnc": "12"
    },
    {
        "network": "Thuraya Satellite",
        "country": "Satellite Networks",
        "mcc": "901",
        "iso": "n/a",
        "country_code": "870",
        "mnc": "05"
    },
    {
        "network": "Zain",
        "country": "Saudi Arabia",
        "mcc": "420",
        "iso": "sa",
        "country_code": "966",
        "mnc": "07"
    },
    {
        "network": "Etihad/Etisalat/Mobily",
        "country": "Saudi Arabia",
        "mcc": "420",
        "iso": "sa",
        "country_code": "966",
        "mnc": "03"
    },
    {
        "network": "Lebara Mobile",
        "country": "Saudi Arabia",
        "mcc": "420",
        "iso": "sa",
        "country_code": "966",
        "mnc": "06"
    },
    {
        "network": "STC/Al Jawal",
        "country": "Saudi Arabia",
        "mcc": "420",
        "iso": "sa",
        "country_code": "966",
        "mnc": "01"
    },
    {
        "network": "Virgin Mobile",
        "country": "Saudi Arabia",
        "mcc": "420",
        "iso": "sa",
        "country_code": "966",
        "mnc": "05"
    },
    {
        "network": "Zain",
        "country": "Saudi Arabia",
        "mcc": "420",
        "iso": "sa",
        "country_code": "966",
        "mnc": "04"
    },
    {
        "network": "Expresso/Sudatel",
        "country": "Senegal",
        "mcc": "608",
        "iso": "sn",
        "country_code": "221",
        "mnc": "03"
    },
    {
        "network": "Orange/Sonatel",
        "country": "Senegal",
        "mcc": "608",
        "iso": "sn",
        "country_code": "221",
        "mnc": "01"
    },
    {
        "network": "TIGO/Sentel GSM",
        "country": "Senegal",
        "mcc": "608",
        "iso": "sn",
        "country_code": "221",
        "mnc": "02"
    },
    {
        "network": "MTS/Telekom Srbija",
        "country": "Serbia ",
        "mcc": "220",
        "iso": "rs",
        "country_code": "381",
        "mnc": "03"
    },
    {
        "network": "Telenor/Mobtel",
        "country": "Serbia ",
        "mcc": "220",
        "iso": "rs",
        "country_code": "381",
        "mnc": "01"
    },
    {
        "network": "Telenor/Mobtel",
        "country": "Serbia ",
        "mcc": "220",
        "iso": "rs",
        "country_code": "381",
        "mnc": "02"
    },
    {
        "network": "VIP Mobile",
        "country": "Serbia ",
        "mcc": "220",
        "iso": "rs",
        "country_code": "381",
        "mnc": "05"
    },
    {
        "network": "Airtel",
        "country": "Seychelles",
        "mcc": "633",
        "iso": "sc",
        "country_code": "248",
        "mnc": "10"
    },
    {
        "network": "C&W",
        "country": "Seychelles",
        "mcc": "633",
        "iso": "sc",
        "country_code": "248",
        "mnc": "01"
    },
    {
        "network": "Smartcom",
        "country": "Seychelles",
        "mcc": "633",
        "iso": "sc",
        "country_code": "248",
        "mnc": "02"
    },
    {
        "network": "Africel",
        "country": "Sierra Leone",
        "mcc": "619",
        "iso": "sl",
        "country_code": "232",
        "mnc": "03"
    },
    {
        "network": "Airtel/Zain/Celtel",
        "country": "Sierra Leone",
        "mcc": "619",
        "iso": "sl",
        "country_code": "232",
        "mnc": "01"
    },
    {
        "network": "Comium",
        "country": "Sierra Leone",
        "mcc": "619",
        "iso": "sl",
        "country_code": "232",
        "mnc": "04"
    },
    {
        "network": "Africel",
        "country": "Sierra Leone",
        "mcc": "619",
        "iso": "sl",
        "country_code": "232",
        "mnc": "05"
    },
    {
        "network": "Tigo/Millicom",
        "country": "Sierra Leone",
        "mcc": "619",
        "iso": "sl",
        "country_code": "232",
        "mnc": "02"
    },
    {
        "network": "Mobitel",
        "country": "Sierra Leone",
        "mcc": "619",
        "iso": "sl",
        "country_code": "232",
        "mnc": "25"
    },
    {
        "network": "GRID Communications Pte Ltd",
        "country": "Singapore",
        "mcc": "525",
        "iso": "sg",
        "country_code": "65",
        "mnc": "12"
    },
    {
        "network": "MobileOne Ltd",
        "country": "Singapore",
        "mcc": "525",
        "iso": "sg",
        "country_code": "65",
        "mnc": "03"
    },
    {
        "network": "Singtel",
        "country": "Singapore",
        "mcc": "525",
        "iso": "sg",
        "country_code": "65",
        "mnc": "02"
    },
    {
        "network": "Singtel",
        "country": "Singapore",
        "mcc": "525",
        "iso": "sg",
        "country_code": "65",
        "mnc": "01"
    },
    {
        "network": "Singtel",
        "country": "Singapore",
        "mcc": "525",
        "iso": "sg",
        "country_code": "65",
        "mnc": "07"
    },
    {
        "network": "Starhub",
        "country": "Singapore",
        "mcc": "525",
        "iso": "sg",
        "country_code": "65",
        "mnc": "05"
    },
    {
        "network": "Starhub",
        "country": "Singapore",
        "mcc": "525",
        "iso": "sg",
        "country_code": "65",
        "mnc": "06"
    },
    {
        "network": "4Ka",
        "country": "Slovakia",
        "mcc": "231",
        "iso": "sk",
        "country_code": "421",
        "mnc": "03"
    },
    {
        "network": "O2",
        "country": "Slovakia",
        "mcc": "231",
        "iso": "sk",
        "country_code": "421",
        "mnc": "06"
    },
    {
        "network": "Orange",
        "country": "Slovakia",
        "mcc": "231",
        "iso": "sk",
        "country_code": "421",
        "mnc": "05"
    },
    {
        "network": "Orange",
        "country": "Slovakia",
        "mcc": "231",
        "iso": "sk",
        "country_code": "421",
        "mnc": "01"
    },
    {
        "network": "Orange",
        "country": "Slovakia",
        "mcc": "231",
        "iso": "sk",
        "country_code": "421",
        "mnc": "15"
    },
    {
        "network": "T-Mobile",
        "country": "Slovakia",
        "mcc": "231",
        "iso": "sk",
        "country_code": "421",
        "mnc": "02"
    },
    {
        "network": "T-Mobile",
        "country": "Slovakia",
        "mcc": "231",
        "iso": "sk",
        "country_code": "421",
        "mnc": "04"
    },
    {
        "network": "Zeleznice Slovenskej republiky (ZSR)",
        "country": "Slovakia",
        "mcc": "231",
        "iso": "sk",
        "country_code": "421",
        "mnc": "99"
    },
    {
        "network": "Mobitel",
        "country": "Slovenia",
        "mcc": "293",
        "iso": "si",
        "country_code": "386",
        "mnc": "41"
    },
    {
        "network": "SI.Mobil",
        "country": "Slovenia",
        "mcc": "293",
        "iso": "si",
        "country_code": "386",
        "mnc": "40"
    },
    {
        "network": "Slovenske zeleznice d.o.o.",
        "country": "Slovenia",
        "mcc": "293",
        "iso": "si",
        "country_code": "386",
        "mnc": "10"
    },
    {
        "network": "T-2 d.o.o.",
        "country": "Slovenia",
        "mcc": "293",
        "iso": "si",
        "country_code": "386",
        "mnc": "64"
    },
    {
        "network": "Telemach/TusMobil/VEGA",
        "country": "Slovenia",
        "mcc": "293",
        "iso": "si",
        "country_code": "386",
        "mnc": "70"
    },
    {
        "network": "bemobile",
        "country": "Solomon Islands",
        "mcc": "540",
        "iso": "sb",
        "country_code": "677",
        "mnc": "02"
    },
    {
        "network": "BREEZE",
        "country": "Solomon Islands",
        "mcc": "540",
        "iso": "sb",
        "country_code": "677",
        "mnc": "10"
    },
    {
        "network": "BREEZE",
        "country": "Solomon Islands",
        "mcc": "540",
        "iso": "sb",
        "country_code": "677",
        "mnc": "01"
    },
    {
        "network": "Golis",
        "country": "Somalia",
        "mcc": "637",
        "iso": "so",
        "country_code": "252",
        "mnc": "30"
    },
    {
        "network": "HorTel",
        "country": "Somalia",
        "mcc": "637",
        "iso": "so",
        "country_code": "252",
        "mnc": "19"
    },
    {
        "network": "Nationlink",
        "country": "Somalia",
        "mcc": "637",
        "iso": "so",
        "country_code": "252",
        "mnc": "60"
    },
    {
        "network": "Nationlink",
        "country": "Somalia",
        "mcc": "637",
        "iso": "so",
        "country_code": "252",
        "mnc": "10"
    },
    {
        "network": "Somafone",
        "country": "Somalia",
        "mcc": "637",
        "iso": "so",
        "country_code": "252",
        "mnc": "04"
    },
    {
        "network": "Somtel",
        "country": "Somalia",
        "mcc": "637",
        "iso": "so",
        "country_code": "252",
        "mnc": "71"
    },
    {
        "network": "Somtel",
        "country": "Somalia",
        "mcc": "637",
        "iso": "so",
        "country_code": "252",
        "mnc": "82"
    },
    {
        "network": "Telesom ",
        "country": "Somalia",
        "mcc": "637",
        "iso": "so",
        "country_code": "252",
        "mnc": "01"
    },
    {
        "network": "8.ta",
        "country": "South Africa",
        "mcc": "655",
        "iso": "za",
        "country_code": "27",
        "mnc": "02"
    },
    {
        "network": "Cape Town Metropolitan",
        "country": "South Africa",
        "mcc": "655",
        "iso": "za",
        "country_code": "27",
        "mnc": "21"
    },
    {
        "network": "Cell C",
        "country": "South Africa",
        "mcc": "655",
        "iso": "za",
        "country_code": "27",
        "mnc": "07"
    },
    {
        "network": "MTN",
        "country": "South Africa",
        "mcc": "655",
        "iso": "za",
        "country_code": "27",
        "mnc": "10"
    },
    {
        "network": "MTN",
        "country": "South Africa",
        "mcc": "655",
        "iso": "za",
        "country_code": "27",
        "mnc": "12"
    },
    {
        "network": "Sentech",
        "country": "South Africa",
        "mcc": "655",
        "iso": "za",
        "country_code": "27",
        "mnc": "06"
    },
    {
        "network": "Vodacom",
        "country": "South Africa",
        "mcc": "655",
        "iso": "za",
        "country_code": "27",
        "mnc": "01"
    },
    {
        "network": "Wireless Business Solutions (Pty) Ltd",
        "country": "South Africa",
        "mcc": "655",
        "iso": "za",
        "country_code": "27",
        "mnc": "19"
    },
    {
        "network": "Gemtel Ltd (South Sudan",
        "country": "South Sudan (Republic of)",
        "mcc": "659",
        "iso": "ss",
        "country_code": "",
        "mnc": "03"
    },
    {
        "network": "MTN South Sudan (South Sudan",
        "country": "South Sudan (Republic of)",
        "mcc": "659",
        "iso": "ss",
        "country_code": "",
        "mnc": "02"
    },
    {
        "network": "Network of The World Ltd (NOW) (South Sudan",
        "country": "South Sudan (Republic of)",
        "mcc": "659",
        "iso": "ss",
        "country_code": "",
        "mnc": "04"
    },
    {
        "network": "Zain South Sudan (South Sudan",
        "country": "South Sudan (Republic of)",
        "mcc": "659",
        "iso": "ss",
        "country_code": "",
        "mnc": "06"
    },
    {
        "network": "Lycamobile SL",
        "country": "Spain",
        "mcc": "214",
        "iso": "es",
        "country_code": "34",
        "mnc": "23"
    },
    {
        "network": "Digi Spain Telecom SL",
        "country": "Spain",
        "mcc": "214",
        "iso": "es",
        "country_code": "34",
        "mnc": "22"
    },
    {
        "network": "BT Espana  SAU",
        "country": "Spain",
        "mcc": "214",
        "iso": "es",
        "country_code": "34",
        "mnc": "15"
    },
    {
        "network": "Cableuropa SAU (ONO)",
        "country": "Spain",
        "mcc": "214",
        "iso": "es",
        "country_code": "34",
        "mnc": "18"
    },
    {
        "network": "Euskaltel SA",
        "country": "Spain",
        "mcc": "214",
        "iso": "es",
        "country_code": "34",
        "mnc": "08"
    },
    {
        "network": "fonYou Wireless SL",
        "country": "Spain",
        "mcc": "214",
        "iso": "es",
        "country_code": "34",
        "mnc": "20"
    },
    {
        "network": "ION Mobile",
        "country": "Spain",
        "mcc": "214",
        "iso": "es",
        "country_code": "34",
        "mnc": "32"
    },
    {
        "network": "Jazz Telecom SAU",
        "country": "Spain",
        "mcc": "214",
        "iso": "es",
        "country_code": "34",
        "mnc": "21"
    },
    {
        "network": "Lleida",
        "country": "Spain",
        "mcc": "214",
        "iso": "es",
        "country_code": "34",
        "mnc": "26"
    },
    {
        "network": "Lycamobile SL",
        "country": "Spain",
        "mcc": "214",
        "iso": "es",
        "country_code": "34",
        "mnc": "25"
    },
    {
        "network": "Movistar",
        "country": "Spain",
        "mcc": "214",
        "iso": "es",
        "country_code": "34",
        "mnc": "07"
    },
    {
        "network": "Movistar",
        "country": "Spain",
        "mcc": "214",
        "iso": "es",
        "country_code": "34",
        "mnc": "05"
    },
    {
        "network": "Orange",
        "country": "Spain",
        "mcc": "214",
        "iso": "es",
        "country_code": "34",
        "mnc": "09"
    },
    {
        "network": "Orange",
        "country": "Spain",
        "mcc": "214",
        "iso": "es",
        "country_code": "34",
        "mnc": "03"
    },
    {
        "network": "Orange",
        "country": "Spain",
        "mcc": "214",
        "iso": "es",
        "country_code": "34",
        "mnc": "11"
    },
    {
        "network": "R Cable y Telec. Galicia SA",
        "country": "Spain",
        "mcc": "214",
        "iso": "es",
        "country_code": "34",
        "mnc": "17"
    },
    {
        "network": "Simyo/KPN ",
        "country": "Spain",
        "mcc": "214",
        "iso": "es",
        "country_code": "34",
        "mnc": "19"
    },
    {
        "network": "Telecable de Asturias SA",
        "country": "Spain",
        "mcc": "214",
        "iso": "es",
        "country_code": "34",
        "mnc": "16"
    },
    {
        "network": "Truphone",
        "country": "Spain",
        "mcc": "214",
        "iso": "es",
        "country_code": "34",
        "mnc": "27"
    },
    {
        "network": "Vodafone",
        "country": "Spain",
        "mcc": "214",
        "iso": "es",
        "country_code": "34",
        "mnc": "01"
    },
    {
        "network": "Vodafone Enabler Espana SL",
        "country": "Spain",
        "mcc": "214",
        "iso": "es",
        "country_code": "34",
        "mnc": "06"
    },
    {
        "network": "Yoigo",
        "country": "Spain",
        "mcc": "214",
        "iso": "es",
        "country_code": "34",
        "mnc": "04"
    },
    {
        "network": "Airtel",
        "country": "Sri Lanka",
        "mcc": "413",
        "iso": "lk",
        "country_code": "94",
        "mnc": "05"
    },
    {
        "network": "Etisalat/Tigo",
        "country": "Sri Lanka",
        "mcc": "413",
        "iso": "lk",
        "country_code": "94",
        "mnc": "03"
    },
    {
        "network": "H3G Hutchison ",
        "country": "Sri Lanka",
        "mcc": "413",
        "iso": "lk",
        "country_code": "94",
        "mnc": "08"
    },
    {
        "network": "Mobitel Ltd.",
        "country": "Sri Lanka",
        "mcc": "413",
        "iso": "lk",
        "country_code": "94",
        "mnc": "01"
    },
    {
        "network": "MTN/Dialog",
        "country": "Sri Lanka",
        "mcc": "413",
        "iso": "lk",
        "country_code": "94",
        "mnc": "02"
    },
    {
        "network": "Ameris",
        "country": "St. Pierre & Miquelon",
        "mcc": "308",
        "iso": "pm",
        "country_code": "508",
        "mnc": "01"
    },
    {
        "network": "C & W",
        "country": "St. Vincent & Gren.",
        "mcc": "360",
        "iso": "vc",
        "country_code": "1784",
        "mnc": "110"
    },
    {
        "network": "Cingular",
        "country": "St. Vincent & Gren.",
        "mcc": "360",
        "iso": "vc",
        "country_code": "1784",
        "mnc": "10"
    },
    {
        "network": "Cingular",
        "country": "St. Vincent & Gren.",
        "mcc": "360",
        "iso": "vc",
        "country_code": "1784",
        "mnc": "100"
    },
    {
        "network": "Digicel",
        "country": "St. Vincent & Gren.",
        "mcc": "360",
        "iso": "vc",
        "country_code": "1784",
        "mnc": "050"
    },
    {
        "network": "Digicel",
        "country": "St. Vincent & Gren.",
        "mcc": "360",
        "iso": "vc",
        "country_code": "1784",
        "mnc": "70"
    },
    {
        "network": "Canar Telecom",
        "country": "Sudan",
        "mcc": "634",
        "iso": "sd",
        "country_code": "249",
        "mnc": "00"
    },
    {
        "network": "MTN",
        "country": "Sudan",
        "mcc": "634",
        "iso": "sd",
        "country_code": "249",
        "mnc": "02"
    },
    {
        "network": "MTN",
        "country": "Sudan",
        "mcc": "634",
        "iso": "sd",
        "country_code": "249",
        "mnc": "22"
    },
    {
        "network": "Sudani One",
        "country": "Sudan",
        "mcc": "634",
        "iso": "sd",
        "country_code": "249",
        "mnc": "15"
    },
    {
        "network": "Sudani One",
        "country": "Sudan",
        "mcc": "634",
        "iso": "sd",
        "country_code": "249",
        "mnc": "07"
    },
    {
        "network": "Vivacell",
        "country": "Sudan",
        "mcc": "634",
        "iso": "sd",
        "country_code": "249",
        "mnc": "08"
    },
    {
        "network": "Vivacell",
        "country": "Sudan",
        "mcc": "634",
        "iso": "sd",
        "country_code": "249",
        "mnc": "05"
    },
    {
        "network": "ZAIN/Mobitel",
        "country": "Sudan",
        "mcc": "634",
        "iso": "sd",
        "country_code": "249",
        "mnc": "06"
    },
    {
        "network": "ZAIN/Mobitel",
        "country": "Sudan",
        "mcc": "634",
        "iso": "sd",
        "country_code": "249",
        "mnc": "01"
    },
    {
        "network": "Digicel",
        "country": "Suriname",
        "mcc": "746",
        "iso": "sr",
        "country_code": "597",
        "mnc": "03"
    },
    {
        "network": "Telesur",
        "country": "Suriname",
        "mcc": "746",
        "iso": "sr",
        "country_code": "597",
        "mnc": "01"
    },
    {
        "network": "Telecommunicatiebedrijf Suriname (TELESUR)",
        "country": "Suriname",
        "mcc": "746",
        "iso": "sr",
        "country_code": "597",
        "mnc": "02"
    },
    {
        "network": "UNIQA",
        "country": "Suriname",
        "mcc": "746",
        "iso": "sr",
        "country_code": "597",
        "mnc": "04"
    },
    {
        "network": "Swazi MTN",
        "country": "Swaziland",
        "mcc": "653",
        "iso": "sz",
        "country_code": "268",
        "mnc": "10"
    },
    {
        "network": "SwaziTelecom",
        "country": "Swaziland",
        "mcc": "653",
        "iso": "sz",
        "country_code": "268",
        "mnc": "01"
    },
    {
        "network": "42 Telecom AB",
        "country": "Sweden",
        "mcc": "240",
        "iso": "se",
        "country_code": "46",
        "mnc": "35"
    },
    {
        "network": "42 Telecom AB",
        "country": "Sweden",
        "mcc": "240",
        "iso": "se",
        "country_code": "46",
        "mnc": "16"
    },
    {
        "network": "Beepsend",
        "country": "Sweden",
        "mcc": "240",
        "iso": "se",
        "country_code": "46",
        "mnc": "26"
    },
    {
        "network": "NextGen Mobile Ltd (CardBoardFish)",
        "country": "Sweden",
        "mcc": "240",
        "iso": "se",
        "country_code": "46",
        "mnc": "30"
    },
    {
        "network": "CoolTEL Aps",
        "country": "Sweden",
        "mcc": "240",
        "iso": "se",
        "country_code": "46",
        "mnc": "28"
    },
    {
        "network": "Digitel Mobile Srl",
        "country": "Sweden",
        "mcc": "240",
        "iso": "se",
        "country_code": "46",
        "mnc": "25"
    },
    {
        "network": "Eu Tel AB",
        "country": "Sweden",
        "mcc": "240",
        "iso": "se",
        "country_code": "46",
        "mnc": "22"
    },
    {
        "network": "Fogg Mobile AB",
        "country": "Sweden",
        "mcc": "240",
        "iso": "se",
        "country_code": "46",
        "mnc": "27"
    },
    {
        "network": "Generic Mobile Systems Sweden AB",
        "country": "Sweden",
        "mcc": "240",
        "iso": "se",
        "country_code": "46",
        "mnc": "18"
    },
    {
        "network": "Gotalandsnatet AB",
        "country": "Sweden",
        "mcc": "240",
        "iso": "se",
        "country_code": "46",
        "mnc": "17"
    },
    {
        "network": "H3G Access AB",
        "country": "Sweden",
        "mcc": "240",
        "iso": "se",
        "country_code": "46",
        "mnc": "02"
    },
    {
        "network": "H3G Access AB",
        "country": "Sweden",
        "mcc": "240",
        "iso": "se",
        "country_code": "46",
        "mnc": "04"
    },
    {
        "network": "ID Mobile",
        "country": "Sweden",
        "mcc": "240",
        "iso": "se",
        "country_code": "46",
        "mnc": "36"
    },
    {
        "network": "Infobip Ltd.",
        "country": "Sweden",
        "mcc": "240",
        "iso": "se",
        "country_code": "46",
        "mnc": "23"
    },
    {
        "network": "Lindholmen Science Park AB",
        "country": "Sweden",
        "mcc": "240",
        "iso": "se",
        "country_code": "46",
        "mnc": "11"
    },
    {
        "network": "Lycamobile Ltd",
        "country": "Sweden",
        "mcc": "240",
        "iso": "se",
        "country_code": "46",
        "mnc": "12"
    },
    {
        "network": "Mercury International Carrier Services",
        "country": "Sweden",
        "mcc": "240",
        "iso": "se",
        "country_code": "46",
        "mnc": "29"
    },
    {
        "network": "Mundio Mobile (Sweden) Ltd",
        "country": "Sweden",
        "mcc": "240",
        "iso": "se",
        "country_code": "46",
        "mnc": "19"
    },
    {
        "network": "Spring Mobil AB",
        "country": "Sweden",
        "mcc": "240",
        "iso": "se",
        "country_code": "46",
        "mnc": "10"
    },
    {
        "network": "Svenska UMTS-N",
        "country": "Sweden",
        "mcc": "240",
        "iso": "se",
        "country_code": "46",
        "mnc": "05"
    },
    {
        "network": "TDC Sverige AB",
        "country": "Sweden",
        "mcc": "240",
        "iso": "se",
        "country_code": "46",
        "mnc": "14"
    },
    {
        "network": "Tele2 Sverige AB",
        "country": "Sweden",
        "mcc": "240",
        "iso": "se",
        "country_code": "46",
        "mnc": "07"
    },
    {
        "network": "Telenor (Vodafone)",
        "country": "Sweden",
        "mcc": "240",
        "iso": "se",
        "country_code": "46",
        "mnc": "24"
    },
    {
        "network": "Telenor (Vodafone)",
        "country": "Sweden",
        "mcc": "240",
        "iso": "se",
        "country_code": "46",
        "mnc": "08"
    },
    {
        "network": "Telenor (Vodafone)",
        "country": "Sweden",
        "mcc": "240",
        "iso": "se",
        "country_code": "46",
        "mnc": "06"
    },
    {
        "network": "Telia Mobile",
        "country": "Sweden",
        "mcc": "240",
        "iso": "se",
        "country_code": "46",
        "mnc": "01"
    },
    {
        "network": "Ventelo Sverige AB",
        "country": "Sweden",
        "mcc": "240",
        "iso": "se",
        "country_code": "46",
        "mnc": "13"
    },
    {
        "network": "Wireless Maingate AB",
        "country": "Sweden",
        "mcc": "240",
        "iso": "se",
        "country_code": "46",
        "mnc": "20"
    },
    {
        "network": "Wireless Maingate Nordic AB",
        "country": "Sweden",
        "mcc": "240",
        "iso": "se",
        "country_code": "46",
        "mnc": "15"
    },
    {
        "network": "BebbiCell AG",
        "country": "Switzerland",
        "mcc": "228",
        "iso": "ch",
        "country_code": "41",
        "mnc": "51"
    },
    {
        "network": "Comfone AG",
        "country": "Switzerland",
        "mcc": "228",
        "iso": "ch",
        "country_code": "41",
        "mnc": "05"
    },
    {
        "network": "Comfone AG",
        "country": "Switzerland",
        "mcc": "228",
        "iso": "ch",
        "country_code": "41",
        "mnc": "09"
    },
    {
        "network": "TDC Sunrise",
        "country": "Switzerland",
        "mcc": "228",
        "iso": "ch",
        "country_code": "41",
        "mnc": "07"
    },
    {
        "network": "Lycamobile AG",
        "country": "Switzerland",
        "mcc": "228",
        "iso": "ch",
        "country_code": "41",
        "mnc": "54"
    },
    {
        "network": "Mundio Mobile AG",
        "country": "Switzerland",
        "mcc": "228",
        "iso": "ch",
        "country_code": "41",
        "mnc": "52"
    },
    {
        "network": "Salt/Orange",
        "country": "Switzerland",
        "mcc": "228",
        "iso": "ch",
        "country_code": "41",
        "mnc": "03"
    },
    {
        "network": "Swisscom",
        "country": "Switzerland",
        "mcc": "228",
        "iso": "ch",
        "country_code": "41",
        "mnc": "01"
    },
    {
        "network": "TDC Sunrise",
        "country": "Switzerland",
        "mcc": "228",
        "iso": "ch",
        "country_code": "41",
        "mnc": "12"
    },
    {
        "network": "TDC Sunrise",
        "country": "Switzerland",
        "mcc": "228",
        "iso": "ch",
        "country_code": "41",
        "mnc": "02"
    },
    {
        "network": "TDC Sunrise",
        "country": "Switzerland",
        "mcc": "228",
        "iso": "ch",
        "country_code": "41",
        "mnc": "08"
    },
    {
        "network": "upc cablecom GmbH",
        "country": "Switzerland",
        "mcc": "228",
        "iso": "ch",
        "country_code": "41",
        "mnc": "53"
    },
    {
        "network": "MTN/Spacetel",
        "country": "Syrian Arab Republic",
        "mcc": "417",
        "iso": "sy",
        "country_code": "963",
        "mnc": "02"
    },
    {
        "network": "Syriatel Holdings",
        "country": "Syrian Arab Republic",
        "mcc": "417",
        "iso": "sy",
        "country_code": "963",
        "mnc": "09"
    },
    {
        "network": "Syriatel Holdings",
        "country": "Syrian Arab Republic",
        "mcc": "417",
        "iso": "sy",
        "country_code": "963",
        "mnc": "01"
    },
    {
        "network": "ACeS Taiwan - ACeS Taiwan Telecommunications Co Ltd",
        "country": "Taiwan",
        "mcc": "466",
        "iso": "tw",
        "country_code": "886",
        "mnc": "68"
    },
    {
        "network": "Asia Pacific Telecom Co. Ltd (APT)",
        "country": "Taiwan",
        "mcc": "466",
        "iso": "tw",
        "country_code": "886",
        "mnc": "05"
    },
    {
        "network": "Chunghwa Telecom LDM",
        "country": "Taiwan",
        "mcc": "466",
        "iso": "tw",
        "country_code": "886",
        "mnc": "11"
    },
    {
        "network": "Chunghwa Telecom LDM",
        "country": "Taiwan",
        "mcc": "466",
        "iso": "tw",
        "country_code": "886",
        "mnc": "92"
    },
    {
        "network": "Far EasTone",
        "country": "Taiwan",
        "mcc": "466",
        "iso": "tw",
        "country_code": "886",
        "mnc": "01"
    },
    {
        "network": "Far EasTone",
        "country": "Taiwan",
        "mcc": "466",
        "iso": "tw",
        "country_code": "886",
        "mnc": "07"
    },
    {
        "network": "Far EasTone",
        "country": "Taiwan",
        "mcc": "466",
        "iso": "tw",
        "country_code": "886",
        "mnc": "06"
    },
    {
        "network": "Far EasTone",
        "country": "Taiwan",
        "mcc": "466",
        "iso": "tw",
        "country_code": "886",
        "mnc": "02"
    },
    {
        "network": "Far EasTone",
        "country": "Taiwan",
        "mcc": "466",
        "iso": "tw",
        "country_code": "886",
        "mnc": "03"
    },
    {
        "network": "Global Mobile Corp.",
        "country": "Taiwan",
        "mcc": "466",
        "iso": "tw",
        "country_code": "886",
        "mnc": "10"
    },
    {
        "network": "International Telecom Co. Ltd (FITEL)",
        "country": "Taiwan",
        "mcc": "466",
        "iso": "tw",
        "country_code": "886",
        "mnc": "56"
    },
    {
        "network": "KG Telecom",
        "country": "Taiwan",
        "mcc": "466",
        "iso": "tw",
        "country_code": "886",
        "mnc": "88"
    },
    {
        "network": "Taiwan Cellular",
        "country": "Taiwan",
        "mcc": "466",
        "iso": "tw",
        "country_code": "886",
        "mnc": "97"
    },
    {
        "network": "Mobitai",
        "country": "Taiwan",
        "mcc": "466",
        "iso": "tw",
        "country_code": "886",
        "mnc": "93"
    },
    {
        "network": "TransAsia",
        "country": "Taiwan",
        "mcc": "466",
        "iso": "tw",
        "country_code": "886",
        "mnc": "99"
    },
    {
        "network": "T-Star/VIBO",
        "country": "Taiwan",
        "mcc": "466",
        "iso": "tw",
        "country_code": "886",
        "mnc": "89"
    },
    {
        "network": "VMAX Telecom Co. Ltd",
        "country": "Taiwan",
        "mcc": "466",
        "iso": "tw",
        "country_code": "886",
        "mnc": "09"
    },
    {
        "network": "Babilon-M",
        "country": "Tajikistan",
        "mcc": "436",
        "iso": "tk",
        "country_code": "992",
        "mnc": "04"
    },
    {
        "network": "Bee Line",
        "country": "Tajikistan",
        "mcc": "436",
        "iso": "tk",
        "country_code": "992",
        "mnc": "05"
    },
    {
        "network": "CJSC Indigo Tajikistan",
        "country": "Tajikistan",
        "mcc": "436",
        "iso": "tk",
        "country_code": "992",
        "mnc": "02"
    },
    {
        "network": "Tcell/JC Somoncom",
        "country": "Tajikistan",
        "mcc": "436",
        "iso": "tk",
        "country_code": "992",
        "mnc": "12"
    },
    {
        "network": "MLT/TT mobile",
        "country": "Tajikistan",
        "mcc": "436",
        "iso": "tk",
        "country_code": "992",
        "mnc": "03"
    },
    {
        "network": "Tcell/JC Somoncom",
        "country": "Tajikistan",
        "mcc": "436",
        "iso": "tk",
        "country_code": "992",
        "mnc": "01"
    },
    {
        "network": "Benson Informatics Ltd",
        "country": "Tanzania",
        "mcc": "640",
        "iso": "tz",
        "country_code": "255",
        "mnc": "08"
    },
    {
        "network": "Dovetel (T) Ltd",
        "country": "Tanzania",
        "mcc": "640",
        "iso": "tz",
        "country_code": "255",
        "mnc": "06"
    },
    {
        "network": "Halotel/Viettel Ltd",
        "country": "Tanzania",
        "mcc": "640",
        "iso": "tz",
        "country_code": "255",
        "mnc": "09"
    },
    {
        "network": "Smile Communications Tanzania Ltd",
        "country": "Tanzania",
        "mcc": "640",
        "iso": "tz",
        "country_code": "255",
        "mnc": "11"
    },
    {
        "network": "Tanzania Telecommunications Company Ltd (TTCL)",
        "country": "Tanzania",
        "mcc": "640",
        "iso": "tz",
        "country_code": "255",
        "mnc": "07"
    },
    {
        "network": "TIGO/MIC",
        "country": "Tanzania",
        "mcc": "640",
        "iso": "tz",
        "country_code": "255",
        "mnc": "02"
    },
    {
        "network": "Tri Telecomm. Ltd.",
        "country": "Tanzania",
        "mcc": "640",
        "iso": "tz",
        "country_code": "255",
        "mnc": "01"
    },
    {
        "network": "Vodacom Ltd",
        "country": "Tanzania",
        "mcc": "640",
        "iso": "tz",
        "country_code": "255",
        "mnc": "04"
    },
    {
        "network": "Airtel/ZAIN/Celtel",
        "country": "Tanzania",
        "mcc": "640",
        "iso": "tz",
        "country_code": "255",
        "mnc": "05"
    },
    {
        "network": "Zantel/Zanzibar Telecom",
        "country": "Tanzania",
        "mcc": "640",
        "iso": "tz",
        "country_code": "255",
        "mnc": "03"
    },
    {
        "network": "ACeS Thailand - ACeS Regional Services Co Ltd",
        "country": "Thailand",
        "mcc": "520",
        "iso": "th",
        "country_code": "66",
        "mnc": "20"
    },
    {
        "network": "ACT Mobile",
        "country": "Thailand",
        "mcc": "520",
        "iso": "th",
        "country_code": "66",
        "mnc": "15"
    },
    {
        "network": "Advanced Wireless Networks/AWN",
        "country": "Thailand",
        "mcc": "520",
        "iso": "th",
        "country_code": "66",
        "mnc": "03"
    },
    {
        "network": "AIS/Advanced Info Service",
        "country": "Thailand",
        "mcc": "520",
        "iso": "th",
        "country_code": "66",
        "mnc": "01"
    },
    {
        "network": "Digital Phone Co.",
        "country": "Thailand",
        "mcc": "520",
        "iso": "th",
        "country_code": "66",
        "mnc": "23"
    },
    {
        "network": "Hutch/CAT CDMA",
        "country": "Thailand",
        "mcc": "520",
        "iso": "th",
        "country_code": "66",
        "mnc": "00"
    },
    {
        "network": "Total Access (DTAC)",
        "country": "Thailand",
        "mcc": "520",
        "iso": "th",
        "country_code": "66",
        "mnc": "05"
    },
    {
        "network": "Total Access (DTAC)",
        "country": "Thailand",
        "mcc": "520",
        "iso": "th",
        "country_code": "66",
        "mnc": "18"
    },
    {
        "network": "True Move/Orange",
        "country": "Thailand",
        "mcc": "520",
        "iso": "th",
        "country_code": "66",
        "mnc": "99"
    },
    {
        "network": "True Move/Orange",
        "country": "Thailand",
        "mcc": "520",
        "iso": "th",
        "country_code": "66",
        "mnc": "04"
    },
    {
        "network": "Telin/ Telkomcel",
        "country": "Timor-Leste",
        "mcc": "514",
        "iso": "tp",
        "country_code": "670",
        "mnc": "01"
    },
    {
        "network": "Timor Telecom",
        "country": "Timor-Leste",
        "mcc": "514",
        "iso": "tp",
        "country_code": "670",
        "mnc": "02"
    },
    {
        "network": "Telecel/MOOV",
        "country": "Togo",
        "mcc": "615",
        "iso": "tg",
        "country_code": "228",
        "mnc": "02"
    },
    {
        "network": "Telecel/MOOV",
        "country": "Togo",
        "mcc": "615",
        "iso": "tg",
        "country_code": "228",
        "mnc": "03"
    },
    {
        "network": "Togo Telecom/TogoCELL",
        "country": "Togo",
        "mcc": "615",
        "iso": "tg",
        "country_code": "228",
        "mnc": "01"
    },
    {
        "network": "Shoreline Communication",
        "country": "Tonga",
        "mcc": "539",
        "iso": "to",
        "country_code": "676",
        "mnc": "43"
    },
    {
        "network": "Tonga Communications",
        "country": "Tonga",
        "mcc": "539",
        "iso": "to",
        "country_code": "676",
        "mnc": "01"
    },
    {
        "network": "Bmobile/TSTT",
        "country": "Trinidad and Tobago",
        "mcc": "374",
        "iso": "tt",
        "country_code": "1868",
        "mnc": "120"
    },
    {
        "network": "Bmobile/TSTT",
        "country": "Trinidad and Tobago",
        "mcc": "374",
        "iso": "tt",
        "country_code": "1868",
        "mnc": "12"
    },
    {
        "network": "Digicel",
        "country": "Trinidad and Tobago",
        "mcc": "374",
        "iso": "tt",
        "country_code": "1868",
        "mnc": "130"
    },
    {
        "network": "LaqTel Ltd.",
        "country": "Trinidad and Tobago",
        "mcc": "374",
        "iso": "tt",
        "country_code": "1868",
        "mnc": "140"
    },
    {
        "network": "Orange",
        "country": "Tunisia",
        "mcc": "605",
        "iso": "tn",
        "country_code": "216",
        "mnc": "01"
    },
    {
        "network": "Oreedo/Orascom",
        "country": "Tunisia",
        "mcc": "605",
        "iso": "tn",
        "country_code": "216",
        "mnc": "03"
    },
    {
        "network": "TuniCell/Tunisia Telecom",
        "country": "Tunisia",
        "mcc": "605",
        "iso": "tn",
        "country_code": "216",
        "mnc": "02"
    },
    {
        "network": "TuniCell/Tunisia Telecom",
        "country": "Tunisia",
        "mcc": "605",
        "iso": "tn",
        "country_code": "216",
        "mnc": "06"
    },
    {
        "network": "AVEA/Aria",
        "country": "Turkey",
        "mcc": "286",
        "iso": "tr",
        "country_code": "90",
        "mnc": "04"
    },
    {
        "network": "AVEA/Aria",
        "country": "Turkey",
        "mcc": "286",
        "iso": "tr",
        "country_code": "90",
        "mnc": "03"
    },
    {
        "network": "Turkcell",
        "country": "Turkey",
        "mcc": "286",
        "iso": "tr",
        "country_code": "90",
        "mnc": "01"
    },
    {
        "network": "Vodafone-Telsim",
        "country": "Turkey",
        "mcc": "286",
        "iso": "tr",
        "country_code": "90",
        "mnc": "02"
    },
    {
        "network": "MTS/Barash Communication",
        "country": "Turkmenistan",
        "mcc": "438",
        "iso": "tm",
        "country_code": "993",
        "mnc": "01"
    },
    {
        "network": "Altyn Asyr/TM-Cell",
        "country": "Turkmenistan",
        "mcc": "438",
        "iso": "tm",
        "country_code": "993",
        "mnc": "02"
    },
    {
        "network": "Cable & Wireless (TCI) Ltd",
        "country": "Turks and Caicos Islands",
        "mcc": "376",
        "iso": "tc",
        "country_code": "",
        "mnc": "350"
    },
    {
        "network": "Digicel TCI Ltd",
        "country": "Turks and Caicos Islands",
        "mcc": "376",
        "iso": "tc",
        "country_code": "",
        "mnc": "050"
    },
    {
        "network": "IslandCom Communications Ltd.",
        "country": "Turks and Caicos Islands",
        "mcc": "376",
        "iso": "tc",
        "country_code": "",
        "mnc": "352"
    },
    {
        "network": "Tuvalu Telecommunication Corporation (TTC)",
        "country": "Tuvalu",
        "mcc": "553",
        "iso": "tv",
        "country_code": "",
        "mnc": "01"
    },
    {
        "network": "Airtel/Celtel",
        "country": "Uganda",
        "mcc": "641",
        "iso": "ug",
        "country_code": "256",
        "mnc": "01"
    },
    {
        "network": "i-Tel Ltd",
        "country": "Uganda",
        "mcc": "641",
        "iso": "ug",
        "country_code": "256",
        "mnc": "66"
    },
    {
        "network": "K2 Telecom Ltd",
        "country": "Uganda",
        "mcc": "641",
        "iso": "ug",
        "country_code": "256",
        "mnc": "30"
    },
    {
        "network": "MTN Ltd.",
        "country": "Uganda",
        "mcc": "641",
        "iso": "ug",
        "country_code": "256",
        "mnc": "10"
    },
    {
        "network": "Orange",
        "country": "Uganda",
        "mcc": "641",
        "iso": "ug",
        "country_code": "256",
        "mnc": "14"
    },
    {
        "network": "Smile Communications Uganda Ltd",
        "country": "Uganda",
        "mcc": "641",
        "iso": "ug",
        "country_code": "256",
        "mnc": "33"
    },
    {
        "network": "Suretelecom Uganda Ltd",
        "country": "Uganda",
        "mcc": "641",
        "iso": "ug",
        "country_code": "256",
        "mnc": "18"
    },
    {
        "network": "Uganda Telecom Ltd.",
        "country": "Uganda",
        "mcc": "641",
        "iso": "ug",
        "country_code": "256",
        "mnc": "11"
    },
    {
        "network": "Airtel/Warid",
        "country": "Uganda",
        "mcc": "641",
        "iso": "ug",
        "country_code": "256",
        "mnc": "22"
    },
    {
        "network": "Astelit/LIFE",
        "country": "Ukraine",
        "mcc": "255",
        "iso": "ua",
        "country_code": "380",
        "mnc": "06"
    },
    {
        "network": "Golden Telecom",
        "country": "Ukraine",
        "mcc": "255",
        "iso": "ua",
        "country_code": "380",
        "mnc": "05"
    },
    {
        "network": "Golden Telecom",
        "country": "Ukraine",
        "mcc": "255",
        "iso": "ua",
        "country_code": "380",
        "mnc": "39"
    },
    {
        "network": "Intertelecom Ltd (IT)",
        "country": "Ukraine",
        "mcc": "255",
        "iso": "ua",
        "country_code": "380",
        "mnc": "04"
    },
    {
        "network": "KyivStar",
        "country": "Ukraine",
        "mcc": "255",
        "iso": "ua",
        "country_code": "380",
        "mnc": "67"
    },
    {
        "network": "KyivStar",
        "country": "Ukraine",
        "mcc": "255",
        "iso": "ua",
        "country_code": "380",
        "mnc": "03"
    },
    {
        "network": "Telesystems Of Ukraine CJSC (TSU)",
        "country": "Ukraine",
        "mcc": "255",
        "iso": "ua",
        "country_code": "380",
        "mnc": "21"
    },
    {
        "network": "TriMob LLC",
        "country": "Ukraine",
        "mcc": "255",
        "iso": "ua",
        "country_code": "380",
        "mnc": "07"
    },
    {
        "network": "UMC/MTS",
        "country": "Ukraine",
        "mcc": "255",
        "iso": "ua",
        "country_code": "380",
        "mnc": "50"
    },
    {
        "network": "Beeline",
        "country": "Ukraine",
        "mcc": "255",
        "iso": "ua",
        "country_code": "380",
        "mnc": "02"
    },
    {
        "network": "UMC/MTS",
        "country": "Ukraine",
        "mcc": "255",
        "iso": "ua",
        "country_code": "380",
        "mnc": "01"
    },
    {
        "network": "Beeline",
        "country": "Ukraine",
        "mcc": "255",
        "iso": "ua",
        "country_code": "380",
        "mnc": "68"
    },
    {
        "network": "DU",
        "country": "United Arab Emirates",
        "mcc": "424",
        "iso": "ae",
        "country_code": "971",
        "mnc": "03"
    },
    {
        "network": "Etisalat",
        "country": "United Arab Emirates",
        "mcc": "424",
        "iso": "ae",
        "country_code": "971",
        "mnc": "02"
    },
    {
        "network": "Etisalat",
        "country": "United Arab Emirates",
        "mcc": "430",
        "iso": "ae",
        "country_code": "971",
        "mnc": "02"
    },
    {
        "network": "Etisalat",
        "country": "United Arab Emirates",
        "mcc": "431",
        "iso": "ae",
        "country_code": "971",
        "mnc": "02"
    },
    {
        "network": "Airtel/Vodafone",
        "country": "United Kingdom",
        "mcc": "234",
        "iso": "gb",
        "country_code": "44",
        "mnc": "03"
    },
    {
        "network": "BT Group",
        "country": "United Kingdom",
        "mcc": "234",
        "iso": "gb",
        "country_code": "44",
        "mnc": "77"
    },
    {
        "network": "BT Group",
        "country": "United Kingdom",
        "mcc": "234",
        "iso": "gb",
        "country_code": "44",
        "mnc": "76"
    },
    {
        "network": "Cable and Wireless ",
        "country": "United Kingdom",
        "mcc": "234",
        "iso": "gb",
        "country_code": "44",
        "mnc": "07"
    },
    {
        "network": "Cable and Wireless ",
        "country": "United Kingdom",
        "mcc": "234",
        "iso": "gb",
        "country_code": "44",
        "mnc": "92"
    },
    {
        "network": "Cable and Wireless Isle of Man",
        "country": "United Kingdom",
        "mcc": "234",
        "iso": "gb",
        "country_code": "44",
        "mnc": "36"
    },
    {
        "network": "Cloud9/wire9 Tel.",
        "country": "United Kingdom",
        "mcc": "234",
        "iso": "gb",
        "country_code": "44",
        "mnc": "18"
    },
    {
        "network": "Everyth. Ev.wh.",
        "country": "United Kingdom",
        "mcc": "235",
        "iso": "gb",
        "country_code": "44",
        "mnc": "02"
    },
    {
        "network": "FlexTel",
        "country": "United Kingdom",
        "mcc": "234",
        "iso": "gb",
        "country_code": "44",
        "mnc": "17"
    },
    {
        "network": "Guernsey Telecoms",
        "country": "United Kingdom",
        "mcc": "234",
        "iso": "gb",
        "country_code": "44",
        "mnc": "55"
    },
    {
        "network": "HaySystems",
        "country": "United Kingdom",
        "mcc": "234",
        "iso": "gb",
        "country_code": "44",
        "mnc": "14"
    },
    {
        "network": "H3G Hutchinson",
        "country": "United Kingdom",
        "mcc": "234",
        "iso": "gb",
        "country_code": "44",
        "mnc": "94"
    },
    {
        "network": "H3G Hutchinson",
        "country": "United Kingdom",
        "mcc": "234",
        "iso": "gb",
        "country_code": "44",
        "mnc": "20"
    },
    {
        "network": "Inquam Telecom Ltd",
        "country": "United Kingdom",
        "mcc": "234",
        "iso": "gb",
        "country_code": "44",
        "mnc": "75"
    },
    {
        "network": "Jersey Telecom",
        "country": "United Kingdom",
        "mcc": "234",
        "iso": "gb",
        "country_code": "44",
        "mnc": "50"
    },
    {
        "network": "JSC Ingenicum",
        "country": "United Kingdom",
        "mcc": "234",
        "iso": "gb",
        "country_code": "44",
        "mnc": "35"
    },
    {
        "network": "Lycamobile",
        "country": "United Kingdom",
        "mcc": "234",
        "iso": "gb",
        "country_code": "44",
        "mnc": "26"
    },
    {
        "network": "Manx Telecom",
        "country": "United Kingdom",
        "mcc": "234",
        "iso": "gb",
        "country_code": "44",
        "mnc": "58"
    },
    {
        "network": "Mapesbury C. Ltd",
        "country": "United Kingdom",
        "mcc": "234",
        "iso": "gb",
        "country_code": "44",
        "mnc": "01"
    },
    {
        "network": "Marthon Telecom",
        "country": "United Kingdom",
        "mcc": "234",
        "iso": "gb",
        "country_code": "44",
        "mnc": "28"
    },
    {
        "network": "O2 Ltd.",
        "country": "United Kingdom",
        "mcc": "234",
        "iso": "gb",
        "country_code": "44",
        "mnc": "10"
    },
    {
        "network": "O2 Ltd.",
        "country": "United Kingdom",
        "mcc": "234",
        "iso": "gb",
        "country_code": "44",
        "mnc": "02"
    },
    {
        "network": "O2 Ltd.",
        "country": "United Kingdom",
        "mcc": "234",
        "iso": "gb",
        "country_code": "44",
        "mnc": "11"
    },
    {
        "network": "OnePhone",
        "country": "United Kingdom",
        "mcc": "234",
        "iso": "gb",
        "country_code": "44",
        "mnc": "08"
    },
    {
        "network": "Opal Telecom",
        "country": "United Kingdom",
        "mcc": "234",
        "iso": "gb",
        "country_code": "44",
        "mnc": "16"
    },
    {
        "network": "Everyth. Ev.wh./Orange",
        "country": "United Kingdom",
        "mcc": "234",
        "iso": "gb",
        "country_code": "44",
        "mnc": "34"
    },
    {
        "network": "Everyth. Ev.wh./Orange",
        "country": "United Kingdom",
        "mcc": "234",
        "iso": "gb",
        "country_code": "44",
        "mnc": "33"
    },
    {
        "network": "PMN/Teleware",
        "country": "United Kingdom",
        "mcc": "234",
        "iso": "gb",
        "country_code": "44",
        "mnc": "19"
    },
    {
        "network": "Railtrack Plc",
        "country": "United Kingdom",
        "mcc": "234",
        "iso": "gb",
        "country_code": "44",
        "mnc": "12"
    },
    {
        "network": "Routotelecom",
        "country": "United Kingdom",
        "mcc": "234",
        "iso": "gb",
        "country_code": "44",
        "mnc": "22"
    },
    {
        "network": "Sky UK Limited",
        "country": "United Kingdom",
        "mcc": "234",
        "iso": "gb",
        "country_code": "44",
        "mnc": "57"
    },
    {
        "network": "Stour Marine",
        "country": "United Kingdom",
        "mcc": "234",
        "iso": "gb",
        "country_code": "44",
        "mnc": "24"
    },
    {
        "network": "Synectiv Ltd.",
        "country": "United Kingdom",
        "mcc": "234",
        "iso": "gb",
        "country_code": "44",
        "mnc": "37"
    },
    {
        "network": "Everyth. Ev.wh./T-Mobile",
        "country": "United Kingdom",
        "mcc": "234",
        "iso": "gb",
        "country_code": "44",
        "mnc": "31"
    },
    {
        "network": "Everyth. Ev.wh./T-Mobile",
        "country": "United Kingdom",
        "mcc": "234",
        "iso": "gb",
        "country_code": "44",
        "mnc": "30"
    },
    {
        "network": "Everyth. Ev.wh./T-Mobile",
        "country": "United Kingdom",
        "mcc": "234",
        "iso": "gb",
        "country_code": "44",
        "mnc": "32"
    },
    {
        "network": "Vodafone",
        "country": "United Kingdom",
        "mcc": "234",
        "iso": "gb",
        "country_code": "44",
        "mnc": "27"
    },
    {
        "network": "Tismi",
        "country": "United Kingdom",
        "mcc": "234",
        "iso": "gb",
        "country_code": "44",
        "mnc": "09"
    },
    {
        "network": "Truphone",
        "country": "United Kingdom",
        "mcc": "234",
        "iso": "gb",
        "country_code": "44",
        "mnc": "25"
    },
    {
        "network": "Jersey Telecom",
        "country": "United Kingdom",
        "mcc": "234",
        "iso": "gb",
        "country_code": "44",
        "mnc": "51"
    },
    {
        "network": "Vectofone Mobile Wifi",
        "country": "United Kingdom",
        "mcc": "234",
        "iso": "gb",
        "country_code": "44",
        "mnc": "23"
    },
    {
        "network": "Vodafone",
        "country": "United Kingdom",
        "mcc": "234",
        "iso": "gb",
        "country_code": "44",
        "mnc": "91"
    },
    {
        "network": "Vodafone",
        "country": "United Kingdom",
        "mcc": "234",
        "iso": "gb",
        "country_code": "44",
        "mnc": "15"
    },
    {
        "network": "Wave Telecom Ltd",
        "country": "United Kingdom",
        "mcc": "234",
        "iso": "gb",
        "country_code": "44",
        "mnc": "78"
    },
    {
        "network": "",
        "country": "United States",
        "mcc": "310",
        "iso": "us",
        "country_code": "1",
        "mnc": "050"
    },
    {
        "network": "",
        "country": "United States",
        "mcc": "310",
        "iso": "us",
        "country_code": "1",
        "mnc": "880"
    },
    {
        "network": "Aeris Comm. Inc.",
        "country": "United States",
        "mcc": "310",
        "iso": "us",
        "country_code": "1",
        "mnc": "850"
    },
    {
        "network": "",
        "country": "United States",
        "mcc": "310",
        "iso": "us",
        "country_code": "1",
        "mnc": "640"
    },
    {
        "network": "Airtel Wireless LLC",
        "country": "United States",
        "mcc": "310",
        "iso": "us",
        "country_code": "1",
        "mnc": "510"
    },
    {
        "network": "Unknown",
        "country": "United States",
        "mcc": "310",
        "iso": "us",
        "country_code": "1",
        "mnc": "190"
    },
    {
        "network": "Allied Wireless Communications Corporation",
        "country": "United States",
        "mcc": "312",
        "iso": "us",
        "country_code": "1",
        "mnc": "090"
    },
    {
        "network": "",
        "country": "United States",
        "mcc": "311",
        "iso": "us",
        "country_code": "1",
        "mnc": "130"
    },
    {
        "network": "Arctic Slope Telephone Association Cooperative Inc.",
        "country": "United States",
        "mcc": "310",
        "iso": "us",
        "country_code": "1",
        "mnc": "710"
    },
    {
        "network": "AT&T Wireless Inc.",
        "country": "United States",
        "mcc": "310",
        "iso": "us",
        "country_code": "1",
        "mnc": "560"
    },
    {
        "network": "AT&T Wireless Inc.",
        "country": "United States",
        "mcc": "310",
        "iso": "us",
        "country_code": "1",
        "mnc": "410"
    },
    {
        "network": "AT&T Wireless Inc.",
        "country": "United States",
        "mcc": "310",
        "iso": "us",
        "country_code": "1",
        "mnc": "380"
    },
    {
        "network": "AT&T Wireless Inc.",
        "country": "United States",
        "mcc": "310",
        "iso": "us",
        "country_code": "1",
        "mnc": "170"
    },
    {
        "network": "AT&T Wireless Inc.",
        "country": "United States",
        "mcc": "310",
        "iso": "us",
        "country_code": "1",
        "mnc": "150"
    },
    {
        "network": "AT&T Wireless Inc.",
        "country": "United States",
        "mcc": "310",
        "iso": "us",
        "country_code": "1",
        "mnc": "680"
    },
    {
        "network": "AT&T Wireless Inc.",
        "country": "United States",
        "mcc": "310",
        "iso": "us",
        "country_code": "1",
        "mnc": "070"
    },
    {
        "network": "AT&T Wireless Inc.",
        "country": "United States",
        "mcc": "310",
        "iso": "us",
        "country_code": "1",
        "mnc": "980"
    },
    {
        "network": "Bluegrass Wireless LLC",
        "country": "United States",
        "mcc": "311",
        "iso": "us",
        "country_code": "1",
        "mnc": "810"
    },
    {
        "network": "Bluegrass Wireless LLC",
        "country": "United States",
        "mcc": "311",
        "iso": "us",
        "country_code": "1",
        "mnc": "800"
    },
    {
        "network": "Bluegrass Wireless LLC",
        "country": "United States",
        "mcc": "311",
        "iso": "us",
        "country_code": "1",
        "mnc": "440"
    },
    {
        "network": "Cable & Communications Corp.",
        "country": "United States",
        "mcc": "310",
        "iso": "us",
        "country_code": "1",
        "mnc": "900"
    },
    {
        "network": "California RSA No. 3 Limited Partnership",
        "country": "United States",
        "mcc": "311",
        "iso": "us",
        "country_code": "1",
        "mnc": "590"
    },
    {
        "network": "Cambridge Telephone Company Inc.",
        "country": "United States",
        "mcc": "311",
        "iso": "us",
        "country_code": "1",
        "mnc": "500"
    },
    {
        "network": "Caprock Cellular Ltd.",
        "country": "United States",
        "mcc": "310",
        "iso": "us",
        "country_code": "1",
        "mnc": "830"
    },
    {
        "network": "Verizon Wireless",
        "country": "United States",
        "mcc": "310",
        "iso": "us",
        "country_code": "1",
        "mnc": "012"
    },
    {
        "network": "Verizon Wireless",
        "country": "United States",
        "mcc": "311",
        "iso": "us",
        "country_code": "1",
        "mnc": "280"
    },
    {
        "network": "Verizon Wireless",
        "country": "United States",
        "mcc": "311",
        "iso": "us",
        "country_code": "1",
        "mnc": "485"
    },
    {
        "network": "Verizon Wireless",
        "country": "United States",
        "mcc": "311",
        "iso": "us",
        "country_code": "1",
        "mnc": "110"
    },
    {
        "network": "Verizon Wireless",
        "country": "United States",
        "mcc": "311",
        "iso": "us",
        "country_code": "1",
        "mnc": "285"
    },
    {
        "network": "Verizon Wireless",
        "country": "United States",
        "mcc": "311",
        "iso": "us",
        "country_code": "1",
        "mnc": "274"
    },
    {
        "network": "Verizon Wireless",
        "country": "United States",
        "mcc": "311",
        "iso": "us",
        "country_code": "1",
        "mnc": "390"
    },
    {
        "network": "Verizon Wireless",
        "country": "United States",
        "mcc": "310",
        "iso": "us",
        "country_code": "1",
        "mnc": "010"
    },
    {
        "network": "Verizon Wireless",
        "country": "United States",
        "mcc": "311",
        "iso": "us",
        "country_code": "1",
        "mnc": "279"
    },
    {
        "network": "Verizon Wireless",
        "country": "United States",
        "mcc": "311",
        "iso": "us",
        "country_code": "1",
        "mnc": "484"
    },
    {
        "network": "Verizon Wireless",
        "country": "United States",
        "mcc": "310",
        "iso": "us",
        "country_code": "1",
        "mnc": "910"
    },
    {
        "network": "Verizon Wireless",
        "country": "United States",
        "mcc": "311",
        "iso": "us",
        "country_code": "1",
        "mnc": "284"
    },
    {
        "network": "Verizon Wireless",
        "country": "United States",
        "mcc": "311",
        "iso": "us",
        "country_code": "1",
        "mnc": "489"
    },
    {
        "network": "Verizon Wireless",
        "country": "United States",
        "mcc": "311",
        "iso": "us",
        "country_code": "1",
        "mnc": "273"
    },
    {
        "network": "Verizon Wireless",
        "country": "United States",
        "mcc": "311",
        "iso": "us",
        "country_code": "1",
        "mnc": "289"
    },
    {
        "network": "Verizon Wireless",
        "country": "United States",
        "mcc": "310",
        "iso": "us",
        "country_code": "1",
        "mnc": "004"
    },
    {
        "network": "Verizon Wireless",
        "country": "United States",
        "mcc": "311",
        "iso": "us",
        "country_code": "1",
        "mnc": "278"
    },
    {
        "network": "Verizon Wireless",
        "country": "United States",
        "mcc": "311",
        "iso": "us",
        "country_code": "1",
        "mnc": "483"
    },
    {
        "network": "Verizon Wireless",
        "country": "United States",
        "mcc": "310",
        "iso": "us",
        "country_code": "1",
        "mnc": "890"
    },
    {
        "network": "Verizon Wireless",
        "country": "United States",
        "mcc": "311",
        "iso": "us",
        "country_code": "1",
        "mnc": "283"
    },
    {
        "network": "Verizon Wireless",
        "country": "United States",
        "mcc": "311",
        "iso": "us",
        "country_code": "1",
        "mnc": "488"
    },
    {
        "network": "Verizon Wireless",
        "country": "United States",
        "mcc": "311",
        "iso": "us",
        "country_code": "1",
        "mnc": "272"
    },
    {
        "network": "Verizon Wireless",
        "country": "United States",
        "mcc": "311",
        "iso": "us",
        "country_code": "1",
        "mnc": "288"
    },
    {
        "network": "Verizon Wireless",
        "country": "United States",
        "mcc": "311",
        "iso": "us",
        "country_code": "1",
        "mnc": "277"
    },
    {
        "network": "Verizon Wireless",
        "country": "United States",
        "mcc": "311",
        "iso": "us",
        "country_code": "1",
        "mnc": "482"
    },
    {
        "network": "Verizon Wireless",
        "country": "United States",
        "mcc": "310",
        "iso": "us",
        "country_code": "1",
        "mnc": "590"
    },
    {
        "network": "Verizon Wireless",
        "country": "United States",
        "mcc": "311",
        "iso": "us",
        "country_code": "1",
        "mnc": "282"
    },
    {
        "network": "Verizon Wireless",
        "country": "United States",
        "mcc": "311",
        "iso": "us",
        "country_code": "1",
        "mnc": "487"
    },
    {
        "network": "Verizon Wireless",
        "country": "United States",
        "mcc": "311",
        "iso": "us",
        "country_code": "1",
        "mnc": "271"
    },
    {
        "network": "Verizon Wireless",
        "country": "United States",
        "mcc": "311",
        "iso": "us",
        "country_code": "1",
        "mnc": "287"
    },
    {
        "network": "Verizon Wireless",
        "country": "United States",
        "mcc": "311",
        "iso": "us",
        "country_code": "1",
        "mnc": "276"
    },
    {
        "network": "Verizon Wireless",
        "country": "United States",
        "mcc": "311",
        "iso": "us",
        "country_code": "1",
        "mnc": "481"
    },
    {
        "network": "Verizon Wireless",
        "country": "United States",
        "mcc": "310",
        "iso": "us",
        "country_code": "1",
        "mnc": "013"
    },
    {
        "network": "Verizon Wireless",
        "country": "United States",
        "mcc": "311",
        "iso": "us",
        "country_code": "1",
        "mnc": "281"
    },
    {
        "network": "Verizon Wireless",
        "country": "United States",
        "mcc": "311",
        "iso": "us",
        "country_code": "1",
        "mnc": "486"
    },
    {
        "network": "Verizon Wireless",
        "country": "United States",
        "mcc": "311",
        "iso": "us",
        "country_code": "1",
        "mnc": "270"
    },
    {
        "network": "Verizon Wireless",
        "country": "United States",
        "mcc": "311",
        "iso": "us",
        "country_code": "1",
        "mnc": "286"
    },
    {
        "network": "Verizon Wireless",
        "country": "United States",
        "mcc": "311",
        "iso": "us",
        "country_code": "1",
        "mnc": "275"
    },
    {
        "network": "Verizon Wireless",
        "country": "United States",
        "mcc": "311",
        "iso": "us",
        "country_code": "1",
        "mnc": "480"
    },
    {
        "network": "Cellular Network Partnership LLC",
        "country": "United States",
        "mcc": "310",
        "iso": "us",
        "country_code": "1",
        "mnc": "360"
    },
    {
        "network": "Cellular Network Partnership LLC",
        "country": "United States",
        "mcc": "312",
        "iso": "us",
        "country_code": "1",
        "mnc": "280"
    },
    {
        "network": "Cellular Network Partnership LLC",
        "country": "United States",
        "mcc": "312",
        "iso": "us",
        "country_code": "1",
        "mnc": "270"
    },
    {
        "network": "",
        "country": "United States",
        "mcc": "311",
        "iso": "us",
        "country_code": "1",
        "mnc": "190"
    },
    {
        "network": "",
        "country": "United States",
        "mcc": "310",
        "iso": "us",
        "country_code": "1",
        "mnc": "030"
    },
    {
        "network": "Choice Phone LLC",
        "country": "United States",
        "mcc": "311",
        "iso": "us",
        "country_code": "1",
        "mnc": "120"
    },
    {
        "network": "Choice Phone LLC",
        "country": "United States",
        "mcc": "310",
        "iso": "us",
        "country_code": "1",
        "mnc": "480"
    },
    {
        "network": "",
        "country": "United States",
        "mcc": "310",
        "iso": "us",
        "country_code": "1",
        "mnc": "630"
    },
    {
        "network": "Cincinnati Bell Wireless LLC",
        "country": "United States",
        "mcc": "310",
        "iso": "us",
        "country_code": "1",
        "mnc": "420"
    },
    {
        "network": "Cingular Wireless",
        "country": "United States",
        "mcc": "310",
        "iso": "us",
        "country_code": "1",
        "mnc": "180"
    },
    {
        "network": "Coleman County Telco /Trans TX",
        "country": "United States",
        "mcc": "310",
        "iso": "us",
        "country_code": "1",
        "mnc": "620"
    },
    {
        "network": "",
        "country": "United States",
        "mcc": "311",
        "iso": "us",
        "country_code": "1",
        "mnc": "040"
    },
    {
        "network": "Consolidated Telcom",
        "country": "United States",
        "mcc": "310",
        "iso": "us",
        "country_code": "1",
        "mnc": "06"
    },
    {
        "network": "Consolidated Telcom",
        "country": "United States",
        "mcc": "310",
        "iso": "us",
        "country_code": "1",
        "mnc": "60"
    },
    {
        "network": "",
        "country": "United States",
        "mcc": "310",
        "iso": "us",
        "country_code": "1",
        "mnc": "26"
    },
    {
        "network": "",
        "country": "United States",
        "mcc": "312",
        "iso": "us",
        "country_code": "1",
        "mnc": "380"
    },
    {
        "network": "",
        "country": "United States",
        "mcc": "310",
        "iso": "us",
        "country_code": "1",
        "mnc": "930"
    },
    {
        "network": "",
        "country": "United States",
        "mcc": "311",
        "iso": "us",
        "country_code": "1",
        "mnc": "240"
    },
    {
        "network": "",
        "country": "United States",
        "mcc": "310",
        "iso": "us",
        "country_code": "1",
        "mnc": "080"
    },
    {
        "network": "Cross Valliant Cellular Partnership",
        "country": "United States",
        "mcc": "310",
        "iso": "us",
        "country_code": "1",
        "mnc": "700"
    },
    {
        "network": "Cross Wireless Telephone Co.",
        "country": "United States",
        "mcc": "312",
        "iso": "us",
        "country_code": "1",
        "mnc": "030"
    },
    {
        "network": "Cross Wireless Telephone Co.",
        "country": "United States",
        "mcc": "311",
        "iso": "us",
        "country_code": "1",
        "mnc": "140"
    },
    {
        "network": "",
        "country": "United States",
        "mcc": "311",
        "iso": "us",
        "country_code": "1",
        "mnc": "520"
    },
    {
        "network": "Custer Telephone Cooperative Inc.",
        "country": "United States",
        "mcc": "312",
        "iso": "us",
        "country_code": "1",
        "mnc": "040"
    },
    {
        "network": "Dobson Cellular Systems",
        "country": "United States",
        "mcc": "310",
        "iso": "us",
        "country_code": "1",
        "mnc": "440"
    },
    {
        "network": "E.N.M.R. Telephone Coop.",
        "country": "United States",
        "mcc": "310",
        "iso": "us",
        "country_code": "1",
        "mnc": "990"
    },
    {
        "network": "East Kentucky Network LLC",
        "country": "United States",
        "mcc": "312",
        "iso": "us",
        "country_code": "1",
        "mnc": "130"
    },
    {
        "network": "East Kentucky Network LLC",
        "country": "United States",
        "mcc": "312",
        "iso": "us",
        "country_code": "1",
        "mnc": "120"
    },
    {
        "network": "East Kentucky Network LLC",
        "country": "United States",
        "mcc": "310",
        "iso": "us",
        "country_code": "1",
        "mnc": "750"
    },
    {
        "network": "Edge Wireless LLC",
        "country": "United States",
        "mcc": "310",
        "iso": "us",
        "country_code": "1",
        "mnc": "090"
    },
    {
        "network": "Elkhart TelCo. / Epic Touch Co.",
        "country": "United States",
        "mcc": "310",
        "iso": "us",
        "country_code": "1",
        "mnc": "610"
    },
    {
        "network": "",
        "country": "United States",
        "mcc": "311",
        "iso": "us",
        "country_code": "1",
        "mnc": "210"
    },
    {
        "network": "Farmers",
        "country": "United States",
        "mcc": "311",
        "iso": "us",
        "country_code": "1",
        "mnc": "311"
    },
    {
        "network": "Fisher Wireless Services Inc.",
        "country": "United States",
        "mcc": "311",
        "iso": "us",
        "country_code": "1",
        "mnc": "460"
    },
    {
        "network": "GCI Communication Corp.",
        "country": "United States",
        "mcc": "311",
        "iso": "us",
        "country_code": "1",
        "mnc": "370"
    },
    {
        "network": "GCI Communication Corp.",
        "country": "United States",
        "mcc": "310",
        "iso": "us",
        "country_code": "1",
        "mnc": "430"
    },
    {
        "network": "Get Mobile Inc.",
        "country": "United States",
        "mcc": "310",
        "iso": "us",
        "country_code": "1",
        "mnc": "920"
    },
    {
        "network": "",
        "country": "United States",
        "mcc": "310",
        "iso": "us",
        "country_code": "1",
        "mnc": "970"
    },
    {
        "network": "Illinois Valley Cellular RSA 2 Partnership",
        "country": "United States",
        "mcc": "311",
        "iso": "us",
        "country_code": "1",
        "mnc": "340"
    },
    {
        "network": "",
        "country": "United States",
        "mcc": "311",
        "iso": "us",
        "country_code": "1",
        "mnc": "030"
    },
    {
        "network": "Iowa RSA No. 2 Limited Partnership",
        "country": "United States",
        "mcc": "312",
        "iso": "us",
        "country_code": "1",
        "mnc": "170"
    },
    {
        "network": "Iowa RSA No. 2 Limited Partnership",
        "country": "United States",
        "mcc": "311",
        "iso": "us",
        "country_code": "1",
        "mnc": "410"
    },
    {
        "network": "Iowa Wireless Services LLC",
        "country": "United States",
        "mcc": "310",
        "iso": "us",
        "country_code": "1",
        "mnc": "770"
    },
    {
        "network": "Jasper",
        "country": "United States",
        "mcc": "310",
        "iso": "us",
        "country_code": "1",
        "mnc": "650"
    },
    {
        "network": "Kaplan Telephone Company Inc.",
        "country": "United States",
        "mcc": "310",
        "iso": "us",
        "country_code": "1",
        "mnc": "870"
    },
    {
        "network": "Keystone Wireless LLC",
        "country": "United States",
        "mcc": "310",
        "iso": "us",
        "country_code": "1",
        "mnc": "690"
    },
    {
        "network": "Keystone Wireless LLC",
        "country": "United States",
        "mcc": "312",
        "iso": "us",
        "country_code": "1",
        "mnc": "180"
    },
    {
        "network": "Lamar County Cellular",
        "country": "United States",
        "mcc": "311",
        "iso": "us",
        "country_code": "1",
        "mnc": "310"
    },
    {
        "network": "Leap Wireless International Inc.",
        "country": "United States",
        "mcc": "310",
        "iso": "us",
        "country_code": "1",
        "mnc": "016"
    },
    {
        "network": "",
        "country": "United States",
        "mcc": "311",
        "iso": "us",
        "country_code": "1",
        "mnc": "090"
    },
    {
        "network": "Matanuska Tel. Assn. Inc.",
        "country": "United States",
        "mcc": "310",
        "iso": "us",
        "country_code": "1",
        "mnc": "040"
    },
    {
        "network": "Message Express Co. / Airlink PCS",
        "country": "United States",
        "mcc": "310",
        "iso": "us",
        "country_code": "1",
        "mnc": "780"
    },
    {
        "network": "",
        "country": "United States",
        "mcc": "311",
        "iso": "us",
        "country_code": "1",
        "mnc": "660"
    },
    {
        "network": "Michigan Wireless LLC",
        "country": "United States",
        "mcc": "311",
        "iso": "us",
        "country_code": "1",
        "mnc": "330"
    },
    {
        "network": "",
        "country": "United States",
        "mcc": "311",
        "iso": "us",
        "country_code": "1",
        "mnc": "000"
    },
    {
        "network": "Minnesota South. Wirel. Co. / Hickory",
        "country": "United States",
        "mcc": "310",
        "iso": "us",
        "country_code": "1",
        "mnc": "400"
    },
    {
        "network": "Missouri RSA No 5 Partnership",
        "country": "United States",
        "mcc": "312",
        "iso": "us",
        "country_code": "1",
        "mnc": "010"
    },
    {
        "network": "Missouri RSA No 5 Partnership",
        "country": "United States",
        "mcc": "311",
        "iso": "us",
        "country_code": "1",
        "mnc": "920"
    },
    {
        "network": "Missouri RSA No 5 Partnership",
        "country": "United States",
        "mcc": "311",
        "iso": "us",
        "country_code": "1",
        "mnc": "020"
    },
    {
        "network": "Missouri RSA No 5 Partnership",
        "country": "United States",
        "mcc": "311",
        "iso": "us",
        "country_code": "1",
        "mnc": "010"
    },
    {
        "network": "Missouri RSA No 5 Partnership",
        "country": "United States",
        "mcc": "312",
        "iso": "us",
        "country_code": "1",
        "mnc": "220"
    },
    {
        "network": "Mohave Cellular LP",
        "country": "United States",
        "mcc": "310",
        "iso": "us",
        "country_code": "1",
        "mnc": "350"
    },
    {
        "network": "MTPCS LLC",
        "country": "United States",
        "mcc": "310",
        "iso": "us",
        "country_code": "1",
        "mnc": "570"
    },
    {
        "network": "NEP Cellcorp Inc.",
        "country": "United States",
        "mcc": "310",
        "iso": "us",
        "country_code": "1",
        "mnc": "290"
    },
    {
        "network": "Nevada Wireless LLC",
        "country": "United States",
        "mcc": "310",
        "iso": "us",
        "country_code": "1",
        "mnc": "34"
    },
    {
        "network": "",
        "country": "United States",
        "mcc": "311",
        "iso": "us",
        "country_code": "1",
        "mnc": "380"
    },
    {
        "network": "New-Cell Inc.",
        "country": "United States",
        "mcc": "310",
        "iso": "us",
        "country_code": "1",
        "mnc": "600"
    },
    {
        "network": "",
        "country": "United States",
        "mcc": "311",
        "iso": "us",
        "country_code": "1",
        "mnc": "100"
    },
    {
        "network": "Nexus Communications Inc.",
        "country": "United States",
        "mcc": "311",
        "iso": "us",
        "country_code": "1",
        "mnc": "300"
    },
    {
        "network": "North Carolina RSA 3 Cellular Tel. Co.",
        "country": "United States",
        "mcc": "310",
        "iso": "us",
        "country_code": "1",
        "mnc": "130"
    },
    {
        "network": "North Dakota Network Company",
        "country": "United States",
        "mcc": "312",
        "iso": "us",
        "country_code": "1",
        "mnc": "230"
    },
    {
        "network": "North Dakota Network Company",
        "country": "United States",
        "mcc": "311",
        "iso": "us",
        "country_code": "1",
        "mnc": "610"
    },
    {
        "network": "Northeast Colorado Cellular Inc.",
        "country": "United States",
        "mcc": "310",
        "iso": "us",
        "country_code": "1",
        "mnc": "450"
    },
    {
        "network": "Northeast Wireless Networks LLC",
        "country": "United States",
        "mcc": "311",
        "iso": "us",
        "country_code": "1",
        "mnc": "710"
    },
    {
        "network": "Northstar",
        "country": "United States",
        "mcc": "310",
        "iso": "us",
        "country_code": "1",
        "mnc": "670"
    },
    {
        "network": "Northstar",
        "country": "United States",
        "mcc": "310",
        "iso": "us",
        "country_code": "1",
        "mnc": "011"
    },
    {
        "network": "Northwest Missouri Cellular Limited Partnership",
        "country": "United States",
        "mcc": "311",
        "iso": "us",
        "country_code": "1",
        "mnc": "420"
    },
    {
        "network": "",
        "country": "United States",
        "mcc": "310",
        "iso": "us",
        "country_code": "1",
        "mnc": "540"
    },
    {
        "network": "Panhandle Telephone Cooperative Inc.",
        "country": "United States",
        "mcc": "310",
        "iso": "us",
        "country_code": "1",
        "mnc": "760"
    },
    {
        "network": "PCS ONE",
        "country": "United States",
        "mcc": "310",
        "iso": "us",
        "country_code": "1",
        "mnc": "580"
    },
    {
        "network": "PetroCom",
        "country": "United States",
        "mcc": "311",
        "iso": "us",
        "country_code": "1",
        "mnc": "170"
    },
    {
        "network": "Pine Belt Cellular, Inc.",
        "country": "United States",
        "mcc": "311",
        "iso": "us",
        "country_code": "1",
        "mnc": "670"
    },
    {
        "network": "",
        "country": "United States",
        "mcc": "311",
        "iso": "us",
        "country_code": "1",
        "mnc": "080"
    },
    {
        "network": "",
        "country": "United States",
        "mcc": "310",
        "iso": "us",
        "country_code": "1",
        "mnc": "790"
    },
    {
        "network": "Plateau Telecommunications Inc.",
        "country": "United States",
        "mcc": "310",
        "iso": "us",
        "country_code": "1",
        "mnc": "100"
    },
    {
        "network": "Poka Lambro Telco Ltd.",
        "country": "United States",
        "mcc": "310",
        "iso": "us",
        "country_code": "1",
        "mnc": "940"
    },
    {
        "network": "",
        "country": "United States",
        "mcc": "311",
        "iso": "us",
        "country_code": "1",
        "mnc": "540"
    },
    {
        "network": "",
        "country": "United States",
        "mcc": "311",
        "iso": "us",
        "country_code": "1",
        "mnc": "730"
    },
    {
        "network": "Public Service Cellular Inc.",
        "country": "United States",
        "mcc": "310",
        "iso": "us",
        "country_code": "1",
        "mnc": "500"
    },
    {
        "network": "RSA 1 Limited Partnership",
        "country": "United States",
        "mcc": "312",
        "iso": "us",
        "country_code": "1",
        "mnc": "160"
    },
    {
        "network": "RSA 1 Limited Partnership",
        "country": "United States",
        "mcc": "311",
        "iso": "us",
        "country_code": "1",
        "mnc": "430"
    },
    {
        "network": "Sagebrush Cellular Inc.",
        "country": "United States",
        "mcc": "311",
        "iso": "us",
        "country_code": "1",
        "mnc": "350"
    },
    {
        "network": "",
        "country": "United States",
        "mcc": "311",
        "iso": "us",
        "country_code": "1",
        "mnc": "910"
    },
    {
        "network": "SIMMETRY",
        "country": "United States",
        "mcc": "310",
        "iso": "us",
        "country_code": "1",
        "mnc": "46"
    },
    {
        "network": "SLO Cellular Inc / Cellular One of San Luis",
        "country": "United States",
        "mcc": "311",
        "iso": "us",
        "country_code": "1",
        "mnc": "260"
    },
    {
        "network": "Smith Bagley Inc.",
        "country": "United States",
        "mcc": "310",
        "iso": "us",
        "country_code": "1",
        "mnc": "320"
    },
    {
        "network": "Unknown",
        "country": "United States",
        "mcc": "310",
        "iso": "us",
        "country_code": "1",
        "mnc": "15"
    },
    {
        "network": "Southern Communications Services Inc.",
        "country": "United States",
        "mcc": "316",
        "iso": "us",
        "country_code": "1",
        "mnc": "011"
    },
    {
        "network": "Sprint Spectrum",
        "country": "United States",
        "mcc": "312",
        "iso": "us",
        "country_code": "1",
        "mnc": "530"
    },
    {
        "network": "Sprint Spectrum",
        "country": "United States",
        "mcc": "310",
        "iso": "us",
        "country_code": "1",
        "mnc": "120"
    },
    {
        "network": "Sprint Spectrum",
        "country": "United States",
        "mcc": "316",
        "iso": "us",
        "country_code": "1",
        "mnc": "010"
    },
    {
        "network": "Sprint Spectrum",
        "country": "United States",
        "mcc": "312",
        "iso": "us",
        "country_code": "1",
        "mnc": "190"
    },
    {
        "network": "Sprint Spectrum",
        "country": "United States",
        "mcc": "311",
        "iso": "us",
        "country_code": "1",
        "mnc": "880"
    },
    {
        "network": "Sprint Spectrum",
        "country": "United States",
        "mcc": "311",
        "iso": "us",
        "country_code": "1",
        "mnc": "870"
    },
    {
        "network": "Sprint Spectrum",
        "country": "United States",
        "mcc": "311",
        "iso": "us",
        "country_code": "1",
        "mnc": "490"
    },
    {
        "network": "T-Mobile",
        "country": "United States",
        "mcc": "310",
        "iso": "us",
        "country_code": "1",
        "mnc": "160"
    },
    {
        "network": "T-Mobile",
        "country": "United States",
        "mcc": "310",
        "iso": "us",
        "country_code": "1",
        "mnc": "240"
    },
    {
        "network": "T-Mobile",
        "country": "United States",
        "mcc": "310",
        "iso": "us",
        "country_code": "1",
        "mnc": "660"
    },
    {
        "network": "T-Mobile",
        "country": "United States",
        "mcc": "310",
        "iso": "us",
        "country_code": "1",
        "mnc": "230"
    },
    {
        "network": "T-Mobile",
        "country": "United States",
        "mcc": "310",
        "iso": "us",
        "country_code": "1",
        "mnc": "31"
    },
    {
        "network": "T-Mobile",
        "country": "United States",
        "mcc": "310",
        "iso": "us",
        "country_code": "1",
        "mnc": "220"
    },
    {
        "network": "T-Mobile",
        "country": "United States",
        "mcc": "310",
        "iso": "us",
        "country_code": "1",
        "mnc": "270"
    },
    {
        "network": "T-Mobile",
        "country": "United States",
        "mcc": "310",
        "iso": "us",
        "country_code": "1",
        "mnc": "210"
    },
    {
        "network": "T-Mobile",
        "country": "United States",
        "mcc": "310",
        "iso": "us",
        "country_code": "1",
        "mnc": "260"
    },
    {
        "network": "T-Mobile",
        "country": "United States",
        "mcc": "310",
        "iso": "us",
        "country_code": "1",
        "mnc": "200"
    },
    {
        "network": "T-Mobile",
        "country": "United States",
        "mcc": "310",
        "iso": "us",
        "country_code": "1",
        "mnc": "250"
    },
    {
        "network": "T-Mobile",
        "country": "United States",
        "mcc": "310",
        "iso": "us",
        "country_code": "1",
        "mnc": "800"
    },
    {
        "network": "T-Mobile",
        "country": "United States",
        "mcc": "310",
        "iso": "us",
        "country_code": "1",
        "mnc": "300"
    },
    {
        "network": "T-Mobile",
        "country": "United States",
        "mcc": "310",
        "iso": "us",
        "country_code": "1",
        "mnc": "280"
    },
    {
        "network": "T-Mobile",
        "country": "United States",
        "mcc": "310",
        "iso": "us",
        "country_code": "1",
        "mnc": "330"
    },
    {
        "network": "T-Mobile",
        "country": "United States",
        "mcc": "310",
        "iso": "us",
        "country_code": "1",
        "mnc": "310"
    },
    {
        "network": "",
        "country": "United States",
        "mcc": "311",
        "iso": "us",
        "country_code": "1",
        "mnc": "740"
    },
    {
        "network": "Telemetrix Inc.",
        "country": "United States",
        "mcc": "310",
        "iso": "us",
        "country_code": "1",
        "mnc": "740"
    },
    {
        "network": "Testing",
        "country": "United States",
        "mcc": "310",
        "iso": "us",
        "country_code": "1",
        "mnc": "14"
    },
    {
        "network": "Unknown",
        "country": "United States",
        "mcc": "310",
        "iso": "us",
        "country_code": "1",
        "mnc": "950"
    },
    {
        "network": "Texas RSA 15B2 Limited Partnership",
        "country": "United States",
        "mcc": "310",
        "iso": "us",
        "country_code": "1",
        "mnc": "860"
    },
    {
        "network": "Thumb Cellular Limited Partnership",
        "country": "United States",
        "mcc": "311",
        "iso": "us",
        "country_code": "1",
        "mnc": "050"
    },
    {
        "network": "Thumb Cellular Limited Partnership",
        "country": "United States",
        "mcc": "311",
        "iso": "us",
        "country_code": "1",
        "mnc": "830"
    },
    {
        "network": "TMP Corporation",
        "country": "United States",
        "mcc": "310",
        "iso": "us",
        "country_code": "1",
        "mnc": "460"
    },
    {
        "network": "Triton PCS",
        "country": "United States",
        "mcc": "310",
        "iso": "us",
        "country_code": "1",
        "mnc": "490"
    },
    {
        "network": "Uintah Basin Electronics Telecommunications Inc.",
        "country": "United States",
        "mcc": "312",
        "iso": "us",
        "country_code": "1",
        "mnc": "290"
    },
    {
        "network": "Uintah Basin Electronics Telecommunications Inc.",
        "country": "United States",
        "mcc": "311",
        "iso": "us",
        "country_code": "1",
        "mnc": "860"
    },
    {
        "network": "Uintah Basin Electronics Telecommunications Inc.",
        "country": "United States",
        "mcc": "310",
        "iso": "us",
        "country_code": "1",
        "mnc": "960"
    },
    {
        "network": "Union Telephone Co.",
        "country": "United States",
        "mcc": "310",
        "iso": "us",
        "country_code": "1",
        "mnc": "020"
    },
    {
        "network": "United States Cellular Corp.",
        "country": "United States",
        "mcc": "311",
        "iso": "us",
        "country_code": "1",
        "mnc": "220"
    },
    {
        "network": "United States Cellular Corp.",
        "country": "United States",
        "mcc": "310",
        "iso": "us",
        "country_code": "1",
        "mnc": "730"
    },
    {
        "network": "United Wireless Communications Inc.",
        "country": "United States",
        "mcc": "311",
        "iso": "us",
        "country_code": "1",
        "mnc": "650"
    },
    {
        "network": "USA 3650 AT&T",
        "country": "United States",
        "mcc": "310",
        "iso": "us",
        "country_code": "1",
        "mnc": "38"
    },
    {
        "network": "VeriSign",
        "country": "United States",
        "mcc": "310",
        "iso": "us",
        "country_code": "1",
        "mnc": "520"
    },
    {
        "network": "Unknown",
        "country": "United States",
        "mcc": "310",
        "iso": "us",
        "country_code": "1",
        "mnc": "003"
    },
    {
        "network": "Unknown",
        "country": "United States",
        "mcc": "310",
        "iso": "us",
        "country_code": "1",
        "mnc": "23"
    },
    {
        "network": "Unknown",
        "country": "United States",
        "mcc": "310",
        "iso": "us",
        "country_code": "1",
        "mnc": "24"
    },
    {
        "network": "Unknown",
        "country": "United States",
        "mcc": "310",
        "iso": "us",
        "country_code": "1",
        "mnc": "25"
    },
    {
        "network": "West Virginia Wireless",
        "country": "United States",
        "mcc": "310",
        "iso": "us",
        "country_code": "1",
        "mnc": "530"
    },
    {
        "network": "Unknown",
        "country": "United States",
        "mcc": "310",
        "iso": "us",
        "country_code": "1",
        "mnc": "26"
    },
    {
        "network": "Westlink Communications, LLC",
        "country": "United States",
        "mcc": "310",
        "iso": "us",
        "country_code": "1",
        "mnc": "340"
    },
    {
        "network": "",
        "country": "United States",
        "mcc": "311",
        "iso": "us",
        "country_code": "1",
        "mnc": "150"
    },
    {
        "network": "Wisconsin RSA #7 Limited Partnership",
        "country": "United States",
        "mcc": "311",
        "iso": "us",
        "country_code": "1",
        "mnc": "070"
    },
    {
        "network": "Yorkville Telephone Cooperative",
        "country": "United States",
        "mcc": "310",
        "iso": "us",
        "country_code": "1",
        "mnc": "390"
    },
    {
        "network": "Ancel/Antel",
        "country": "Uruguay",
        "mcc": "748",
        "iso": "uy",
        "country_code": "598",
        "mnc": "03"
    },
    {
        "network": "Ancel/Antel",
        "country": "Uruguay",
        "mcc": "748",
        "iso": "uy",
        "country_code": "598",
        "mnc": "01"
    },
    {
        "network": "Claro/AM Wireless",
        "country": "Uruguay",
        "mcc": "748",
        "iso": "uy",
        "country_code": "598",
        "mnc": "10"
    },
    {
        "network": "MOVISTAR",
        "country": "Uruguay",
        "mcc": "748",
        "iso": "uy",
        "country_code": "598",
        "mnc": "07"
    },
    {
        "network": "Bee Line/Unitel",
        "country": "Uzbekistan",
        "mcc": "434",
        "iso": "uz",
        "country_code": "998",
        "mnc": "04"
    },
    {
        "network": "Buztel",
        "country": "Uzbekistan",
        "mcc": "434",
        "iso": "uz",
        "country_code": "998",
        "mnc": "01"
    },
    {
        "network": "MTS/Uzdunrobita",
        "country": "Uzbekistan",
        "mcc": "434",
        "iso": "uz",
        "country_code": "998",
        "mnc": "07"
    },
    {
        "network": "Ucell/Coscom",
        "country": "Uzbekistan",
        "mcc": "434",
        "iso": "uz",
        "country_code": "998",
        "mnc": "05"
    },
    {
        "network": "Uzmacom",
        "country": "Uzbekistan",
        "mcc": "434",
        "iso": "uz",
        "country_code": "998",
        "mnc": "02"
    },
    {
        "network": "DigiCel",
        "country": "Vanuatu",
        "mcc": "541",
        "iso": "vu",
        "country_code": "678",
        "mnc": "05"
    },
    {
        "network": "SMILE",
        "country": "Vanuatu",
        "mcc": "541",
        "iso": "vu",
        "country_code": "678",
        "mnc": "01"
    },
    {
        "network": "DigiTel C.A.",
        "country": "Venezuela",
        "mcc": "734",
        "iso": "ve",
        "country_code": "58",
        "mnc": "03"
    },
    {
        "network": "DigiTel C.A.",
        "country": "Venezuela",
        "mcc": "734",
        "iso": "ve",
        "country_code": "58",
        "mnc": "02"
    },
    {
        "network": "DigiTel C.A.",
        "country": "Venezuela",
        "mcc": "734",
        "iso": "ve",
        "country_code": "58",
        "mnc": "01"
    },
    {
        "network": "Movilnet C.A. ",
        "country": "Venezuela",
        "mcc": "734",
        "iso": "ve",
        "country_code": "58",
        "mnc": "06"
    },
    {
        "network": "Movistar/TelCel",
        "country": "Venezuela",
        "mcc": "734",
        "iso": "ve",
        "country_code": "58",
        "mnc": "04"
    },
    {
        "network": "Beeline",
        "country": "Viet Nam",
        "mcc": "452",
        "iso": "vn",
        "country_code": "84",
        "mnc": "07"
    },
    {
        "network": "Mobifone",
        "country": "Viet Nam",
        "mcc": "452",
        "iso": "vn",
        "country_code": "84",
        "mnc": "01"
    },
    {
        "network": "S-Fone/Telecom",
        "country": "Viet Nam",
        "mcc": "452",
        "iso": "vn",
        "country_code": "84",
        "mnc": "03"
    },
    {
        "network": "VietnaMobile",
        "country": "Viet Nam",
        "mcc": "452",
        "iso": "vn",
        "country_code": "84",
        "mnc": "05"
    },
    {
        "network": "Viettel Mobile",
        "country": "Viet Nam",
        "mcc": "452",
        "iso": "vn",
        "country_code": "84",
        "mnc": "08"
    },
    {
        "network": "Viettel Mobile",
        "country": "Viet Nam",
        "mcc": "452",
        "iso": "vn",
        "country_code": "84",
        "mnc": "06"
    },
    {
        "network": "Viettel Mobile",
        "country": "Viet Nam",
        "mcc": "452",
        "iso": "vn",
        "country_code": "84",
        "mnc": "04"
    },
    {
        "network": "Vinaphone",
        "country": "Viet Nam",
        "mcc": "452",
        "iso": "vn",
        "country_code": "84",
        "mnc": "02"
    },
    {
        "network": "Digicel",
        "country": "Virgin Islands, U.S.",
        "mcc": "376",
        "iso": "vi",
        "country_code": "1340",
        "mnc": "50"
    },
    {
        "network": "HITS/Y Unitel",
        "country": "Yemen",
        "mcc": "421",
        "iso": "ye",
        "country_code": "967",
        "mnc": "04"
    },
    {
        "network": "MTN/Spacetel",
        "country": "Yemen",
        "mcc": "421",
        "iso": "ye",
        "country_code": "967",
        "mnc": "02"
    },
    {
        "network": "Sabaphone",
        "country": "Yemen",
        "mcc": "421",
        "iso": "ye",
        "country_code": "967",
        "mnc": "01"
    },
    {
        "network": "Yemen Mob. CDMA",
        "country": "Yemen",
        "mcc": "421",
        "iso": "ye",
        "country_code": "967",
        "mnc": "03"
    },
    {
        "network": "Zamtel/Cell Z/MTS",
        "country": "Zambia",
        "mcc": "645",
        "iso": "zm",
        "country_code": "260",
        "mnc": "03"
    },
    {
        "network": "MTN/Telecel",
        "country": "Zambia",
        "mcc": "645",
        "iso": "zm",
        "country_code": "260",
        "mnc": "02"
    },
    {
        "network": "Airtel/Zain/Celtel",
        "country": "Zambia",
        "mcc": "645",
        "iso": "zm",
        "country_code": "260",
        "mnc": "01"
    },
    {
        "network": "Econet",
        "country": "Zimbabwe",
        "mcc": "648",
        "iso": "zw",
        "country_code": "263",
        "mnc": "04"
    },
    {
        "network": "Net One",
        "country": "Zimbabwe",
        "mcc": "648",
        "iso": "zw",
        "country_code": "263",
        "mnc": "01"
    },
    {
        "network": "Telecel",
        "country": "Zimbabwe",
        "mcc": "648",
        "iso": "zw",
        "country_code": "263",
        "mnc": "03"
    }
];
//# sourceMappingURL=network-provider.js.map