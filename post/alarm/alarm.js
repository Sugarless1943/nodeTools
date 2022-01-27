const As = require("../../api")

let valveIds = [
    {
        "label": "行政楼-101",
        "filter": "6e6793e2-ed05-40de-904c-08c19653f0ba",
        "deviceName": "行政楼-调节阀_101"
    },
    {
        "label": "行政楼-110",
        "filter": "5d3395ac-8875-4499-b576-1d36ea70a843",
        "deviceName": "行政楼-调节阀_110"
    },
    {
        "label": "行政楼-112",
        "filter": "b8a8ba02-ee0c-4007-a55b-32aac268f535",
        "deviceName": "行政楼-调节阀_112"
    },
    {
        "label": "行政楼-114",
        "filter": "70efad20-059d-4d2f-982e-8d77c8f2a041",
        "deviceName": "行政楼-调节阀_114"
    },
    {
        "label": "行政楼-1层过道",
        "filter": "2eda0ec0-e011-4dd3-84df-8bcabb8c530f",
        "deviceName": "行政楼-调节阀_1层过道"
    },
    {
        "label": "行政楼-201",
        "filter": "c50c3566-ee78-46f7-93d8-6815581c0492",
        "deviceName": "行政楼-调节阀_201"
    },
    {
        "label": "行政楼-212",
        "filter": "bfec5bfc-9822-4672-b581-7fb8163d3718",
        "deviceName": "行政楼-调节阀_212"
    },
    {
        "label": "行政楼-214",
        "filter": "86177777-c52a-45fe-83a5-3bd0c879dac4",
        "deviceName": "行政楼-调节阀_214"
    },
    {
        "label": "行政楼-216",
        "filter": "716d417c-0a58-4047-9005-bd7f422cec8e",
        "deviceName": "行政楼-调节阀_216"
    },
    {
        "label": "行政楼-2层过道",
        "filter": "72a4f928-d666-4de3-b13b-1edbb119ac42",
        "deviceName": "行政楼-调节阀_2层过道"
    },
    {
        "label": "行政楼-301",
        "filter": "1bf93d16-0fc3-481d-8299-ce4d6a7b453a",
        "deviceName": "行政楼-调节阀_301"
    },
    {
        "label": "行政楼-313",
        "filter": "42d236c6-68b0-410f-8654-adee42d529d2",
        "deviceName": "行政楼-调节阀_313"
    },
    {
        "label": "行政楼-314",
        "filter": "100643be-dbc9-43f7-b9a0-c8239ffa72a4",
        "deviceName": "行政楼-调节阀_314"
    },
    {
        "label": "行政楼-316",
        "filter": "f756cfda-d5f9-4a1e-946a-3ef7c2348eee",
        "deviceName": "行政楼-调节阀_316"
    },
    {
        "label": "行政楼-3层过道",
        "filter": "06967e12-dacd-43a3-93ce-51c1b897f388",
        "deviceName": "行政楼-调节阀_3层过道"
    },
    {
        "label": "行政楼-401",
        "filter": "50facc01-37f3-437a-837b-eaf0622cb07d",
        "deviceName": "行政楼-调节阀_401"
    },
    {
        "label": "行政楼-409",
        "filter": "067908e7-e040-469d-9b33-4062632b8851",
        "deviceName": "行政楼-调节阀_409"
    },
    {
        "label": "行政楼-410",
        "filter": "7b272881-d1a8-4b2a-8957-2e77f329fb87",
        "deviceName": "行政楼-调节阀_410"
    },
    {
        "label": "行政楼-412",
        "filter": "ef341d0b-f96f-40c9-a9e1-da96d62746b6",
        "deviceName": "行政楼-调节阀_412"
    },
    {
        "label": "行政楼-4层过道",
        "filter": "741f0783-d04c-4153-8bdd-e269b7c8e1e5",
        "deviceName": "行政楼-调节阀_4层过道"
    },
    {
        "label": "综合楼2-101",
        "filter": "47566fe1-0ba6-4285-9b57-a6c5b8342f99",
        "deviceName": "综合楼2-调节阀_101"
    },
    {
        "label": "综合楼2-104",
        "filter": "46096ae1-e823-4091-a5eb-c948c4ec5682",
        "deviceName": "综合楼2-调节阀_104"
    },
    {
        "label": "综合楼2-107",
        "filter": "f46b6a20-e160-4487-8ca3-60054b01b480",
        "deviceName": "综合楼2-调节阀_107"
    },
    {
        "label": "综合楼2-114",
        "filter": "4a20f5d1-90bd-483a-8e11-15e0f1ec5e8e",
        "deviceName": "综合楼2-调节阀_114"
    },
    {
        "label": "综合楼2-127",
        "filter": "0c77b09a-dd51-43e1-9952-7ae26d20a409",
        "deviceName": "综合楼2-调节阀_127"
    },
    {
        "label": "综合楼2-137",
        "filter": "9e024e72-718b-4dac-933a-31e7aad56558",
        "deviceName": "综合楼2-调节阀_137"
    },
    {
        "label": "综合楼2-138",
        "filter": "45f6c992-13a9-4252-9514-fc66835020d3",
        "deviceName": "综合楼2-调节阀_138"
    },
    {
        "label": "综合楼2-208",
        "filter": "9a773ed1-8aec-4c50-8368-bc9f2ccb789c",
        "deviceName": "综合楼2-调节阀_208"
    },
    {
        "label": "综合楼2-214",
        "filter": "27bf4b2d-50cf-4aa9-8e12-8c85f19bf022",
        "deviceName": "综合楼2-调节阀_214"
    },
    {
        "label": "综合楼2-216",
        "filter": "b0ac1f5c-ab6d-419a-8ced-f6f04038263e",
        "deviceName": "综合楼2-调节阀_216"
    },
    {
        "label": "综合楼2-233",
        "filter": "f9bfab1f-a5f9-4bd7-9007-9dc33b6b4541",
        "deviceName": "综合楼2-调节阀_233"
    },
    {
        "label": "综合楼2-239",
        "filter": "e738eafe-9239-44d6-9220-1fb81d7b99de",
        "deviceName": "综合楼2-调节阀_239"
    },
    {
        "label": "综合楼2-244",
        "filter": "4cc13b01-7d17-499d-9180-2474182518f8",
        "deviceName": "综合楼2-调节阀_244"
    },
    {
        "label": "综合楼2-307",
        "filter": "55016136-f10f-45bd-bfa5-d724b1ec2057",
        "deviceName": "综合楼2-调节阀_307"
    },
    {
        "label": "综合楼2-314",
        "filter": "24140356-03a9-4497-8f80-cfda2c9f02aa",
        "deviceName": "综合楼2-调节阀_314"
    },
    {
        "label": "综合楼2-316",
        "filter": "854e6e82-7d19-4399-9831-8bed1ed8e21c",
        "deviceName": "综合楼2-调节阀_316"
    },
    {
        "label": "综合楼2-327",
        "filter": "0c8af72d-7cbd-41ef-ba05-0760a06a4d12",
        "deviceName": "综合楼2-调节阀_327"
    },
    {
        "label": "综合楼2-334",
        "filter": "9bd737a7-bca8-4d48-b220-b09a2e8c294f",
        "deviceName": "综合楼2-调节阀_334"
    },
    {
        "label": "综合楼2-339",
        "filter": "9b5b84c1-4df7-4a30-b257-cc5f6167d2be",
        "deviceName": "综合楼2-调节阀_339"
    },
    {
        "label": "综合楼2-343",
        "filter": "2cc04ade-1fab-41b1-94c9-f28090db327e",
        "deviceName": "综合楼2-调节阀_343"
    },
    {
        "label": "综合楼2-408",
        "filter": "9533156c-6d68-4d15-a6fb-93de704a5f57",
        "deviceName": "综合楼2-调节阀_408"
    },
    {
        "label": "综合楼2-414",
        "filter": "99fc7369-39b1-4d28-b23d-f721dbc62f39",
        "deviceName": "综合楼2-调节阀_414"
    },
    {
        "label": "综合楼2-416",
        "filter": "bc93c148-3828-4e78-b021-fdd22f689f98",
        "deviceName": "综合楼2-调节阀_416"
    },
    {
        "label": "综合楼2-433",
        "filter": "3524b07e-b003-4e2a-aa3d-bc1518eb3ef5",
        "deviceName": "综合楼2-调节阀_433"
    },
    {
        "label": "综合楼2-439",
        "filter": "f3cbd0ea-b4b8-40c7-b245-966027483dc0",
        "deviceName": "综合楼2-调节阀_439"
    },
    {
        "label": "综合楼2-444",
        "filter": "8e4227f8-acae-4a66-b6df-6adee7b3193b",
        "deviceName": "综合楼2-调节阀_444"
    },
    {
        "label": "综合楼2-448",
        "filter": "4838a47d-dbce-46fa-b6d1-63ff79b43486",
        "deviceName": "综合楼2-调节阀_448"
    },
    {
        "label": "综合楼2-501",
        "filter": "36fffc4f-4b25-4f22-b5c3-3dfd3f8bbb0b",
        "deviceName": "综合楼2-调节阀_501"
    },
    {
        "label": "综合楼2-505",
        "filter": "50cc3d78-fec1-421b-900a-60bd2a0ba457",
        "deviceName": "综合楼2-调节阀_505"
    },
    {
        "label": "综合楼2-506",
        "filter": "19b5f663-8630-4a97-a7c1-e9131276712a",
        "deviceName": "综合楼2-调节阀_506"
    },
    {
        "label": "综合楼2-510",
        "filter": "3dd693ee-0654-4255-a7c4-4edbc3a5479e",
        "deviceName": "综合楼2-调节阀_510"
    },
    {
        "label": "综合楼2-517",
        "filter": "4abf2e5d-71e2-49b5-9c3d-c03f0e05c1ab",
        "deviceName": "综合楼2-调节阀_517"
    },
    {
        "label": "综合楼2-1层水房",
        "filter": "2c915a42-0eda-425f-b1ec-04c50b4f07f3",
        "deviceName": "综合楼2-调节阀_1层水房"
    },
    {
        "label": "综合楼2-1层东走廊",
        "filter": "8496995c-142e-48c6-999c-93bdc4ee41d7",
        "deviceName": "综合楼2-调节阀_1层东走廊"
    },
    {
        "label": "综合楼2-2层水房",
        "filter": "ca2f5175-256a-4605-950d-d500855c3a23",
        "deviceName": "综合楼2-调节阀_2层水房"
    },
    {
        "label": "综合楼2-2层东走廊",
        "filter": "4fcfa1ee-473d-4162-bb2c-118230de7719",
        "deviceName": "综合楼2-调节阀_2层东走廊"
    },
    {
        "label": "综合楼2-3层水房",
        "filter": "9540bb7c-704d-475a-a8d5-495c39a6ce08",
        "deviceName": "综合楼2-调节阀_3层水房"
    },
    {
        "label": "综合楼2-3层东走廊",
        "filter": "d8d61d61-789c-4ee6-b8ba-f11d3dfde1df",
        "deviceName": "综合楼2-调节阀_3层东走廊"
    },
    {
        "label": "综合楼2-4层水房",
        "filter": "99f4cf17-8097-4afb-aae7-d41f1507c5d8",
        "deviceName": "综合楼2-调节阀_5层水房"
    },
    {
        "label": "综合楼2-4层东走廊",
        "filter": "d7b8df09-dcc5-497a-99b9-66ba32f8aec2",
        "deviceName": "综合楼2-调节阀_5层东走廊"
    },
    {
        "label": "实验楼-102",
        "filter": "8c9a57d8-e263-41c0-a8fb-203f0490642e",
        "deviceName": "实验楼-调节阀_102"
    },
    {
        "label": "实验楼-103",
        "filter": "7d7b46ac-7953-477b-aeea-3e7583b4b259",
        "deviceName": "实验楼-调节阀_103"
    },
    {
        "label": "实验楼-105",
        "filter": "62687352-8b1a-4a5e-8b8a-28dad869374f",
        "deviceName": "实验楼-调节阀_105"
    },
    {
        "label": "实验楼-107",
        "filter": "3e90b134-f955-49c4-bd41-fa5710cc47fb",
        "deviceName": "实验楼-调节阀_107"
    },
    {
        "label": "实验楼-110",
        "filter": "43ec37d2-7b3c-4b69-aeab-d43329afabdf",
        "deviceName": "实验楼-调节阀_110"
    },
    {
        "label": "实验楼-111",
        "filter": "20a1916e-053f-40ed-b693-2851b1be9f4a",
        "deviceName": "实验楼-调节阀_111"
    },
    {
        "label": "实验楼-115",
        "filter": "8176614d-61dc-42cc-add4-0c9bb01ecc12",
        "deviceName": "实验楼-调节阀_115"
    },
    {
        "label": "实验楼-118",
        "filter": "09aa938e-54eb-4fa3-8382-7dbecc15ae8b",
        "deviceName": "实验楼-调节阀_118"
    },
    {
        "label": "实验楼-119",
        "filter": "450f8c25-2019-48a5-9bd0-14a5f95d6d0b",
        "deviceName": "实验楼-调节阀_119"
    },
    {
        "label": "实验楼-203",
        "filter": "8a75aa77-9973-4868-a217-da261c6e1104",
        "deviceName": "实验楼-调节阀_203"
    },
    {
        "label": "实验楼-204",
        "filter": "9a0f25be-744f-45f0-98f7-0a7e5b2b1d0a",
        "deviceName": "实验楼-调节阀_204"
    },
    {
        "label": "实验楼-205",
        "filter": "b95b41c9-3caa-496f-8584-a334039ae7c1",
        "deviceName": "实验楼-调节阀_205"
    },
    {
        "label": "实验楼-210",
        "filter": "97eb5a92-e107-41d8-acd0-de985dca9494",
        "deviceName": "实验楼-调节阀_210"
    },
    {
        "label": "实验楼-211",
        "filter": "4366fdee-eeeb-486b-ad23-ee226b2f5832",
        "deviceName": "实验楼-调节阀_211"
    },
    {
        "label": "实验楼-212",
        "filter": "dec94490-9622-4f3d-bb1f-eaf740b1dd0d",
        "deviceName": "实验楼-调节阀_212"
    },
    {
        "label": "实验楼-215",
        "filter": "dc19f760-94f5-4c76-acfc-69765b9eaabc",
        "deviceName": "实验楼-调节阀_215"
    },
    {
        "label": "实验楼-219",
        "filter": "6e64e33a-30d4-4596-a71a-aba5e2eb62ae",
        "deviceName": "实验楼-调节阀_219"
    },
    {
        "label": "实验楼-220",
        "filter": "65c305d3-20bc-4f4d-9792-4e6d6f153b83",
        "deviceName": "实验楼-调节阀_220"
    },
    {
        "label": "实验楼-303",
        "filter": "f6c251be-661b-4b29-bb13-2bbb42be8c9e",
        "deviceName": "实验楼-调节阀_303"
    },
    {
        "label": "实验楼-304",
        "filter": "a712ebe0-62ab-45a6-8164-9c67651d5273",
        "deviceName": "实验楼-调节阀_304"
    },
    {
        "label": "实验楼-305",
        "filter": "a921eee2-7570-4a22-b7a9-8024bc49483c",
        "deviceName": "实验楼-调节阀_305"
    },
    {
        "label": "实验楼-310",
        "filter": "ca7ba584-d2f0-4078-87c7-c3be28f13cf2",
        "deviceName": "实验楼-调节阀_310"
    },
    {
        "label": "实验楼-311",
        "filter": "634d563f-eaba-41c8-ac86-6c1c85073d95",
        "deviceName": "实验楼-调节阀_311"
    },
    {
        "label": "实验楼-312",
        "filter": "74cf52d8-c6a4-4eb5-a898-1d01009f1531",
        "deviceName": "实验楼-调节阀_312"
    },
    {
        "label": "实验楼-315",
        "filter": "2bfa55b5-fa62-4964-a6e7-c70a1c0733a0",
        "deviceName": "实验楼-调节阀_315"
    },
    {
        "label": "实验楼-319",
        "filter": "daed3aec-9fb6-4dc4-8b43-60d2942e2b9d",
        "deviceName": "实验楼-调节阀_319"
    },
    {
        "label": "实验楼-403",
        "filter": "5d7a30b6-4380-4591-a6a4-a8b85f5f6996",
        "deviceName": "实验楼-调节阀_403"
    },
    {
        "label": "实验楼-404",
        "filter": "c0877787-eab0-47eb-b7ba-e5a8a3a257cd",
        "deviceName": "实验楼-调节阀_404"
    },
    {
        "label": "实验楼-405",
        "filter": "4a984e2b-6855-46cb-bcfa-f84beab3b409",
        "deviceName": "实验楼-调节阀_405"
    },
    {
        "label": "实验楼-410",
        "filter": "05be6d0e-b606-4f40-933b-d6ab90c36f2b",
        "deviceName": "实验楼-调节阀_410"
    },
    {
        "label": "实验楼-411",
        "filter": "63dcd8b1-fff9-4ae3-beb7-0127dd1c9f2b",
        "deviceName": "实验楼-调节阀_411"
    },
    {
        "label": "实验楼-412",
        "filter": "a2ab9c95-28ee-4690-bab0-674c1142dd7b",
        "deviceName": "实验楼-调节阀_412"
    },
    {
        "label": "实验楼-419",
        "filter": "5ab95dfb-495f-4dae-969f-826e0613904c",
        "deviceName": "实验楼-调节阀_419"
    },
    {
        "label": "实验楼-420",
        "filter": "9e04673c-915d-4d1f-9a1d-be5dcde682cc",
        "deviceName": "实验楼-调节阀_420"
    },
    {
        "label": "实验楼-503",
        "filter": "8388125f-782a-4b8c-9348-e918a8d60862",
        "deviceName": "实验楼-调节阀_503"
    },
    {
        "label": "实验楼-504",
        "filter": "39bcad4c-a7da-42f4-83a4-29f415eff0aa",
        "deviceName": "实验楼-调节阀_504"
    },
    {
        "label": "实验楼-505",
        "filter": "3b2325d6-9183-46b5-bec4-3fa57943b2fa",
        "deviceName": "实验楼-调节阀_505"
    },
    {
        "label": "实验楼-510",
        "filter": "6f6b196f-70c4-4ceb-b080-7013d2e19cf5",
        "deviceName": "实验楼-调节阀_510"
    },
    {
        "label": "实验楼-511",
        "filter": "a9501438-8ef5-4516-93b7-e15d42f9c567",
        "deviceName": "实验楼-调节阀_511"
    },
    {
        "label": "实验楼-1-女卫2",
        "filter": "0b17508c-367f-40b2-89ac-76e236f76185",
        "deviceName": "实验楼-调节阀_女卫1-2"
    },
    {
        "label": "实验楼-1-女卫1",
        "filter": "8d3e9f9d-cc32-4ead-ac56-39a2376df967",
        "deviceName": "实验楼-调节阀_女卫1-1"
    },
    {
        "label": "实验楼-2-女卫1",
        "filter": "ca9a07e0-17dd-4c76-b95a-a5969ef388ed",
        "deviceName": "实验楼-调节阀_女卫2-1"
    },
    {
        "label": "实验楼-2-女卫2",
        "filter": "5eb2f828-a09e-4022-9a45-5abffeb27e4f",
        "deviceName": "实验楼-调节阀_女卫2-2"
    },
    {
        "label": "实验楼-3-女卫1",
        "filter": "662116b9-2c6f-4d2b-acdc-bb53dd6a0ef4",
        "deviceName": "实验楼-调节阀_女卫3-1"
    },
    {
        "label": "实验楼-3-女卫2",
        "filter": "433e6cbc-2a24-43df-a773-f389cc36d034",
        "deviceName": "实验楼-调节阀_女卫3-2"
    },
    {
        "label": "实验楼-4-女卫1",
        "filter": "811d0d34-2192-4c5a-af46-cdc6a2336989",
        "deviceName": "实验楼-调节阀_女卫4-1"
    },
    {
        "label": "实验楼-4-女卫2",
        "filter": "ff23d586-d8cf-494b-9b0c-5a940f1f4188",
        "deviceName": "实验楼-调节阀_女卫4-2"
    },
    {
        "label": "实验楼-5-女卫1",
        "filter": "b1cbbed5-c763-443c-954f-f08aef59ad07",
        "deviceName": "实验楼-调节阀_女卫5-1"
    },
    {
        "label": "介子楼-103",
        "filter": "03a16029-455d-4ce6-9a17-3606e9f53efc",
        "deviceName": "介子楼-调节阀_103"
    },
    {
        "label": "介子楼-104",
        "filter": "53b0d6be-fe28-45f4-91aa-4f0edb5fe11c",
        "deviceName": "介子楼-调节阀_104"
    },
    {
        "label": "介子楼-107",
        "filter": "36d64755-af4a-4f2e-901e-0dd8bd06586c",
        "deviceName": "介子楼-调节阀_107"
    },
    {
        "label": "介子楼-108",
        "filter": "76bcc925-606a-4425-8b62-6bad1aeea1da",
        "deviceName": "介子楼-调节阀_108"
    },
    {
        "label": "介子楼-203",
        "filter": "a10640ed-d269-4fbd-865b-98fb774395d4",
        "deviceName": "介子楼-调节阀_203"
    },
    {
        "label": "介子楼-204",
        "filter": "b32c51fd-786c-4f6d-8523-8b15a16d54ba",
        "deviceName": "介子楼-调节阀_204"
    },
    {
        "label": "介子楼-207",
        "filter": "8feb7051-7352-4cd0-babd-a6c278aebdf0",
        "deviceName": "介子楼-调节阀_207"
    },
    {
        "label": "介子楼-208",
        "filter": "1fa0cc49-7f8f-47a0-8462-6dbe8445b171",
        "deviceName": "介子楼-调节阀_208"
    },
    {
        "label": "介子楼-303",
        "filter": "be38003d-6837-43e8-aaa0-4c7554d8331b",
        "deviceName": "介子楼-调节阀_303"
    },
    {
        "label": "介子楼-304",
        "filter": "a5f6aed9-d3c5-43ad-9d1e-11436d6573ce",
        "deviceName": "介子楼-调节阀_304"
    },
    {
        "label": "介子楼-307",
        "filter": "5cf72a5e-1999-47ef-bb3c-11b4a86f6791",
        "deviceName": "介子楼-调节阀_307"
    },
    {
        "label": "介子楼-308",
        "filter": "1f8471b3-63d5-4e21-8089-6cbeb6c4a368",
        "deviceName": "介子楼-调节阀_308"
    },
    {
        "label": "介子楼-403",
        "filter": "8c40c54b-c7e8-45ea-98f6-7abc5aecd082",
        "deviceName": "介子楼-调节阀_403"
    },
    {
        "label": "介子楼-404",
        "filter": "e32b9af1-a6cf-4b21-9981-11221fbcdfff",
        "deviceName": "介子楼-调节阀_404"
    },
    {
        "label": "介子楼-407",
        "filter": "948706a0-48b9-4760-b3a8-aff02646ed78",
        "deviceName": "介子楼-调节阀_407"
    },
    {
        "label": "介子楼-408",
        "filter": "d3e9ccc4-f857-446e-973a-a21e428b4345",
        "deviceName": "介子楼-调节阀_408"
    },
    {
        "label": "介子楼-503",
        "filter": "9f8e360a-90bd-4d5b-aa90-155e288bc0e0",
        "deviceName": "介子楼-调节阀_503"
    },
    {
        "label": "介子楼-504",
        "filter": "4b3ca620-09c5-4f20-b2d7-3c1898de95b8",
        "deviceName": "介子楼-调节阀_504"
    },
    {
        "label": "介子楼-507",
        "filter": "208170b3-11b2-4dc2-8ec9-f85d3ff7945c",
        "deviceName": "介子楼-调节阀_507"
    },
    {
        "label": "介子楼-508",
        "filter": "8b6638e6-02b7-44ae-842e-a353b4a20a62",
        "deviceName": "介子楼-调节阀_508"
    },
    {
        "label": "介子楼-1层办公室",
        "filter": "b83cbc94-4d63-4b8b-a75c-9f070f60cb1b",
        "deviceName": "介子楼-调节阀_1层办公室"
    },
    {
        "label": "介子楼-2层办公室",
        "filter": "137cc080-b92d-49c1-be4d-a5d0bdd16505",
        "deviceName": "介子楼-调节阀_2层办公室"
    },
    {
        "label": "介子楼-3层办公室",
        "filter": "983777d0-5f5b-4ab4-855f-4893f6a11872",
        "deviceName": "介子楼-调节阀_3层办公室"
    },
    {
        "label": "介子楼-4层办公室",
        "filter": "845daaf5-4c57-4e80-b836-93177b3f06cb",
        "deviceName": "介子楼-调节阀_4层办公室"
    },
    {
        "label": "介子楼-5层办公室",
        "filter": "3e66c725-e127-40c4-9963-68c9155e7d20",
        "deviceName": "介子楼-调节阀_5层办公室"
    },
    {
        "label": "介子楼-台阶教室-南3",
        "filter": "f983a829-0e2e-4c2a-9be7-aec110990e01",
        "deviceName": "介子楼-调节阀_集体教室-南3"
    },
    {
        "label": "介子楼-台阶教室-南2",
        "filter": "710d87d8-62a1-4327-88d0-3a6f25bb5caa",
        "deviceName": "介子楼-调节阀_集体教室-南2"
    },
    {
        "label": "介子楼-台阶教室-南1",
        "filter": "8ff536f0-aeb2-4544-a531-5c613eae1bc8",
        "deviceName": "介子楼-调节阀_集体教室-南1"
    },
    {
        "label": "介子楼-台阶教室-北1",
        "filter": "8299ee74-7ea3-45d1-93a0-ca748c82f212",
        "deviceName": "介子楼-调节阀_集体教室-北1"
    },
    {
        "label": "介子楼-台阶教室-北2",
        "filter": "94048e70-e70e-4b12-bff2-3db6528db33c",
        "deviceName": "介子楼-调节阀_集体教室-北2"
    },
    {
        "label": "介子楼-台阶教室-北3",
        "filter": "9684a200-683c-440d-b3dc-b9ba1a69c65e",
        "deviceName": "介子楼-调节阀_集体教室-北3"
    },
    {
        "label": "林宗楼-103",
        "filter": "9cdb1059-a21b-4251-9b04-e0d3d2c89132",
        "deviceName": "林宗楼-调节阀_103"
    },
    {
        "label": "林宗楼-104",
        "filter": "3697a65d-4cae-4aa9-af80-83d772fc7e60",
        "deviceName": "林宗楼-调节阀_104"
    },
    {
        "label": "林宗楼-107",
        "filter": "3d066180-8a12-4bcd-b2c7-2b7a222a008f",
        "deviceName": "林宗楼-调节阀_107"
    },
    {
        "label": "林宗楼-108",
        "filter": "9d6bab2a-3c92-456b-8897-5006ca97fbd3",
        "deviceName": "林宗楼-调节阀_108"
    },
    {
        "label": "林宗楼-203",
        "filter": "3f00a678-dcee-4ff2-983a-2740e1b4ee7c",
        "deviceName": "林宗楼-调节阀_203"
    },
    {
        "label": "林宗楼-204",
        "filter": "f51d3baf-c874-4c2b-a77d-1eee29c2d0dd",
        "deviceName": "林宗楼-调节阀_204"
    },
    {
        "label": "林宗楼-207",
        "filter": "1475848a-4bc2-4390-8fc5-0776912bfcad",
        "deviceName": "林宗楼-调节阀_207"
    },
    {
        "label": "林宗楼-208",
        "filter": "80ab52d9-7b4c-417b-a905-44b219e29c19",
        "deviceName": "林宗楼-调节阀_208"
    },
    {
        "label": "林宗楼-303",
        "filter": "359baa55-219f-431a-8d05-4a6d7dfc77ff",
        "deviceName": "林宗楼-调节阀_303"
    },
    {
        "label": "林宗楼-304",
        "filter": "2f806222-1241-4d63-8ad1-528e8b97990b",
        "deviceName": "林宗楼-调节阀_304"
    },
    {
        "label": "林宗楼-307",
        "filter": "5e17ec7c-d13f-4198-925d-99e4ea1abb5f",
        "deviceName": "林宗楼-调节阀_307"
    },
    {
        "label": "林宗楼-308",
        "filter": "e9a8214a-5844-4f21-8c72-b3508881f611",
        "deviceName": "林宗楼-调节阀_308"
    },
    {
        "label": "林宗楼-403",
        "filter": "b70cc452-a114-44c1-a846-a278c6d5ee73",
        "deviceName": "林宗楼-调节阀_403"
    },
    {
        "label": "林宗楼-404",
        "filter": "f75e6e2e-95d3-44e8-ac99-76b0dc12d7c6",
        "deviceName": "林宗楼-调节阀_404"
    },
    {
        "label": "林宗楼-407",
        "filter": "7066d72d-8002-4642-a5d9-013019db0b54",
        "deviceName": "林宗楼-调节阀_407"
    },
    {
        "label": "林宗楼-408",
        "filter": "99903c78-c641-4761-89b7-8d9530813a14",
        "deviceName": "林宗楼-调节阀_408"
    },
    {
        "label": "林宗楼-503",
        "filter": "8f5998f5-2495-4180-82c5-06d37ab3dfde",
        "deviceName": "林宗楼-调节阀_503"
    },
    {
        "label": "林宗楼-504",
        "filter": "d1618162-3313-4b96-bff2-152d802499a3",
        "deviceName": "林宗楼-调节阀_504"
    },
    {
        "label": "林宗楼-507",
        "filter": "8d619d24-960b-4928-b63f-d7f8dffde7f0",
        "deviceName": "林宗楼-调节阀_507"
    },
    {
        "label": "林宗楼-508",
        "filter": "d681435e-791d-473d-ac8d-400d0a029660",
        "deviceName": "林宗楼-调节阀_508"
    },
    {
        "label": "林宗楼-1层办公室",
        "filter": "38d2789a-8284-4c6d-a5fb-9c3df5218403",
        "deviceName": "林宗楼-调节阀_201"
    },
    {
        "label": "林宗楼-2层办公室",
        "filter": "38d2789a-8284-4c6d-a5fb-9c3df5218403",
        "deviceName": "林宗楼-调节阀_201"
    },
    {
        "label": "林宗楼-3层办公室",
        "filter": "9905dc02-0fa6-4e8a-8847-b19a2dc35019",
        "deviceName": "林宗楼-调节阀_301"
    },
    {
        "label": "林宗楼-4层办公室",
        "filter": "4cac9873-c6a8-4207-85fc-71a118dc9382",
        "deviceName": "林宗楼-调节阀_401"
    },
    {
        "label": "林宗楼-5层办公室",
        "filter": "44d86c2f-2121-4130-9445-fc087ec869c3",
        "deviceName": "林宗楼-调节阀_501"
    },
    {
        "label": "林宗楼-台阶教室-南3",
        "filter": "0d66d708-3c49-44c9-9e5c-ced49c95c21a",
        "deviceName": "林宗楼-调节阀_阶梯教师-南3"
    },
    {
        "label": "林宗楼-台阶教室-南2",
        "filter": "907b2666-5205-4f7c-83b8-37081f95676d",
        "deviceName": "林宗楼-调节阀_阶梯教师-南2"
    },
    {
        "label": "林宗楼-台阶教室-南1",
        "filter": "613119e5-345c-4197-b454-05ddb45bd125",
        "deviceName": "林宗楼-调节阀_阶梯教师-南1"
    },
    {
        "label": "林宗楼-台阶教室-北1",
        "filter": "28d414ae-8a37-451f-9115-50a316441b16",
        "deviceName": "林宗楼-调节阀_阶梯教师-北1"
    },
    {
        "label": "林宗楼-台阶教室-北2",
        "filter": "005bf9fe-d3b9-4baa-9d7e-03d2dce3add7",
        "deviceName": "林宗楼-调节阀_阶梯教师-北2"
    },
    {
        "label": "林宗楼-台阶教室-北3",
        "filter": "9ab792a2-fadc-417d-9ae8-7cd5d918ce0e",
        "deviceName": "林宗楼-调节阀_阶梯教师-北3"
    },
    {
        "label": "彦博楼-103",
        "filter": "50b079b8-774b-49a9-b1e2-bd527ac8bdbb",
        "deviceName": "彦博楼-调节阀_103"
    },
    {
        "label": "彦博楼-104",
        "filter": "f4946704-2c43-4367-aa2e-e0e5ea9c819c",
        "deviceName": "彦博楼-调节阀_104"
    },
    {
        "label": "彦博楼-107",
        "filter": "da059213-bd93-4c1f-b87e-df287c904295",
        "deviceName": "彦博楼-调节阀_107"
    },
    {
        "label": "彦博楼-108",
        "filter": "3f13969f-1c15-4ac9-9066-f97ca5806645",
        "deviceName": "彦博楼-调节阀_108"
    },
    {
        "label": "彦博楼-203",
        "filter": "e0b8b6cc-2bc8-4b92-aa06-3707c544f605",
        "deviceName": "彦博楼-调节阀_203"
    },
    {
        "label": "彦博楼-204",
        "filter": "3a68f09a-0e86-4279-8f28-2332704a669e",
        "deviceName": "彦博楼-调节阀_204"
    },
    {
        "label": "彦博楼-207",
        "filter": "823190d5-20df-46ea-9fc6-c9f2c4b05850",
        "deviceName": "彦博楼-调节阀_207"
    },
    {
        "label": "彦博楼-208",
        "filter": "bbe047ff-3917-4806-bc88-0689a9418bd2",
        "deviceName": "彦博楼-调节阀_208"
    },
    {
        "label": "彦博楼-303",
        "filter": "65c8e3e3-e758-4abe-9ebf-102b596dfdb7",
        "deviceName": "彦博楼-调节阀_303"
    },
    {
        "label": "彦博楼-304",
        "filter": "9dfda52c-c97f-4e37-94e7-eaae4ca47dd8",
        "deviceName": "彦博楼-调节阀_304"
    },
    {
        "label": "彦博楼-307",
        "filter": "f1a23f86-60d2-4a3f-a0e5-b350d48b571e",
        "deviceName": "彦博楼-调节阀_307"
    },
    {
        "label": "彦博楼-308",
        "filter": "77a4e3a6-440c-48cc-bf3d-ea644b91053a",
        "deviceName": "彦博楼-调节阀_308"
    },
    {
        "label": "彦博楼-403",
        "filter": "7ea83e27-2654-4e67-9742-69dc75cc01bd",
        "deviceName": "彦博楼-调节阀_403"
    },
    {
        "label": "彦博楼-404",
        "filter": "7892f5c8-d6c2-4899-90c5-8a768ac98201",
        "deviceName": "彦博楼-调节阀_404"
    },
    {
        "label": "彦博楼-407",
        "filter": "606c9ef9-7530-4636-ba41-f00e7cdb0ac2",
        "deviceName": "彦博楼-调节阀_407"
    },
    {
        "label": "彦博楼-408",
        "filter": "0ed90066-c3a2-4502-9b76-4f66f7c11e68",
        "deviceName": "彦博楼-调节阀_408"
    },
    {
        "label": "彦博楼-503",
        "filter": "13bfe90d-f311-4cc5-9dd8-61eb480c12b3",
        "deviceName": "彦博楼-调节阀_503"
    },
    {
        "label": "彦博楼-504",
        "filter": "177a78e6-1cfd-4c1f-984b-88b905eb8e47",
        "deviceName": "彦博楼-调节阀_504"
    },
    {
        "label": "彦博楼-507",
        "filter": "a865c42a-7092-4e99-b75b-34d3e1ed99c7",
        "deviceName": "彦博楼-调节阀_507"
    },
    {
        "label": "彦博楼-508",
        "filter": "64759431-8d17-4e74-8cf4-f9619821f166",
        "deviceName": "彦博楼-调节阀_508"
    },
    {
        "label": "彦博楼-1层办公室",
        "filter": "55d2a5a2-ed05-463f-88fd-84943a88577c",
        "deviceName": "彦博楼-调节阀_1层办公室"
    },
    {
        "label": "彦博楼-2层办公室",
        "filter": "8f1ccdcb-a5e3-406b-a4ea-1c665b0d50a9",
        "deviceName": "彦博楼-调节阀_2层办公室"
    },
    {
        "label": "彦博楼-3层办公室",
        "filter": "57f770ba-892f-4bac-b8cd-0e8ddfa613de",
        "deviceName": "彦博楼-调节阀_3层办公室"
    },
    {
        "label": "彦博楼-4层办公室",
        "filter": "f273ba64-516b-4a60-a962-072ea3aec63a",
        "deviceName": "彦博楼-调节阀_4层办公室"
    },
    {
        "label": "彦博楼-5层办公室",
        "filter": "8f54f7b2-b757-4ba0-897d-c6061e6a3c27",
        "deviceName": "彦博楼-调节阀_5层办公室"
    },
    {
        "label": "彦博楼-台阶教室-南3",
        "filter": "09f2d8fa-d959-4a1b-b8e7-9e13abba9b6b",
        "deviceName": "彦博楼-调节阀_集体教室-南3"
    },
    {
        "label": "彦博楼-台阶教室-南2",
        "filter": "96f12ced-351d-4a8b-8a94-7b2d140ff280",
        "deviceName": "彦博楼-调节阀_集体教室-南2"
    },
    {
        "label": "彦博楼-台阶教室-南1",
        "filter": "08940ee6-4575-4839-a3c5-d498ac133796",
        "deviceName": "彦博楼-调节阀_集体教室-南1"
    },
    {
        "label": "彦博楼-台阶教室-北1",
        "filter": "ce8c818e-f38e-4fa8-b9f5-5133ec154a24",
        "deviceName": "彦博楼-调节阀_集体教室-北1"
    },
    {
        "label": "彦博楼-台阶教室-北2",
        "filter": "262ed217-f28d-47e9-93d3-667f00e1680c",
        "deviceName": "彦博楼-调节阀_集体教室-北2"
    },
    {
        "label": "彦博楼-台阶教室-北3",
        "filter": "c6eec53d-ec26-4857-8a85-dc5e49d5c2ee",
        "deviceName": "彦博楼-调节阀_集体教室-北3"
    },
    {
        "label": "男生公寓1-103",
        "filter": "22a5db55-8f09-4b59-b1d5-747acb70b329",
        "deviceName": "男生公寓1号楼-调节阀_103"
    },
    {
        "label": "男生公寓1-108",
        "filter": "8585e5cb-a03d-4d78-9cbe-f409c4064f80",
        "deviceName": "男生公寓1号楼-调节阀_108"
    },
    {
        "label": "男生公寓1-112",
        "filter": "39f11eea-e02f-4e51-8e7a-26ab1bb7be75",
        "deviceName": "男生公寓1号楼-调节阀_112"
    },
    {
        "label": "男生公寓1-113",
        "filter": "9cca4b02-5d82-4652-b8d1-91cfaf48db59",
        "deviceName": "男生公寓1号楼-调节阀_113"
    },
    {
        "label": "男生公寓1-115",
        "filter": "8bf078dc-1bb5-42d4-9642-9cd605894a26",
        "deviceName": "男生公寓1号楼-调节阀_115"
    },
    {
        "label": "男生公寓1-116",
        "filter": "59061190-c997-4e2c-ae04-45e156830af8",
        "deviceName": "男生公寓1号楼-调节阀_116"
    },
    {
        "label": "男生公寓1-118",
        "filter": "f5a10587-17f9-4237-bb54-a7faeb85581c",
        "deviceName": "男生公寓1号楼-调节阀_118"
    },
    {
        "label": "男生公寓1-大厅1",
        "filter": "9a0bfc76-d394-4334-bb47-2c8d5a109e11",
        "deviceName": "男生公寓1号楼-调节阀_大厅1"
    },
    {
        "label": "男生公寓1-大厅2",
        "filter": "bc9b0cda-cdcf-4b50-badb-f09ad39c4085",
        "deviceName": "男生公寓1号楼-调节阀_大厅2"
    },
    {
        "label": "男生公寓1-203",
        "filter": "4cbc450c-6217-4f9f-a041-a576e47f2a06",
        "deviceName": "男生公寓1号楼-调节阀_203"
    },
    {
        "label": "男生公寓1-208",
        "filter": "eebfeec1-68d3-44f9-9cb4-3764d50af176",
        "deviceName": "男生公寓1号楼-调节阀_208"
    },
    {
        "label": "男生公寓1-217",
        "filter": "99d0c866-4860-4819-abab-4173c08edecb",
        "deviceName": "男生公寓1号楼-调节阀_217"
    },
    {
        "label": "男生公寓1-218",
        "filter": "8d64659f-7d2f-4681-920f-6cfac3c28d35",
        "deviceName": "男生公寓1号楼-调节阀_218"
    },
    {
        "label": "男生公寓1-219",
        "filter": "29a44bb1-b4c7-4229-9ee4-28c4e313ded1",
        "deviceName": "男生公寓1号楼-调节阀_219"
    },
    {
        "label": "男生公寓1-220",
        "filter": "15845b05-5a85-49ee-8457-97a1753b9a78",
        "deviceName": "男生公寓1号楼-调节阀_220"
    },
    {
        "label": "男生公寓1-222",
        "filter": "b05c2a10-894f-48e8-952e-b69445c9a4cc",
        "deviceName": "男生公寓1号楼-调节阀_222"
    },
    {
        "label": "男生公寓1-223",
        "filter": "baf57863-c7ff-46a1-a2ed-58d8f5ecf612",
        "deviceName": "男生公寓1号楼-调节阀_223"
    },
    {
        "label": "男生公寓1-225",
        "filter": "b9c0a7f0-7987-4646-a6a2-2dfb668b931d",
        "deviceName": "男生公寓1号楼-调节阀_225"
    },
    {
        "label": "男生公寓1-303",
        "filter": "3f633606-a425-4015-92c9-d339dd8eb0b5",
        "deviceName": "男生公寓1号楼-调节阀_303"
    },
    {
        "label": "男生公寓1-308",
        "filter": "b90c9776-879f-4363-8d07-a2099fec6cba",
        "deviceName": "男生公寓1号楼-调节阀_308"
    },
    {
        "label": "男生公寓1-317",
        "filter": "8514603e-dcaf-429d-8855-f65aede25e91",
        "deviceName": "男生公寓1号楼-调节阀_317"
    },
    {
        "label": "男生公寓1-318",
        "filter": "5c3ccf7f-0bb4-4aed-b0a9-87b0fa5c6581",
        "deviceName": "男生公寓1号楼-调节阀_318"
    },
    {
        "label": "男生公寓1-319",
        "filter": "441d0504-b9a0-4ff6-a644-55d1a2d1526e",
        "deviceName": "男生公寓1号楼-调节阀_319"
    },
    {
        "label": "男生公寓1-320",
        "filter": "9da04a65-1564-43c8-9a73-10739dc27458",
        "deviceName": "男生公寓1号楼-调节阀_320"
    },
    {
        "label": "男生公寓1-322",
        "filter": "f66cc5c8-12a9-4c67-b4f7-705c7a9b7c9d",
        "deviceName": "男生公寓1号楼-调节阀_322"
    },
    {
        "label": "男生公寓1-323",
        "filter": "f3338ecd-d812-4134-b741-e947358276b0",
        "deviceName": "男生公寓1号楼-调节阀_323"
    },
    {
        "label": "男生公寓1-325",
        "filter": "2c8013ad-0ae0-4dd7-a7de-db607fec8e65",
        "deviceName": "男生公寓1号楼-调节阀_325"
    },
    {
        "label": "男生公寓1-403",
        "filter": "d84fc0b0-c806-44dd-ab43-a81e79293123",
        "deviceName": "男生公寓1号楼-调节阀_403"
    },
    {
        "label": "男生公寓1-408",
        "filter": "f8eef444-0278-4efa-bf8f-b375aa7cb017",
        "deviceName": "男生公寓1号楼-调节阀_408"
    },
    {
        "label": "男生公寓1-417",
        "filter": "3934e2ab-3659-488c-8b09-9732b58b2565",
        "deviceName": "男生公寓1号楼-调节阀_417"
    },
    {
        "label": "男生公寓1-418",
        "filter": "fac9b7cc-03cf-41b2-9e37-3d9d12b0db46",
        "deviceName": "男生公寓1号楼-调节阀_418"
    },
    {
        "label": "男生公寓1-419",
        "filter": "2ffb0ea9-7fa8-4210-8879-5b224a4dd3c5",
        "deviceName": "男生公寓1号楼-调节阀_419"
    },
    {
        "label": "男生公寓1-420",
        "filter": "6c924bce-fa24-4281-b1cf-3dadc7e92d56",
        "deviceName": "男生公寓1号楼-调节阀_420"
    },
    {
        "label": "男生公寓1-422",
        "filter": "3cf64dc7-ad91-4ea0-9537-601d41ff06cd",
        "deviceName": "男生公寓1号楼-调节阀_422"
    },
    {
        "label": "男生公寓1-423",
        "filter": "f1c436a1-baea-4407-b844-2f93ebb260af",
        "deviceName": "男生公寓1号楼-调节阀_423"
    },
    {
        "label": "男生公寓1-425",
        "filter": "885637b5-9cf1-429a-a675-486df0be9c17",
        "deviceName": "男生公寓1号楼-调节阀_425"
    },
    {
        "label": "男生公寓1-503",
        "filter": "b6ae50aa-f5c0-4edf-ad77-24626f96fb6b",
        "deviceName": "男生公寓1号楼-调节阀_503"
    },
    {
        "label": "男生公寓1-508",
        "filter": "fdcd9982-4f41-4d7c-b22d-630231490927",
        "deviceName": "男生公寓1号楼-调节阀_508"
    },
    {
        "label": "男生公寓1-517",
        "filter": "a0bc47b2-9c39-43f5-8691-77b175b57619",
        "deviceName": "男生公寓1号楼-调节阀_517"
    },
    {
        "label": "男生公寓1-518",
        "filter": "9755b05c-776b-4272-bb73-3c9324eab689",
        "deviceName": "男生公寓1号楼-调节阀_518"
    },
    {
        "label": "男生公寓1-519",
        "filter": "d7c9af0d-da02-4896-abb7-1dbc7b3f2731",
        "deviceName": "男生公寓1号楼-调节阀_519"
    },
    {
        "label": "男生公寓1-520",
        "filter": "f57236dc-b435-4fd6-b72b-42092b6cdd17",
        "deviceName": "男生公寓1号楼-调节阀_520"
    },
    {
        "label": "男生公寓1-522",
        "filter": "80b229b3-26a9-4369-8d56-a540bbae3613",
        "deviceName": "男生公寓1号楼-调节阀_522"
    },
    {
        "label": "男生公寓1-523",
        "filter": "ad49e3a7-0749-4488-9a07-231f5069a0ed",
        "deviceName": "男生公寓1号楼-调节阀_523"
    },
    {
        "label": "男生公寓1-525",
        "filter": "ff3bc444-9647-4bfe-9b0a-59a2d866c1e2",
        "deviceName": "男生公寓1号楼-调节阀_525"
    },
    {
        "label": "男生公寓1-603",
        "filter": "2184562e-a66c-4394-a7d5-7e64ab0cac42",
        "deviceName": "男生公寓1号楼-调节阀_603"
    },
    {
        "label": "男生公寓1-608",
        "filter": "6e07d399-2063-43cd-8ae2-cbe5c75be397",
        "deviceName": "男生公寓1号楼-调节阀_608"
    },
    {
        "label": "男生公寓1-617",
        "filter": "c67cf865-9d43-4425-b681-9315f8783c6c",
        "deviceName": "男生公寓1号楼-调节阀_617"
    },
    {
        "label": "男生公寓1-618",
        "filter": "18d72587-5f30-44cb-b966-30095c0f4bd7",
        "deviceName": "男生公寓1号楼-调节阀_618"
    },
    {
        "label": "男生公寓1-619",
        "filter": "46d9845d-abb9-4c1f-89fd-a95effd2475a",
        "deviceName": "男生公寓1号楼-调节阀_619"
    },
    {
        "label": "男生公寓1-620",
        "filter": "8a0daa53-cd8f-40be-8235-02cc6d87d935",
        "deviceName": "男生公寓1号楼-调节阀_620"
    },
    {
        "label": "男生公寓1-622",
        "filter": "8bf0bcba-c6f4-4495-bf11-ca345840fc28",
        "deviceName": "男生公寓1号楼-调节阀_622"
    },
    {
        "label": "男生公寓1-623",
        "filter": "3d1f4673-0bf2-47f3-ad55-3ac872107cb4",
        "deviceName": "男生公寓1号楼-调节阀_623"
    },
    {
        "label": "男生公寓1-625",
        "filter": "71594e73-93aa-457f-a5f4-6d96b934cd35",
        "deviceName": "男生公寓1号楼-调节阀_625"
    },
    {
        "label": "男生公寓2-116",
        "filter": "41139505-9a43-41a9-9bd7-a0dd2d25f219",
        "deviceName": "男生公寓2号楼-调节阀_116"
    },
    {
        "label": "男生公寓2-117",
        "filter": "3e16c5ae-33ff-4140-96c4-2c8a925a2b37",
        "deviceName": "男生公寓2号楼-调节阀_117"
    },
    {
        "label": "男生公寓2-119",
        "filter": "1bb07e30-1f65-4219-8d60-3014e26d17fa",
        "deviceName": "男生公寓2号楼-调节阀_119"
    },
    {
        "label": "男生公寓2-120",
        "filter": "5a98b7fd-7546-4b61-acb8-0c6f7f800455",
        "deviceName": "男生公寓2号楼-调节阀_120"
    },
    {
        "label": "男生公寓2-122",
        "filter": "cc273d5a-be88-448c-9fb5-5cbb215e8b95",
        "deviceName": "男生公寓2号楼-调节阀_122"
    },
    {
        "label": "男生公寓2-124",
        "filter": "80c2bdbf-89f5-44d2-a393-26450765546e",
        "deviceName": "男生公寓2号楼-调节阀_124"
    },
    {
        "label": "男生公寓2-卫生间1-1",
        "filter": "72e3d428-410c-427c-a27b-3136292526c1",
        "deviceName": "男生公寓2号楼-调节阀_卫生间1-1"
    },
    {
        "label": "男生公寓2-卫生间1-2",
        "filter": "993fefd3-6d18-45b4-8726-8dfd41e913d4",
        "deviceName": "男生公寓2号楼-调节阀_卫生间1-2"
    },
    {
        "label": "男生公寓2-卫生间1-3",
        "filter": "a7ebaa39-f40e-440c-bba3-dec0eb28efd7",
        "deviceName": "男生公寓2号楼-调节阀_卫生间1-3"
    },
    {
        "label": "男生公寓2-216",
        "filter": "a504b3f8-f264-4401-a46c-b04a789d5ae4",
        "deviceName": "男生公寓2号楼-调节阀_216"
    },
    {
        "label": "男生公寓2-217",
        "filter": "381a0d88-28e1-4f2b-957d-7f893fbcc474",
        "deviceName": "男生公寓2号楼-调节阀_217"
    },
    {
        "label": "男生公寓2-220",
        "filter": "4de2a00a-ac63-41a7-8661-bd591450970d",
        "deviceName": "男生公寓2号楼-调节阀_220"
    },
    {
        "label": "男生公寓2-221",
        "filter": "016cec98-a56a-4a97-a170-be50ba55c258",
        "deviceName": "男生公寓2号楼-调节阀_221"
    },
    {
        "label": "男生公寓2-223",
        "filter": "c5fd8393-347d-45b0-a108-f3c3efb407fa",
        "deviceName": "男生公寓2号楼-调节阀_223"
    },
    {
        "label": "男生公寓2-225",
        "filter": "7b613113-55dd-4d05-bfff-ea4f9e1e871b",
        "deviceName": "男生公寓2号楼-调节阀_225"
    },
    {
        "label": "男生公寓2-卫生间2-1",
        "filter": "eee30743-489c-4d0e-87d4-0d5503ca1328",
        "deviceName": "男生公寓2号楼-调节阀_卫生间2-1"
    },
    {
        "label": "男生公寓2-卫生间2-2",
        "filter": "039cbcc0-660d-4490-861b-2e57d29b08e0",
        "deviceName": "男生公寓2号楼-调节阀_卫生间2-2"
    },
    {
        "label": "男生公寓2-卫生间2-3",
        "filter": "c2a540f3-0c69-40e0-81e0-b1d66d2834e4",
        "deviceName": "男生公寓2号楼-调节阀_卫生间2-3"
    },
    {
        "label": "男生公寓2-316",
        "filter": "7b2fff34-06fe-4c34-8f10-72bcfddb7dec",
        "deviceName": "男生公寓2号楼-调节阀_316"
    },
    {
        "label": "男生公寓2-317",
        "filter": "65f7b4d7-db8b-46db-851b-c503c7f636a2",
        "deviceName": "男生公寓2号楼-调节阀_317"
    },
    {
        "label": "男生公寓2-320",
        "filter": "e26681d7-45fd-4c4c-a138-78de727dd6f0",
        "deviceName": "男生公寓2号楼-调节阀_320"
    },
    {
        "label": "男生公寓2-321",
        "filter": "b4d35507-9955-49a0-bc41-d6ebdfeb54c2",
        "deviceName": "男生公寓2号楼-调节阀_321"
    },
    {
        "label": "男生公寓2-323",
        "filter": "e607d0e6-70f8-44a5-ad81-2bd079421f5b",
        "deviceName": "男生公寓2号楼-调节阀_323"
    },
    {
        "label": "男生公寓2-325",
        "filter": "2f276233-2de7-4308-93c9-56ca840cec86",
        "deviceName": "男生公寓2号楼-调节阀_325"
    },
    {
        "label": "男生公寓2-卫生间3-1",
        "filter": "b37de7e3-643e-444c-a4e5-99cd07504a8f",
        "deviceName": "男生公寓2号楼-调节阀_卫生间3-1"
    },
    {
        "label": "男生公寓2-卫生间3-2",
        "filter": "1b39cdef-f5b8-45de-89e7-08e191713d22",
        "deviceName": "男生公寓2号楼-调节阀_卫生间3-2"
    },
    {
        "label": "男生公寓2-卫生间3-3",
        "filter": "607dc72f-2ba6-4323-b6f0-721e5d9be744",
        "deviceName": "男生公寓2号楼-调节阀_卫生间3-3"
    },
    {
        "label": "男生公寓2-416",
        "filter": "114b1173-6171-4006-913d-b13073944ac6",
        "deviceName": "男生公寓2号楼-调节阀_416"
    },
    {
        "label": "男生公寓2-417",
        "filter": "fe663415-fd0c-4e02-b5bc-c02b752f731f",
        "deviceName": "男生公寓2号楼-调节阀_417"
    },
    {
        "label": "男生公寓2-420",
        "filter": "71dff7d8-6427-4a97-89df-6ce9b273d8f3",
        "deviceName": "男生公寓2号楼-调节阀_420"
    },
    {
        "label": "男生公寓2-421",
        "filter": "4bb26dc1-29e8-41b1-a545-06ded26cf29d",
        "deviceName": "男生公寓2号楼-调节阀_421"
    },
    {
        "label": "男生公寓2-423",
        "filter": "a11dd760-02ef-417d-a357-aa16e2c30465",
        "deviceName": "男生公寓2号楼-调节阀_423"
    },
    {
        "label": "男生公寓2-425",
        "filter": "c6f1d558-e8a6-412a-a368-ce2e28247edc",
        "deviceName": "男生公寓2号楼-调节阀_425"
    },
    {
        "label": "男生公寓2-卫生间4-1",
        "filter": "534cb564-dc0e-42b5-a75f-ef4e7a380edb",
        "deviceName": "男生公寓2号楼-调节阀_卫生间4-1"
    },
    {
        "label": "男生公寓2-卫生间4-2",
        "filter": "32f858cd-c0bf-4a8c-ad45-512a2a3c2aa5",
        "deviceName": "男生公寓2号楼-调节阀_卫生间4-2"
    },
    {
        "label": "男生公寓2-卫生间4-3",
        "filter": "4909ec69-2b3f-40ee-be33-64c91daee858",
        "deviceName": "男生公寓2号楼-调节阀_卫生间4-3"
    },
    {
        "label": "男生公寓2-516",
        "filter": "214fa25e-f089-4625-8faf-a1b46e4634a9",
        "deviceName": "男生公寓2号楼-调节阀_516"
    },
    {
        "label": "男生公寓2-517",
        "filter": "39e8ddba-3517-4a58-bf36-3e81a2e323b3",
        "deviceName": "男生公寓2号楼-调节阀_517"
    },
    {
        "label": "男生公寓2-520",
        "filter": "5ec32ef5-27bd-481c-ac7c-dd9af2900bb2",
        "deviceName": "男生公寓2号楼-调节阀_520"
    },
    {
        "label": "男生公寓2-521",
        "filter": "4fa62c99-3210-4c6d-ae42-771d881558a8",
        "deviceName": "男生公寓2号楼-调节阀_521"
    },
    {
        "label": "男生公寓2-523",
        "filter": "8a7afcdb-0b37-4fdf-8e37-fe8ae92cf9e2",
        "deviceName": "男生公寓2号楼-调节阀_523"
    },
    {
        "label": "男生公寓2-525",
        "filter": "fa6f9049-e7ce-4e60-b8ae-a324a35eb3bf",
        "deviceName": "男生公寓2号楼-调节阀_525"
    },
    {
        "label": "男生公寓2-卫生间5-1",
        "filter": "4f0b2e15-1928-4f94-985d-39e3a429981f",
        "deviceName": "男生公寓2号楼-调节阀_卫生间5-1"
    },
    {
        "label": "男生公寓2-卫生间5-2",
        "filter": "6c142efc-b1e1-4c0e-9140-5f05b5eadd43",
        "deviceName": "男生公寓2号楼-调节阀_卫生间5-2"
    },
    {
        "label": "男生公寓2-卫生间5-3",
        "filter": "beec57f2-0798-434f-8b59-68e0029ca462",
        "deviceName": "男生公寓2号楼-调节阀_卫生间5-3"
    },
    {
        "label": "男生公寓2-616",
        "filter": "adf1a9f8-3aa4-4889-8bbe-c0e9e91b45f3",
        "deviceName": "男生公寓2号楼-调节阀_616"
    },
    {
        "label": "男生公寓2-617",
        "filter": "c9b290f7-ae08-4aad-872f-846fdafa1f20",
        "deviceName": "男生公寓2号楼-调节阀_617"
    },
    {
        "label": "男生公寓2-620",
        "filter": "cde88a0a-7a20-49a0-a40d-df301953cffc",
        "deviceName": "男生公寓2号楼-调节阀_620"
    },
    {
        "label": "男生公寓2-621",
        "filter": "175db456-60da-42b1-a9f3-f4bb09b2250f",
        "deviceName": "男生公寓2号楼-调节阀_621"
    },
    {
        "label": "男生公寓2-623",
        "filter": "54889ca1-ba20-4a9b-944b-3a4cbd946487",
        "deviceName": "男生公寓2号楼-调节阀_623"
    },
    {
        "label": "男生公寓2-625",
        "filter": "115bad93-fb90-4e42-b173-ef2e7d2a03a6",
        "deviceName": "男生公寓2号楼-调节阀_625"
    },
    {
        "label": "男生公寓2-卫生间6-1",
        "filter": "b1dd642f-e607-4401-8b4f-698596f9c671",
        "deviceName": "男生公寓2号楼-调节阀_卫生间6-1"
    },
    {
        "label": "男生公寓2-卫生间6-2",
        "filter": "afe92873-0dd1-4d25-8a44-0db3738e4920",
        "deviceName": "男生公寓2号楼-调节阀_卫生间6-3"
    },
    {
        "label": "男生公寓2-卫生间6-3",
        "filter": "20df135d-b83f-4955-8adf-382df6299579",
        "deviceName": "男生公寓2号楼-调节阀_卫生间6-2"
    },
    {
        "label": "女生公寓1-103",
        "filter": "3ee210cc-4fff-4e9e-95d2-f80fd8b3a0cc",
        "deviceName": "女生公寓1号楼-调节阀_103"
    },
    {
        "label": "女生公寓1-105",
        "filter": "d448eb80-7f96-4ac7-af2c-b45814096d83",
        "deviceName": "女生公寓1号楼-调节阀_105"
    },
    {
        "label": "女生公寓1-120",
        "filter": "c0b21d26-65dd-4bde-b9e0-6c01ece9cb16",
        "deviceName": "女生公寓1号楼-调节阀_120"
    },
    {
        "label": "女生公寓1-123",
        "filter": "f7136875-6da0-4168-837f-b8b71cbb25de",
        "deviceName": "女生公寓1号楼-调节阀_123"
    },
    {
        "label": "女生公寓1-西过道",
        "filter": "1d356b32-4dd0-4625-a887-7ea9bab8d37c",
        "deviceName": "女生公寓1号楼-调节阀_中间过道"
    },
    {
        "label": "女生公寓1-中过道",
        "filter": "a23abf7b-b727-43b6-9282-24c46c974a68",
        "deviceName": "女生公寓1号楼-调节阀_西侧过道"
    },
    {
        "label": "女生公寓1-203",
        "filter": "f7842166-b837-4389-8869-3fe25090c12b",
        "deviceName": "女生公寓1号楼-调节阀_203"
    },
    {
        "label": "女生公寓1-204",
        "filter": "35ae14ae-6105-42ed-939f-d7c127f3b039",
        "deviceName": "女生公寓1号楼-调节阀_204"
    },
    {
        "label": "女生公寓1-217",
        "filter": "c8ebfe59-0041-4b27-ae80-4769898e97a0",
        "deviceName": "女生公寓1号楼-调节阀_217"
    },
    {
        "label": "女生公寓1-218",
        "filter": "9feeac47-2d4c-49a9-a480-1b29a95b601b",
        "deviceName": "女生公寓1号楼-调节阀_218"
    },
    {
        "label": "女生公寓1-221",
        "filter": "6951b00c-2a18-488c-9e6f-7c82cf71716e",
        "deviceName": "女生公寓1号楼-调节阀_221"
    },
    {
        "label": "女生公寓1-303",
        "filter": "aaa35dc9-699b-4576-9bc7-88054393ff31",
        "deviceName": "女生公寓1号楼-调节阀_303"
    },
    {
        "label": "女生公寓1-304",
        "filter": "672b836a-a41c-47dc-a9db-eac72200a8ea",
        "deviceName": "女生公寓1号楼-调节阀_304"
    },
    {
        "label": "女生公寓1-317",
        "filter": "802b938f-ed52-49f4-bd65-dbbadcd497ef",
        "deviceName": "女生公寓1号楼-调节阀_317"
    },
    {
        "label": "女生公寓1-318",
        "filter": "cc86868b-656c-4ecd-82b7-c11dd2fc3d24",
        "deviceName": "女生公寓1号楼-调节阀_318"
    },
    {
        "label": "女生公寓1-321",
        "filter": "1353a981-5cad-4cf4-adae-6e06071a8510",
        "deviceName": "女生公寓1号楼-调节阀_321"
    },
    {
        "label": "女生公寓1-322",
        "filter": "f9424b5d-bacc-4f0a-88b6-cca88e1eac80",
        "deviceName": "女生公寓1号楼-调节阀_322"
    },
    {
        "label": "女生公寓1-403",
        "filter": "5ca0cbc4-2cfb-449c-b5a4-52db587fad18",
        "deviceName": "女生公寓1号楼-调节阀_403"
    },
    {
        "label": "女生公寓1-404",
        "filter": "0e4c754f-2576-4dc0-ba15-1de463e397aa",
        "deviceName": "女生公寓1号楼-调节阀_404"
    },
    {
        "label": "女生公寓1-417",
        "filter": "1c80209c-c8d6-45fa-b7c4-28a446b6a399",
        "deviceName": "女生公寓1号楼-调节阀_417"
    },
    {
        "label": "女生公寓1-418",
        "filter": "dd671557-c67d-4bc9-967b-e1d50d9eeca8",
        "deviceName": "女生公寓1号楼-调节阀_418"
    },
    {
        "label": "女生公寓1-421",
        "filter": "4e4506ee-2df1-4a0d-a827-725d805dcba6",
        "deviceName": "女生公寓1号楼-调节阀_421"
    },
    {
        "label": "女生公寓1-422",
        "filter": "e6b2754b-a63a-4d24-ab21-ab856fc2d921",
        "deviceName": "女生公寓1号楼-调节阀_422"
    },
    {
        "label": "女生公寓1-503",
        "filter": "80c214d6-6063-4329-86ff-a63d633d9f85",
        "deviceName": "女生公寓1号楼-调节阀_503"
    },
    {
        "label": "女生公寓1-504",
        "filter": "9ff365b6-dd52-49a5-9623-b8402629929e",
        "deviceName": "女生公寓1号楼-调节阀_504"
    },
    {
        "label": "女生公寓1-517",
        "filter": "5fbf536c-153c-4c60-a426-d4674e56a7b0",
        "deviceName": "女生公寓1号楼-调节阀_517"
    },
    {
        "label": "女生公寓1-518",
        "filter": "c47cf3ea-5782-495b-9cdc-b88a15b8c52e",
        "deviceName": "女生公寓1号楼-调节阀_518"
    },
    {
        "label": "女生公寓1-521",
        "filter": "2773eebb-699a-4dba-8876-76715673074b",
        "deviceName": "女生公寓1号楼-调节阀_521"
    },
    {
        "label": "女生公寓1-522",
        "filter": "58cd16f5-a0ad-42f8-bbd9-18fbc3473a9a",
        "deviceName": "女生公寓1号楼-调节阀_522"
    },
    {
        "label": "女生公寓1-603",
        "filter": "c2e197fc-611a-4227-8a35-2a63666478c2",
        "deviceName": "女生公寓1号楼-调节阀_603"
    },
    {
        "label": "女生公寓1-604",
        "filter": "42f37957-4299-47d7-82df-de841216e9e6",
        "deviceName": "女生公寓1号楼-调节阀_604"
    },
    {
        "label": "女生公寓1-617",
        "filter": "cf633ba4-7c03-46f8-9ddf-6eb34c667fac",
        "deviceName": "女生公寓1号楼-调节阀_617"
    },
    {
        "label": "女生公寓1-618",
        "filter": "294d3744-1baa-4b49-8209-32a2c7321b64",
        "deviceName": "女生公寓1号楼-调节阀_618"
    },
    {
        "label": "女生公寓1-621",
        "filter": "baf9559a-9b34-4272-9af2-2720940c134d",
        "deviceName": "女生公寓1号楼-调节阀_621"
    },
    {
        "label": "女生公寓1-622",
        "filter": "47ce482d-9312-4a21-9189-3d5a49f2e0af",
        "deviceName": "女生公寓1号楼-调节阀_622"
    },
    {
        "label": "女生公寓2-117",
        "filter": "d8a68454-236a-4f91-aeb4-bf55adb20d4e",
        "deviceName": "女生公寓2号楼-调节阀_117"
    },
    {
        "label": "女生公寓2-118",
        "filter": "0489f591-011f-4297-80ab-2ac88a962474",
        "deviceName": "女生公寓2号楼-调节阀_118"
    },
    {
        "label": "女生公寓2-121",
        "filter": "fabd7a6e-f686-40e8-8a8a-774a4b1ea856",
        "deviceName": "女生公寓2号楼-调节阀_121"
    },
    {
        "label": "女生公寓2-122",
        "filter": "23529943-314a-4dad-9bce-9729aea633c3",
        "deviceName": "女生公寓2号楼-调节阀_122"
    },
    {
        "label": "女生公寓2-125",
        "filter": "47dde2ab-4c9b-4719-a38b-cfd73bf59d12",
        "deviceName": "女生公寓2号楼-调节阀_125"
    },
    {
        "label": "女生公寓2-126",
        "filter": "ae09ed23-b103-40d8-9c95-e236d9cbfddb",
        "deviceName": "女生公寓2号楼-调节阀_126"
    },
    {
        "label": "女生公寓2-217",
        "filter": "bed25cc8-f97e-4583-99c6-20ba2356f189",
        "deviceName": "女生公寓2号楼-调节阀_217"
    },
    {
        "label": "女生公寓2-218",
        "filter": "6d865359-5c03-4d91-839e-a1cb14520804",
        "deviceName": "女生公寓2号楼-调节阀_218"
    },
    {
        "label": "女生公寓2-221",
        "filter": "5d53ddb6-772f-4591-8ccd-693447fb3a3d",
        "deviceName": "女生公寓2号楼-调节阀_221"
    },
    {
        "label": "女生公寓2-222",
        "filter": "bd347869-bc3c-4ae8-acbd-c650cf0c3cae",
        "deviceName": "女生公寓2号楼-调节阀_222"
    },
    {
        "label": "女生公寓2-225",
        "filter": "df9a38bc-31ec-427f-b9e0-f2f55f6efeec",
        "deviceName": "女生公寓2号楼-调节阀_225"
    },
    {
        "label": "女生公寓2-226",
        "filter": "b3770673-8761-4d94-ad46-b64c463f4025",
        "deviceName": "女生公寓2号楼-调节阀_226"
    },
    {
        "label": "女生公寓2-317",
        "filter": "039c1d04-7078-4b99-9485-86740cccea7c",
        "deviceName": "女生公寓2号楼-调节阀_317"
    },
    {
        "label": "女生公寓2-318",
        "filter": "709f0d83-6676-4ac5-8862-8d2dfc66fa55",
        "deviceName": "女生公寓2号楼-调节阀_318"
    },
    {
        "label": "女生公寓2-321",
        "filter": "444e90cc-bf48-46db-b09f-6e99f9dcc604",
        "deviceName": "女生公寓2号楼-调节阀_321"
    },
    {
        "label": "女生公寓2-322",
        "filter": "47e8f4e0-af0e-4bc0-a869-3071060dddad",
        "deviceName": "女生公寓2号楼-调节阀_322"
    },
    {
        "label": "女生公寓2-325",
        "filter": "d545e987-2961-409a-84e7-92950c5085c2",
        "deviceName": "女生公寓2号楼-调节阀_325"
    },
    {
        "label": "女生公寓2-326",
        "filter": "c247c9f8-d59a-46dd-851a-b689f2cca389",
        "deviceName": "女生公寓2号楼-调节阀_326"
    },
    {
        "label": "女生公寓2-417",
        "filter": "7ee885fc-7bd0-4634-ac6d-c8b34649b7e6",
        "deviceName": "女生公寓2号楼-调节阀_417"
    },
    {
        "label": "女生公寓2-418",
        "filter": "dd1958d6-473d-41a9-a653-0997678583ac",
        "deviceName": "女生公寓2号楼-调节阀_418"
    },
    {
        "label": "女生公寓2-421",
        "filter": "6bc7917b-b4e0-4225-8fb4-6fb2332e7bf5",
        "deviceName": "女生公寓2号楼-调节阀_421"
    },
    {
        "label": "女生公寓2-422",
        "filter": "c80af629-cb74-410e-8366-73ff6ee830a2",
        "deviceName": "女生公寓2号楼-调节阀_422"
    },
    {
        "label": "女生公寓2-425",
        "filter": "a37ecb32-772f-4d6f-a4a6-fe5884a1799a",
        "deviceName": "女生公寓2号楼-调节阀_425"
    },
    {
        "label": "女生公寓2-426",
        "filter": "e4e25dac-9580-417b-bf7b-984b78228a6c",
        "deviceName": "女生公寓2号楼-调节阀_426"
    },
    {
        "label": "女生公寓2-517",
        "filter": "15006e61-02a7-4c07-9932-6bea53c43d45",
        "deviceName": "女生公寓2号楼-调节阀_517"
    },
    {
        "label": "女生公寓2-518",
        "filter": "45df055f-b3ad-455a-b70c-e7b4bd6201b0",
        "deviceName": "女生公寓2号楼-调节阀_518"
    },
    {
        "label": "女生公寓2-521",
        "filter": "ce13cf60-13e9-47e6-840b-c298ffce0fa5",
        "deviceName": "女生公寓2号楼-调节阀_521"
    },
    {
        "label": "女生公寓2-522",
        "filter": "271983f5-0b49-42ba-868d-93c6628c9ae5",
        "deviceName": "女生公寓2号楼-调节阀_522"
    },
    {
        "label": "女生公寓2-525",
        "filter": "e3ed3be7-2cc9-441d-b8b4-187a36335239",
        "deviceName": "女生公寓2号楼-调节阀_525"
    },
    {
        "label": "女生公寓2-526",
        "filter": "dd583b3a-d219-4838-ae8b-1af4086b1990",
        "deviceName": "女生公寓2号楼-调节阀_526"
    },
    {
        "label": "女生公寓2-617",
        "filter": "ca81cbd6-6508-40a5-86eb-b2d333dc7f9b",
        "deviceName": "女生公寓2号楼-调节阀_617"
    },
    {
        "label": "女生公寓2-618",
        "filter": "5eeb467d-b3e6-4803-9fc0-a7bffe206569",
        "deviceName": "女生公寓2号楼-调节阀_618"
    },
    {
        "label": "女生公寓2-621",
        "filter": "18fc8aa2-6f5f-4931-9aca-cb01628e7bf3",
        "deviceName": "女生公寓2号楼-调节阀_621"
    },
    {
        "label": "女生公寓2-622",
        "filter": "3f6180ee-401f-4266-9717-17f0a7bb06a8",
        "deviceName": "女生公寓2号楼-调节阀_622"
    },
    {
        "label": "女生公寓2-625",
        "filter": "95a0c59e-99fd-48ce-bf00-3d1691876b6a",
        "deviceName": "女生公寓2号楼-调节阀_625"
    },
    {
        "label": "女生公寓2-626",
        "filter": "8bb30009-2cf0-4fd9-9c0d-6c3e119e358a",
        "deviceName": "女生公寓2号楼-调节阀_626"
    },
    {
        "label": "综合楼1-103",
        "filter": "a76dbcb6-8f6b-44a3-8f2f-5e0cff5dc0e5",
        "deviceName": "综合楼1-调节阀_103"
    },
    {
        "label": "综合楼1-104",
        "filter": "c5deecb5-2a0e-4dfa-baf6-0f9a06534ff0",
        "deviceName": "综合楼1-调节阀_104"
    },
    {
        "label": "综合楼1-107",
        "filter": "63582576-e70c-4d2e-92b7-14a6bdb9c7ae",
        "deviceName": "综合楼1-调节阀_107"
    },
    {
        "label": "综合楼1-108A",
        "filter": "e0fd4127-1286-4bfa-9158-f97b88674b71",
        "deviceName": "综合楼1-调节阀_108A"
    },
    {
        "label": "综合楼1-108B",
        "filter": "4efa31c1-b181-4826-aeda-09fe5bbc8c51",
        "deviceName": "综合楼1-调节阀_108B"
    },
    {
        "label": "综合楼1-203",
        "filter": "65a426b5-26b4-4fe0-bfb8-51c1f4983f56",
        "deviceName": "综合楼1-调节阀_203"
    },
    {
        "label": "综合楼1-204",
        "filter": "8dab122a-520a-4561-89ba-df1beb7d51fd",
        "deviceName": "综合楼1-调节阀_204"
    },
    {
        "label": "综合楼1-207",
        "filter": "f54d7bf8-6054-46b2-a51e-5e1c8bf5aea9",
        "deviceName": "综合楼1-调节阀_207"
    },
    {
        "label": "综合楼1-208A",
        "filter": "3074a2c3-6b48-4edf-a881-cd05201d6d4d",
        "deviceName": "综合楼1-调节阀_208A"
    },
    {
        "label": "综合楼1-208B",
        "filter": "9cb5f070-6621-46de-b3f5-f0952e514aef",
        "deviceName": "综合楼1-调节阀_208B"
    },
    {
        "label": "综合楼1-209",
        "filter": "06e8269b-a33c-4177-b757-a56a71028906",
        "deviceName": "综合楼1-调节阀_209"
    },
    {
        "label": "综合楼1-303",
        "filter": "7234bc43-7436-46a1-a142-1459c214b2cf",
        "deviceName": "综合楼1-调节阀_303"
    },
    {
        "label": "综合楼1-304",
        "filter": "496a55e2-0678-4820-99aa-6c041519b398",
        "deviceName": "综合楼1-调节阀_304"
    },
    {
        "label": "综合楼1-307",
        "filter": "7dba55b3-6bd2-4236-a546-9ad497fd2f58",
        "deviceName": "综合楼1-调节阀_307"
    },
    {
        "label": "综合楼1-308A",
        "filter": "ce951070-85b3-4c3d-9280-37c56d9aee6e",
        "deviceName": "综合楼1-调节阀_308A"
    },
    {
        "label": "综合楼1-308B",
        "filter": "66cd5594-639a-47c0-9985-aa69f4fb9693",
        "deviceName": "综合楼1-调节阀_308B"
    },
    {
        "label": "综合楼1-309",
        "filter": "bf2a7d4b-0f9a-4cf2-8901-57b7e244326f",
        "deviceName": "综合楼1-调节阀_309"
    },
    {
        "label": "综合楼1-403",
        "filter": "a01afd7a-90f6-4ad2-a431-ecaab603019a",
        "deviceName": "综合楼1-调节阀_403"
    },
    {
        "label": "综合楼1-404",
        "filter": "50c40011-c8d1-4485-b1b7-25126a2f5214",
        "deviceName": "综合楼1-调节阀_404"
    },
    {
        "label": "综合楼1-407",
        "filter": "ef66e1c9-5fa2-4a70-bbc2-ce6338fd2184",
        "deviceName": "综合楼1-调节阀_407"
    },
    {
        "label": "综合楼1-408A",
        "filter": "81765096-1ce4-4bdb-ab3b-23870daa4e69",
        "deviceName": "综合楼1-调节阀_408A"
    },
    {
        "label": "综合楼1-408B",
        "filter": "42bf0f61-df87-441b-97bb-2e1a3e55723a",
        "deviceName": "综合楼1-调节阀_408B"
    },
    {
        "label": "综合楼1-409",
        "filter": "0e15f303-b0ae-4995-bba8-6893dc316ddc",
        "deviceName": "综合楼1-调节阀_409"
    },
    {
        "label": "综合楼1-503",
        "filter": "d4e904d7-1e32-4b62-b653-30e8f6c63410",
        "deviceName": "综合楼1-调节阀_503"
    },
    {
        "label": "综合楼1-504",
        "filter": "676f9bc6-efc9-42b1-8b11-69e9390063b9",
        "deviceName": "综合楼1-调节阀_504"
    },
    {
        "label": "综合楼1-507",
        "filter": "36114fff-b33f-4d2f-8da4-6861f1412140",
        "deviceName": "综合楼1-调节阀_507"
    },
    {
        "label": "综合楼1-508A",
        "filter": "d337abe1-8cee-4fd0-b8ae-a0a41d781b1e",
        "deviceName": "综合楼1-调节阀_508A"
    },
    {
        "label": "综合楼1-508B",
        "filter": "493ef750-2fad-416a-a997-4e84283856ef",
        "deviceName": "综合楼1-调节阀_508B"
    },
    {
        "label": "综合楼1-509",
        "filter": "4e344335-68dd-493a-93ac-9af3d8b62de4",
        "deviceName": "综合楼1-调节阀_509"
    },
    {
        "label": "图书馆-超市",
        "filter": "e0cd9720-cf6f-47c5-b45e-2025325d671b",
        "deviceName": "图书馆-调节阀_超市"
    },
    {
        "label": "图书馆-文印室",
        "filter": "29be0bb3-a5b0-4b8e-8108-47a4bbeea3f2",
        "deviceName": "图书馆-调节阀_文印室"
    },
    {
        "label": "图书馆-图书室1",
        "filter": "0833990f-f049-4d09-9008-3deb7e2fe43e",
        "deviceName": "图书馆-调节阀_图书室1"
    },
    {
        "label": "图书馆-图书室2",
        "filter": "a3e093d0-6f50-4a7f-a8b7-c975c9279e84",
        "deviceName": "图书馆-调节阀_图书室2"
    },
    {
        "label": "图书馆-图书室3",
        "filter": "dd517312-dc7f-48cf-9e9a-20924d585789",
        "deviceName": "图书馆-调节阀_图书室3"
    },
    {
        "label": "图书馆-工具书库",
        "filter": "494299e1-9352-45e0-a427-c1a443099cd1",
        "deviceName": "图书馆-调节阀_工具书库"
    },
    {
        "label": "图书馆-教师阅览室",
        "filter": "54e486ed-fbdb-43e5-a945-41694569ea1c",
        "deviceName": "图书馆-调节阀_教室阅览室"
    },
    {
        "label": "图书馆-二层3",
        "filter": "392ae0b9-2270-425e-b111-6a885c8c7a8a",
        "deviceName": "图书馆-调节阀_二层3"
    },
    {
        "label": "图书馆-二层4",
        "filter": "91dd2a29-1a56-4fc8-8024-b0738c3224a1",
        "deviceName": "图书馆-调节阀_二层4"
    },
    {
        "label": "图书馆-二层5",
        "filter": "def108a2-ecbd-4c1c-a120-646bb8af8e24",
        "deviceName": "图书馆-调节阀_二层5"
    },
    {
        "label": "图书馆-三层1",
        "filter": "c86ca51f-ecdf-4707-acb1-1f905031286a",
        "deviceName": "图书馆-调节阀_三层1"
    },
    {
        "label": "图书馆-三层2",
        "filter": "b263f64c-6a62-46d4-ace9-180ed09821a7",
        "deviceName": "图书馆-调节阀_三层2"
    },
    {
        "label": "图书馆-三层3",
        "filter": "e1224eef-e3d6-491c-a6d6-ab23d793bbad",
        "deviceName": "图书馆-调节阀_三层3"
    },
    {
        "label": "图书馆-三层4",
        "filter": "7455d3b6-c113-4117-b2db-e18903315c91",
        "deviceName": "图书馆-调节阀_三层4"
    },
    {
        "label": "图书馆-三层5",
        "filter": "9fd57663-805e-4ab0-92fb-2e118609b0a1",
        "deviceName": "图书馆-调节阀_三层5"
    },
    {
        "label": "图书馆-四层1",
        "filter": "b964ec59-1163-40a5-a95f-a98a88b27feb",
        "deviceName": "图书馆-调节阀_四层1"
    },
    {
        "label": "图书馆-四层2",
        "filter": "1c4d7810-c11e-4a65-ae7c-0eac8b36f9c7",
        "deviceName": "图书馆-调节阀_四层2"
    },
    {
        "label": "图书馆-四层3",
        "filter": "c2a5e1c2-fc80-4f42-9600-8cb50eca0b37",
        "deviceName": "图书馆-调节阀_四层3"
    },
    {
        "label": "图书馆-四层4",
        "filter": "839cc29c-0b04-430b-807d-efb5094f6112",
        "deviceName": "图书馆-调节阀_四层4"
    },
    {
        "label": "图书馆-四层5",
        "filter": "58091db2-25c9-47b6-99d7-145a51406f03",
        "deviceName": "图书馆-调节阀_四层5"
    },
    {
        "label": "图书馆-五层1",
        "filter": "a7db92ed-70bb-4205-9611-18d26e7a03f0",
        "deviceName": "图书馆-调节阀_五层1"
    },
    {
        "label": "图书馆-五层2",
        "filter": "3859de0a-7feb-4cea-8875-b35f3e271cd8",
        "deviceName": "图书馆-调节阀_五层2"
    },
    {
        "label": "图书馆-五层3",
        "filter": "98b9cdf1-80e5-44af-936b-b9eb32d23bca",
        "deviceName": "图书馆-调节阀_五层3"
    },
    {
        "label": "图书馆-五层4",
        "filter": "0074917c-dd01-405b-88a7-0c109b4fb315",
        "deviceName": "图书馆-调节阀_五层4"
    },
    {
        "label": "图书馆-五层5",
        "filter": "dec0f2a1-c80a-4a7b-a21e-d9570f472aa7",
        "deviceName": "图书馆-调节阀_五层5"
    },
    {
        "label": "图书馆-1层楼道",
        "filter": "b40dbf87-1e22-4604-a358-0842d87a75d1",
        "deviceName": "图书馆-调节阀_一层大厅"
    },
    {
        "label": "图书馆-2层楼道",
        "filter": "ff522d56-fdd9-4610-a526-37023c2fa91c",
        "deviceName": "图书馆-调节阀_二层大厅"
    },
    {
        "label": "图书馆-3层楼道",
        "filter": "40fdb227-db94-4adf-a33e-a93609f7dff3",
        "deviceName": "图书馆-调节阀_三层大厅"
    },
    {
        "label": "图书馆-4层楼道",
        "filter": "0e2f7bce-510e-435f-8401-b91b8a719eaf",
        "deviceName": "图书馆-调节阀_四层大厅"
    },
    {
        "label": "图书馆-5层楼道",
        "filter": "b2f27aeb-e510-4a73-bfb4-5308e9701236",
        "deviceName": "图书馆-调节阀_五层大厅"
    },
    {
        "label": "图书馆-6层楼道",
        "filter": "00cda2e2-6cfa-4207-bc2c-ffbc87b75ca4",
        "deviceName": "图书馆-调节阀_六层大厅"
    },
    {
        "label": "孔子楼-东卫",
        "filter": "ddc97d3c-d30d-4591-bb83-f4e1389cc714",
        "deviceName": "孔子楼-调节阀_东卫"
    },
    {
        "label": "孔子楼-东1",
        "filter": "8db78239-4b44-4f59-bd97-b4a6bd5a5e13",
        "deviceName": "孔子楼-调节阀_东1"
    },
    {
        "label": "孔子楼-东2",
        "filter": "df4a1192-8f5a-450e-b4f8-cc00633fd0b3",
        "deviceName": "孔子楼-调节阀_东2"
    },
    {
        "label": "孔子楼-东3",
        "filter": "d440878f-846a-4952-a516-332a70b6070a",
        "deviceName": "孔子楼-调节阀_东3"
    },
    {
        "label": "孔子楼-东旋转楼梯1",
        "filter": "38919b4f-ca62-4795-9137-664235eccff0",
        "deviceName": "孔子楼-调节阀_东旋转楼梯1"
    },
    {
        "label": "孔子楼-东旋转楼梯2",
        "filter": "6d16403d-803d-4e48-95d9-ea0115c9b18f",
        "deviceName": "孔子楼-调节阀_东旋转楼梯2"
    },
    {
        "label": "孔子楼-东旋转楼梯3",
        "filter": "3b47974e-b1af-4a2e-944c-8d8fd8c3fc15",
        "deviceName": "孔子楼-调节阀_东旋转楼梯3"
    },
    {
        "label": "孔子楼-东旋转楼梯4",
        "filter": "63f6464f-991b-495b-b95e-a42fdf40e9b3",
        "deviceName": "孔子楼-调节阀_东旋转楼梯4"
    },
    {
        "label": "孔子楼-一层廊1",
        "filter": "eb16fa76-423c-41bc-af85-c9eaf686ad5f",
        "deviceName": "孔子楼-调节阀_一层廊1"
    },
    {
        "label": "孔子楼-二层廊1",
        "filter": "bd0dedc2-5f70-473b-89b6-4db54988109f",
        "deviceName": "孔子楼-调节阀_二层廊1"
    },
    {
        "label": "孔子楼-三层廊1",
        "filter": "547baa84-5b2a-4140-b81c-e9315f4b9753",
        "deviceName": "孔子楼-调节阀_三层廊1"
    },
    {
        "label": "孔子楼-西卫",
        "filter": "3a7c8606-100a-448c-93a2-e0fa46c02109",
        "deviceName": "孔子楼-调节阀_西卫"
    },
    {
        "label": "孔子楼-西1",
        "filter": "85674565-c3ea-443e-b6f8-ded854ba6751",
        "deviceName": "孔子楼-调节阀_西1"
    },
    {
        "label": "孔子楼-西2",
        "filter": "0449653c-bfb2-4cfc-8d55-c9daa137dfb6",
        "deviceName": "孔子楼-调节阀_西2"
    },
    {
        "label": "孔子楼-西3",
        "filter": "0c06c1c7-8810-4874-946b-6cf12511d505",
        "deviceName": "孔子楼-调节阀_西3"
    },
    {
        "label": "孔子楼-西旋转楼梯1",
        "filter": "90119e20-1628-4ace-a0a8-5af61ac9ed3d",
        "deviceName": "孔子楼-调节阀_西旋转楼梯1"
    },
    {
        "label": "孔子楼-西旋转楼梯2",
        "filter": "f0cb9cfe-df08-4a7d-9a4b-f81d68b457c7",
        "deviceName": "孔子楼-调节阀_西旋转楼梯2"
    },
    {
        "label": "孔子楼-西旋转楼梯3",
        "filter": "10097e5b-1834-48a8-b6c9-1666214f430d",
        "deviceName": "孔子楼-调节阀_西旋转楼梯3"
    },
    {
        "label": "孔子楼-西旋转楼梯4",
        "filter": "55658a7e-4cac-470a-a18e-ef137cae4b31",
        "deviceName": "孔子楼-调节阀_西旋转楼梯4"
    },
    {
        "label": "孔子楼-一层廊2",
        "filter": "dd798bdb-f4db-4a3a-8c04-d5fc3ffbd694",
        "deviceName": "孔子楼-调节阀_一层廊2"
    },
    {
        "label": "孔子楼-二层廊2",
        "filter": "61246e8b-ae20-475b-a18a-663b7d3a8ff0",
        "deviceName": "孔子楼-调节阀_二层廊2"
    },
    {
        "label": "孔子楼-三层廊2",
        "filter": "230c3368-d135-4593-a1c5-c5385a36f3d7",
        "deviceName": "孔子楼-调节阀_三层廊2"
    },
    {
        "label": "教师公寓浴室-男生浴室1",
        "filter": "79fa7b4b-2c7f-4483-9656-7b89b4a8d59b",
        "deviceName": "教师公寓-调节阀_男生浴室1"
    },
    {
        "label": "教师公寓浴室-男生浴室2",
        "filter": "e66bed0a-4a47-4768-bda3-024efbc3d3f9",
        "deviceName": "教师公寓-调节阀_男生浴室2"
    },
    {
        "label": "教师公寓浴室-男生浴室3",
        "filter": "37763eb0-f771-46cb-a565-5804623000c5",
        "deviceName": "教师公寓-调节阀_男生浴室3"
    },
    {
        "label": "教师公寓浴室-男生浴室4",
        "filter": "04cf22e2-26c2-4d68-b39a-3802c9d4f04d",
        "deviceName": "教师公寓-调节阀_男生浴室4"
    },
    {
        "label": "教师公寓浴室-男生浴室5",
        "filter": "706c36ae-c6c4-498f-b4a8-b2339beb523f",
        "deviceName": "教师公寓-调节阀_男生浴室5"
    },
    {
        "label": "教师公寓浴室-一层过道左",
        "filter": "b6a89bff-56cb-45c0-86fb-32c44df36c84",
        "deviceName": "教师公寓-调节阀_澡堂过道左"
    },
    {
        "label": "教师公寓浴室-一层过道右",
        "filter": "54f9dc95-c6af-4625-940b-50c40bb753c3",
        "deviceName": "教师公寓-调节阀_澡堂过道右"
    },
    {
        "label": "教师公寓浴室-男教师1",
        "filter": "f502772a-aef1-4487-b4ac-72635d0d7466",
        "deviceName": "教师公寓-调节阀_教师男浴室1"
    },
    {
        "label": "教师公寓浴室-男教师2",
        "filter": "f63d6bcd-b5dd-4bee-8fcf-501800abaa28",
        "deviceName": "教师公寓-调节阀_教师男浴室2"
    },
    {
        "label": "教师公寓浴室-女生浴室1",
        "filter": "d5b25d9b-fc7c-4251-b1d3-7d6fbc452a02",
        "deviceName": "教师公寓-调节阀_女生浴室1"
    },
    {
        "label": "教师公寓浴室-女生浴室2",
        "filter": "4a3c4a7c-d56e-43ea-8c0c-37741c378eb6",
        "deviceName": "教师公寓-调节阀_女生浴室2"
    },
    {
        "label": "教师公寓浴室-女生浴室3",
        "filter": "4a5d93db-1278-4e69-982f-e81af26dc65e",
        "deviceName": "教师公寓-调节阀_女生浴室3"
    },
    {
        "label": "教师公寓浴室-女生浴室4",
        "filter": "70cb508b-ce0b-482b-994d-1f77f2edd871",
        "deviceName": "教师公寓-调节阀_女生浴室4"
    },
    {
        "label": "教师公寓浴室-女生浴室5",
        "filter": "b5964a0e-35a2-4a6c-bbba-df2e89c8c1a1",
        "deviceName": "教师公寓-调节阀_女生浴室5"
    },
    {
        "label": "教师公寓浴室-二层过道右",
        "filter": "a8a2c8f1-9066-4575-83f6-507c44834ce6",
        "deviceName": "教师公寓-调节阀_二层澡堂过道右"
    },
    {
        "label": "教师公寓浴室-女教师1",
        "filter": "632b16d5-e3d5-4877-b07f-2bd4bd49b703",
        "deviceName": "教师公寓-调节阀_女教师浴室1"
    },
    {
        "label": "教师公寓浴室-女教师2",
        "filter": "2d25b8fb-dd68-46ef-9f36-2ec800b3ee2d",
        "deviceName": "教师公寓-调节阀_女教师浴室2"
    },
    {
        "label": "教师公寓浴室-310",
        "filter": "d65ac85c-9243-47c3-a824-140730e632fa",
        "deviceName": "教师公寓-调节阀_310"
    },
    {
        "label": "教师公寓浴室-311",
        "filter": "7ca9c30b-ff66-4031-9915-639db9b31fc3",
        "deviceName": "教师公寓-调节阀_311"
    },
    {
        "label": "教师公寓浴室-314",
        "filter": "0f571a92-3704-4153-9dc6-475c64270fe7",
        "deviceName": "教师公寓-调节阀_314"
    },
    {
        "label": "教师公寓浴室-307",
        "filter": "72d6cf9e-8ada-449d-a36c-9aa61605e26c",
        "deviceName": "教师公寓-调节阀_307"
    },
    {
        "label": "教师公寓浴室-308",
        "filter": "3e9aba24-aa63-4741-b258-3941b6e16e50",
        "deviceName": "教师公寓-调节阀_308"
    },
    {
        "label": "教师公寓浴室-楼梯1",
        "filter": "ab399c57-c474-4592-8c6e-0290ca213413",
        "deviceName": "教师公寓-调节阀_楼梯1"
    },
    {
        "label": "教师公寓浴室-楼梯2",
        "filter": "437438ad-a717-450c-b3c1-273fe571fa9e",
        "deviceName": "教师公寓-调节阀_楼梯2"
    },
    {
        "label": "教师公寓浴室-楼梯3",
        "filter": "0292217e-2fd3-4b9c-bd63-521e6fbd3dee",
        "deviceName": "教师公寓-调节阀_楼梯3"
    },
    {
        "label": "食堂-饭厅1-7",
        "filter": "22a84d9c-0fbb-436e-93a1-cf47abf18ea5",
        "deviceName": "食堂-调节阀_101"
    },
    {
        "label": "食堂-饭厅1-2",
        "filter": "59691758-29a2-49a3-8d90-ef8404af9644",
        "deviceName": "食堂-调节阀_102"
    },
    {
        "label": "食堂-饭厅1-1",
        "filter": "1b85c52a-e6bd-45a6-a5f9-1e46a95d5a57",
        "deviceName": "食堂-调节阀_103"
    },
    {
        "label": "食堂-饭厅1-3",
        "filter": "354f93dd-09b2-49b0-b60c-b6de3c109d35",
        "deviceName": "食堂-调节阀_104"
    },
    {
        "label": "食堂-厨房1-2",
        "filter": "6578e3a4-6ad8-432c-941d-2d92c6831be2",
        "deviceName": "食堂-调节阀_105"
    },
    {
        "label": "食堂-饭厅1-6",
        "filter": "44b3cbfc-2b52-4bf0-b5ce-fbf3a25a9a5a",
        "deviceName": "食堂-调节阀_106"
    },
    {
        "label": "食堂-饭厅1-4",
        "filter": "2bccffc7-1527-4a04-ad5a-7f00d8f38fec",
        "deviceName": "食堂-调节阀_107"
    },
    {
        "label": "食堂-厨房1-1",
        "filter": "bcea189d-bc5d-487a-b052-3857a05fa5d3",
        "deviceName": "食堂-调节阀_108"
    },
    {
        "label": "食堂-饭厅1-5",
        "filter": "dcb4c946-e4d4-475f-b0f9-f90e50af53f4",
        "deviceName": "食堂-调节阀_109"
    },
    {
        "label": "食堂-饭厅2-1",
        "filter": "bb4d62c1-7efc-4cdb-9953-344fa63c0aad",
        "deviceName": "食堂-调节阀_201"
    },
    {
        "label": "食堂-饭厅2-2",
        "filter": "6a19c918-6541-4f04-9828-72f29c46f361",
        "deviceName": "食堂-调节阀_202"
    },
    {
        "label": "食堂-饭厅2-3",
        "filter": "dc1aaef3-f1e8-41d0-b1a6-64d206281cf0",
        "deviceName": "食堂-调节阀_203"
    },
    {
        "label": "食堂-厨房2-1",
        "filter": "b47abc4a-3dd9-40b7-b3ff-9c819f0ba710",
        "deviceName": "食堂-调节阀_204"
    },
    {
        "label": "食堂-厨房2-2",
        "filter": "ef483676-2a15-4e48-a466-5ac3fd89fa21",
        "deviceName": "食堂-调节阀_205"
    },
    {
        "label": "食堂-饭厅2-6",
        "filter": "10e6874e-5fc6-4841-aea9-662cd057f215",
        "deviceName": "食堂-调节阀_206"
    },
    {
        "label": "食堂-饭厅2-4",
        "filter": "777de21b-a4c4-40a8-bb28-ddef6a491c50",
        "deviceName": "食堂-调节阀_207"
    },
    {
        "label": "食堂-饭厅2-5",
        "filter": "bbd675c2-7eeb-4bd3-b037-a13cef4599bd",
        "deviceName": "食堂-调节阀_208"
    },
    {
        "label": "食堂-饭厅3-4",
        "filter": "c22cb821-e490-432c-8525-37f0527165d9",
        "deviceName": "食堂-调节阀_301"
    },
    {
        "label": "食堂-饭厅3-1",
        "filter": "3dc1197c-756b-4b78-ae41-dab9cb0c25f0",
        "deviceName": "食堂-调节阀_302"
    },
    {
        "label": "食堂-饭厅3-6",
        "filter": "105dffa3-524f-483b-a4f3-c30ce19d5e3d",
        "deviceName": "食堂-调节阀_303"
    },
    {
        "label": "食堂-饭厅3-3",
        "filter": "435830e2-82b3-4423-b6b7-7af7b2744292",
        "deviceName": "食堂-调节阀_304"
    },
    {
        "label": "食堂-饭厅3-2",
        "filter": "93106f27-ce8f-4138-b634-e8ccdc758536",
        "deviceName": "食堂-调节阀_305"
    },
    {
        "label": "食堂-厨房3-1",
        "filter": "49a055f2-0467-41f3-ab55-331bfd182aeb",
        "deviceName": "食堂-调节阀_306"
    },
    {
        "label": "食堂-厨房3-2",
        "filter": "6ddf8cbb-2438-467e-856a-bcec6ddbdaa5",
        "deviceName": "食堂-调节阀_307"
    },
    {
        "label": "食堂-饭厅3-5",
        "filter": "e39a1ae0-6d84-4894-a3d3-4ab5197c559c",
        "deviceName": "食堂-调节阀_308"
    },
    {
        "label": "职中-躬行楼-西",
        "filter": "7397b95d-a469-41b2-bbc8-e066bb325fdf",
        "deviceName": "职中-躬行楼-西-调节阀_可控调节阀"
    },
    {
        "label": "职中-躬行楼-北1",
        "filter": "29795191-841b-4b70-876f-b70ba62f8a8c",
        "deviceName": "职中-躬行楼-北1-调节阀_可控调节阀"
    },
    {
        "label": "职中-躬行楼-北2",
        "filter": "fdf0a7ba-e3ed-44c8-9357-9c0631f07cc3",
        "deviceName": "职中-躬行楼-北2-调节阀_可控调节阀"
    },
    {
        "label": "职中-躬行楼-北3",
        "filter": "3018103d-eebe-4634-8977-4113464e1876",
        "deviceName": "职中-躬行楼-北3-调节阀_可控调节阀"
    },
    {
        "label": "职中-躬行楼-北4",
        "filter": "0c529d00-1240-42e2-9c20-242ca1f7ed34",
        "deviceName": "职中-躬行楼-北4-调节阀_可控调节阀"
    },
    {
        "label": "职中-躬行楼-东",
        "filter": "e66a7b2c-444d-4879-8545-5381fe8d5b82",
        "deviceName": "职中-躬行楼-东-调节阀_可控调节阀"
    },
    {
        "label": "职中-躬行楼-南1",
        "filter": "68aba8bd-0d81-422d-aaf1-bdeec210b5fa",
        "deviceName": "职中-躬行楼-南1-调节阀_可控调节阀"
    },
    {
        "label": "职中-躬行楼-南2",
        "filter": "54b25f05-6154-4479-964d-dba530a426a0",
        "deviceName": "职中-躬行楼-南2-调节阀_可控调节阀"
    },
    {
        "label": "职中-躬行楼-南3",
        "filter": "25670861-9b8d-4d4d-9024-d60e17bc6635",
        "deviceName": "职中-躬行楼-南3-调节阀_可控调节阀"
    },
    {
        "label": "职中-躬行楼-南4",
        "filter": "0f6933a5-1b64-4ee2-b9ee-31e24a44f623",
        "deviceName": "职中-躬行楼-南4-调节阀_可控调节阀"
    },
    {
        "label": "职中-知行楼-北1",
        "filter": "ba46613c-2d21-4678-86b3-4e765597e676",
        "deviceName": "职中-知行楼-北1-调节阀_可控调节阀"
    },
    {
        "label": "职中-知行楼-北2",
        "filter": "a51e89e2-7542-4639-a951-67322cd77825",
        "deviceName": "职中-知行楼-北2-调节阀_可控调节阀"
    },
    {
        "label": "职中-知行楼-北3",
        "filter": "e3d9c63e-13fa-434a-8428-88badd65ba5d",
        "deviceName": "职中-知行楼-北3-调节阀_可控调节阀"
    },
    {
        "label": "职中-知行楼-北4",
        "filter": "3cd6c97a-5110-4004-a819-4e28c115b7fc",
        "deviceName": "职中-知行楼-北4-调节阀_可控调节阀"
    },
    {
        "label": "职中-知行楼-北5",
        "filter": "30a447f8-f6c1-4c9e-9911-c85e6934946d",
        "deviceName": "职中-知行楼-北5-调节阀_可控调节阀"
    },
    {
        "label": "职中-知行楼-南1",
        "filter": "1777d2b8-53de-4959-aaef-8b0907db5086",
        "deviceName": "职中-知行楼-南1-调节阀_可控调节阀"
    },
    {
        "label": "职中-知行楼-南2",
        "filter": "f6c1ef5e-700d-49f0-b9b9-058444c6019a",
        "deviceName": "职中-知行楼-南2-调节阀_可控调节阀"
    },
    {
        "label": "职中-知行楼-南3",
        "filter": "179c1637-439c-494f-8472-f69d50b6aada",
        "deviceName": "职中-知行楼-南3-调节阀_可控调节阀"
    },
    {
        "label": "职中-知行楼-南4",
        "filter": "26b1f836-8131-4d26-922e-f377f3af22fa",
        "deviceName": "职中-知行楼-南4-调节阀_可控调节阀"
    },
    {
        "label": "职中-知行楼-南5",
        "filter": "4440439d-6dff-4c3a-a245-872611b135c8",
        "deviceName": "职中-知行楼-南5-调节阀_可控调节阀"
    },
    {
        "label": "职中-笃行楼-北1",
        "filter": "bc89ae48-ada1-48da-b94a-e44a038ecc7d",
        "deviceName": "职中-笃行楼-北1-调节阀_可控调节阀"
    },
    {
        "label": "职中-笃行楼-北2",
        "filter": "534fd96f-f464-4ffd-b624-3d3d50732bb9",
        "deviceName": "职中-笃行楼-北2-调节阀_可控调节阀"
    },
    {
        "label": "职中-笃行楼-北3",
        "filter": "54278eb9-b1a3-49b9-9da6-ca39dd210e4f",
        "deviceName": "职中-笃行楼-北3-调节阀_可控调节阀"
    },
    {
        "label": "职中-笃行楼-北4",
        "filter": "9e9f2974-2a56-4130-a4db-1ab39e202885",
        "deviceName": "职中-笃行楼-北4-调节阀_可控调节阀"
    },
    {
        "label": "职中-笃行楼-北5",
        "filter": "dcc0f004-2fc5-41ab-b0bd-a902c67a8fdd",
        "deviceName": "职中-笃行楼-北5-调节阀_可控调节阀"
    },
    {
        "label": "职中-笃行楼-南1",
        "filter": "e4197fdd-32a7-4631-b555-201ff5c50661",
        "deviceName": "职中-笃行楼-南1-调节阀_可控调节阀"
    },
    {
        "label": "职中-笃行楼-南2",
        "filter": "beb036a0-f90a-4f76-b1e7-e2a0593a2ef2",
        "deviceName": "职中-笃行楼-南2-调节阀_可控调节阀"
    },
    {
        "label": "职中-笃行楼-南3",
        "filter": "c3836f48-0004-4886-8a0e-cd9b1d16c050",
        "deviceName": "职中-笃行楼-南3-调节阀_可控调节阀"
    },
    {
        "label": "职中-笃行楼-南4",
        "filter": "54007f4e-bd0f-4938-8b06-8735d15e0ea1",
        "deviceName": "职中-笃行楼-南4-调节阀_可控调节阀"
    },
    {
        "label": "职中-笃行楼-南5",
        "filter": "d5be0043-279f-4b65-b6ae-e37c554e7aca",
        "deviceName": "职中-笃行楼-南5-调节阀_可控调节阀"
    },
    {
        "label": "职中-笃行楼-南6",
        "filter": "3dffbc28-9dba-48e3-8ab8-4c8687459528",
        "deviceName": "职中-笃行楼-南6-调节阀_可控调节阀"
    },
    {
        "label": "职中-笃行楼-西1",
        "filter": "6dbfdef6-15d1-4b82-a5c9-55719a109d05",
        "deviceName": "职中-笃行楼-西1-调节阀_可控调节阀"
    },
    {
        "label": "职中-笃行楼-西2",
        "filter": "7356c7d8-c825-46b3-b7ba-2770bb9834f4",
        "deviceName": "职中-笃行楼-西2-调节阀_可控调节阀"
    },
    {
        "label": "职中-笃行楼-东1",
        "filter": "00ead257-75db-4e51-ae6a-0d1b36a41db4",
        "deviceName": "职中-笃行楼-东1-调节阀_可控调节阀"
    },
    {
        "label": "职中-笃行楼-东2",
        "filter": "acc3d61f-7023-470d-9fa6-ee4c909e5c0e",
        "deviceName": "职中-笃行楼-东2-调节阀_可控调节阀"
    },
    {
        "label": "职中-学生公寓-北1",
        "filter": "cd625b1f-9125-4b18-856d-bed2f30384ea",
        "deviceName": "职中学生宿舍-北1-调节阀_可控调节阀"
    },
    {
        "label": "职中-学生公寓-北2",
        "filter": "22989adb-2194-4315-bb06-2ec3d20ed844",
        "deviceName": "职中学生宿舍-北2-调节阀_可控调节阀"
    },
    {
        "label": "职中-学生公寓-北3",
        "filter": "40317cf7-9214-4b5a-9a8b-b8f5b3b6b1bb",
        "deviceName": "职中学生宿舍-北3-调节阀_可控调节阀"
    },
    {
        "label": "职中-学生公寓-北4",
        "filter": "6eb52c6b-7845-4d1c-a2f7-968602e535e6",
        "deviceName": "职中学生宿舍-北4-调节阀_可控调节阀"
    },
    {
        "label": "职中-学生公寓-南1",
        "filter": "4d561294-b340-4801-8eb0-ecc6be70ca27",
        "deviceName": "职中学生宿舍-南1-调节阀_可控调节阀"
    },
    {
        "label": "职中-学生公寓-南2",
        "filter": "da4a3b26-c784-4825-956c-60306ecb6ebe",
        "deviceName": "职中学生宿舍-南2-调节阀_可控调节阀"
    },
    {
        "label": "职中-学生公寓-南3",
        "filter": "d42157af-6b03-47f2-a2b9-7a907c04734a",
        "deviceName": "职中学生宿舍-南3-调节阀_可控调节阀"
    },
    {
        "label": "职中-学生公寓-南4",
        "filter": "af79e9cf-75c0-46f6-8aab-3235fc385632",
        "deviceName": "职中学生宿舍-南4-调节阀_可控调节阀"
    },
    {
        "label": "职中-教育局-北1",
        "filter": "cf34b26f-13ee-471d-91b5-ae9bd4701450",
        "deviceName": "职中-教育局-北1-调节阀_可控调节阀"
    },
    {
        "label": "职中-教育局-北2",
        "filter": "d9d10bbe-961a-4e02-958f-7f86ea9e91b9",
        "deviceName": "职中-教育局-北2-调节阀_可控调节阀"
    },
    {
        "label": "职中-教育局-北3",
        "filter": "0835f29b-55c0-467b-bfc9-5a3674bc842b",
        "deviceName": "职中-教育局-北3-调节阀_可控调节阀"
    },
    {
        "label": "职中-教育局-北4",
        "filter": "7bbad7fa-1b33-4af1-b176-8455795148f5",
        "deviceName": "职中-教育局-北4-调节阀_可控调节阀"
    },
    {
        "label": "职中-教育局-南1",
        "filter": "c22df875-e54a-4f4f-933c-b8d499baae93",
        "deviceName": "职中-教育局-南1-调节阀_可控调节阀"
    },
    {
        "label": "职中-教育局-南2",
        "filter": "85d76fc0-73de-49ea-8c9d-113ff0acfff3",
        "deviceName": "职中-教育局-南2-调节阀_可控调节阀"
    },
    {
        "label": "职中-教育局-南3",
        "filter": "eaf8efae-8bb5-4172-b5b0-ee7b68100d0b",
        "deviceName": "职中-教育局-南3-调节阀_可控调节阀"
    },
    {
        "label": "职中-教育局-南4",
        "filter": "bc79e5d0-4e7d-45d8-8a50-11272f636d18",
        "deviceName": "职中-教育局-南4-调节阀_可控调节阀"
    },
    {
        "label": "职中-食堂-北1",
        "filter": "6ed6e537-9862-434d-8df8-6e680b2cdde2",
        "deviceName": "职中-食堂-北1-调节阀_可控调节阀"
    },
    {
        "label": "职中-食堂-北2",
        "filter": "f902c379-7cc1-4486-a3bc-8ec55cb60f1f",
        "deviceName": "职中-食堂-北2-调节阀_可控调节阀"
    },
    {
        "label": "职中-食堂-北3",
        "filter": "d8c2a31b-fbbd-4306-8302-09448c29b7ce",
        "deviceName": "职中-食堂-北3-调节阀_可控调节阀"
    },
    {
        "label": "职中-食堂-北4",
        "filter": "18ede3e7-afb3-4381-9e64-1e77b0533ac0",
        "deviceName": "职中-食堂-北4-调节阀_可控调节阀"
    },
    {
        "label": "职中-食堂-北5",
        "filter": "b40bb11f-8568-4dd6-a923-ca9859a4590a",
        "deviceName": "职中-食堂-北5-调节阀_可控调节阀"
    },
    {
        "label": "职中-食堂-南1",
        "filter": "8b572125-4c61-4da3-8375-da31fe2cb6d6",
        "deviceName": "职中-食堂-南1-调节阀_可控调节阀"
    },
    {
        "label": "职中-食堂-南2",
        "filter": "a61a858e-54d8-49ff-a1cb-f9e4e85ebcf4",
        "deviceName": "职中-食堂-南2-调节阀_可控调节阀"
    },
    {
        "label": "职中-食堂-南3",
        "filter": "d5c0744c-3f91-46d0-9f1a-59b68b2dc27e",
        "deviceName": "职中-食堂-南3-调节阀（大阀）_可控调节阀"
    },
    {
        "label": "职中-食堂-南4",
        "filter": "21605cee-4be3-4219-9a24-ef3ac39ffbe7",
        "deviceName": "职中-食堂-南4-调节阀_可控调节阀"
    },
    {
        "label": "职中-食堂-南5",
        "filter": "6d1ca562-3382-43f7-8777-b78636b74082",
        "deviceName": "职中-食堂-南5-调节阀_可控调节阀"
    },
    {
        "label": "职中-食堂-南6",
        "filter": "906a5eb7-4ea7-4f99-ae51-bf7e9a8fcad3",
        "deviceName": "职中-食堂-南6-调节阀_可控调节阀"
    },
    {
        "label": "职中-食堂-东1",
        "filter": "1343910b-f6f3-4ae5-b73b-c85104db763a",
        "deviceName": "职中-食堂-东1-调节阀_可控调节阀"
    },
    {
        "label": "职中-食堂-东2",
        "filter": "68fc0bea-cde7-404f-90d7-acbe7e228333",
        "deviceName": "职中-食堂-东2-调节阀_可控调节阀"
    },
    {
        "label": "职中-食堂-东3",
        "filter": "59af0fe3-2823-4985-aae6-ef15be8df5af",
        "deviceName": "职中-食堂-东3-调节阀_可控调节阀"
    },
    {
        "label": "双语-高中部-西门北",
        "filter": "04f4ff7a-814c-4a06-87b1-b005abc47e76",
        "deviceName": "双语-高中部-西门北-调节阀_可控调节阀"
    },
    {
        "label": "双语-高中部-西门南",
        "filter": "ca9d570f-890d-4bb8-8e8c-88115fc2f366",
        "deviceName": "双语-高中部-西门南-调节阀_可控调节阀"
    },
    {
        "label": "双语-高中部-监控室",
        "filter": "dc1d8973-fe99-481b-94c9-dde29d9d6a70",
        "deviceName": "双语-高中部-监控室-调节阀_可控调节阀"
    },
    {
        "label": "双语-高中部-男厕",
        "filter": "5d3d71ac-5453-416a-92b3-05e59804177d",
        "deviceName": "双语-高中部-男厕-调节阀_可控调节阀"
    },
    {
        "label": "双语-高中部-仓库",
        "filter": "709149e9-138b-4fe6-a418-d9dbc7e02e78",
        "deviceName": "双语-高中部-仓库-调节阀_可控调节阀"
    },
    {
        "label": "双语-高中部-团委",
        "filter": "61c2b592-347b-4344-9e99-2e96e67794e0",
        "deviceName": "双语-高中部-团委-调节阀_可控调节阀"
    },
    {
        "label": "双语-高中部-文印室",
        "filter": "20378f1f-df44-438f-a64f-79fc3df8df44",
        "deviceName": "双语-高中部-文印室-调节阀_可控调节阀"
    },
    {
        "label": "双语-高中部-美术器材室",
        "filter": "a675eaae-531d-42aa-ad49-927ae8134d01",
        "deviceName": "双语-高中部-美术器材室-调节阀_可控调节阀"
    },
    {
        "label": "双语-高中部-财务部",
        "filter": "2b042610-9909-4ecd-932b-3b4cca5c5385",
        "deviceName": "双语-高中部-财务室-调节阀_可控调节阀"
    },
    {
        "label": "双语-高中部-东门北",
        "filter": "9f6483cb-5f41-43d2-b79d-df90a8bfe86c",
        "deviceName": "双语-高中部-东门北-调节阀_可控调节阀"
    },
    {
        "label": "双语-高中部-书库",
        "filter": "a4372234-c607-403e-9ce7-32ebe427db90",
        "deviceName": "双语-高中部-书库-调节阀_可控调节阀"
    },
    {
        "label": "双语-初中部-教师办公室1",
        "filter": "f05b9fa8-dbed-4f88-93ab-6dee2529a545",
        "deviceName": "双语-初中部-教师办公室1-调节阀_可控调节阀"
    },
    {
        "label": "双语-初中部-教师办公室2",
        "filter": "6717a835-a7e0-4f06-a1f8-67babfc41f5e",
        "deviceName": "双语-初中部-教师办公室2-调节阀_可控调节阀"
    },
    {
        "label": "双语-初中部-东门北",
        "filter": "a43b7c58-7876-48f1-bcce-da90f018d4b8",
        "deviceName": "双语-初中部-东门北-调节阀_可控调节阀"
    },
    {
        "label": "双语-初中部-仓库",
        "filter": "7fceff60-95c1-47d0-a8da-d1cb7c53d62f",
        "deviceName": "双语-初中部-仓库-调节阀_可控调节阀"
    },
    {
        "label": "双语-初中部-西门南",
        "filter": "9ccde94d-20e7-4ee2-be24-2ff8f11d8471",
        "deviceName": "双语-初中部-西门南-调节阀_可控调节阀"
    },
    {
        "label": "双语-初中部-初中34班",
        "filter": "6284c917-0998-45a5-bb94-b6fb4afa5e11",
        "deviceName": "双语-初中部-初中34班-调节阀_可控调节阀"
    },
    {
        "label": "双语-初中部-初中33班",
        "filter": "d96b7078-f1c1-44c3-8353-06b35b5366bb",
        "deviceName": "双语-初中部-初中33班-调节阀_可控调节阀"
    },
    {
        "label": "双语-初中部-兴趣班",
        "filter": "88bf0df4-2bf9-4536-ac5b-fee5fccb86bf",
        "deviceName": "双语-初中部-兴趣班-调节阀_可控调节阀"
    },
    {
        "label": "双语-初中部-体检室",
        "filter": "aa71e96b-c639-43ba-9a81-cdfb961aee3f",
        "deviceName": "双语-初中部-体检室-调节阀_可控调节阀"
    },
    {
        "label": "双语-初中部-图书室1",
        "filter": "31c9e383-8296-4c65-b96e-4b92d969a8f8",
        "deviceName": "双语-初中部-图书室1-调节阀_可控调节阀"
    },
    {
        "label": "双语-男生公寓-120",
        "filter": "90af7417-e364-4669-b268-596a78ad8c0b",
        "deviceName": "双语-男生公寓-120-调节阀_可控调节阀"
    },
    {
        "label": "双语-男生公寓-117",
        "filter": "c672973d-c66d-4240-b37e-4a39ad691858",
        "deviceName": "双语-男生公寓-117-调节阀_可控调节阀"
    },
    {
        "label": "双语-男生公寓-西门",
        "filter": "145034cd-5ae3-4c7f-bde5-d344b83dbe0f",
        "deviceName": "双语-男生公寓-西门-调节阀_可控调节阀"
    },
    {
        "label": "双语-男生公寓-洗漱间",
        "filter": "6565e3e9-a93d-4a29-869d-556a804541b9",
        "deviceName": "双语-男生公寓-洗漱-调节阀_可控调节阀"
    },
    {
        "label": "双语-男生公寓-东门",
        "filter": "903aa472-67a8-495f-b7b6-0815ef72c97a",
        "deviceName": "双语-男生公寓-东门-调节阀_可控调节阀"
    },
    {
        "label": "双语-女生公寓-120",
        "filter": "77fe53d1-0ec0-4f76-9ee4-a8c749506721",
        "deviceName": "双语-女生公寓-120-调节阀_可控调节阀"
    },
    {
        "label": "双语-女生公寓-116",
        "filter": "4fd7187b-3d06-4eff-bfe8-823bcf900a98",
        "deviceName": "双语-女生公寓-116-调节阀_可控调节阀"
    },
    {
        "label": "双语-女生公寓-114",
        "filter": "1e3b2fe6-607f-425b-9c75-8f157b28bbb8",
        "deviceName": "双语-女生公寓-114-调节阀_可控调节阀"
    },
    {
        "label": "双语-女生公寓-洗漱间",
        "filter": "f1a5b5c8-15ac-4a12-8e8f-a205ab84a4cb",
        "deviceName": "双语-女生公寓-洗漱间-调节阀_可控调节阀"
    },
    {
        "label": "双语-女生公寓-教师值班室",
        "filter": "d8ad63ec-8241-4d93-9dd8-199dc0ec4f36",
        "deviceName": "双语-女生公寓-教师值班室-调节阀_可控调节阀"
    },
    {
        "label": "双语-餐厅-北1",
        "filter": "cc4b6a2b-4fce-46b7-b17b-3eebe2e2d597",
        "deviceName": "双语-餐厅-北1-调节阀_可控调节阀"
    },
    {
        "label": "双语-餐厅-北2",
        "filter": "624e5f57-214a-480c-9a5e-c68f014eb6a0",
        "deviceName": "双语-餐厅-北2-调节阀_可控调节阀"
    },
    {
        "label": "双语-餐厅-南1",
        "filter": "ce4cb9de-1832-4f2f-9c30-9f3f1f5e5dfd",
        "deviceName": "双语-餐厅-南1-调节阀_可控调节阀"
    },
    {
        "label": "双语-餐厅-南2",
        "filter": "32d2866c-1024-4f42-a3be-6fc7d71a4c32",
        "deviceName": "双语-餐厅-南2-调节阀_可控调节阀"
    },
    {
        "label": "双语-餐厅-南3",
        "filter": "1460a0bb-fb4f-484e-84c8-af7665307468",
        "deviceName": "双语-餐厅-南3-调节阀_可控调节阀"
    },
    {
        "label": "双语-餐厅-更衣室",
        "filter": "58968fac-10a3-4f7c-99c1-bab517a4fdc8",
        "deviceName": "双语-餐厅-更衣室-调节阀_可控调节阀"
    },
    {
        "label": "双语-餐厅-消洗间",
        "filter": "7c7e799e-21f9-4e32-9edc-2db43362dfd3",
        "deviceName": "双语-餐厅-消洗间-调节阀_可控调节阀"
    },
    {
        "label": "双语-报告厅-报告厅东侧",
        "filter": "8e4284ae-80d7-427d-bfe4-16d8b586174b",
        "deviceName": "双语-报告厅-调节阀_东侧"
    },
    {
        "label": "双语-报告厅-报告厅中侧",
        "filter": "65ba7c40-2b41-418e-9d01-bf663a36c028",
        "deviceName": "双语-报告厅-调节阀_中部"
    },
    {
        "label": "双语-报告厅-报告厅西侧",
        "filter": "55a744fe-f08a-406c-9c1b-e889b08444c6",
        "deviceName": "双语-报告厅-调节阀_西侧"
    },
    {
        "label": "武装部-主楼-主楼高区",
        "filter": "d2bfa8d6-170b-469b-a96d-052a72d0d35d",
        "deviceName": "武装部-主楼-DN100-调节阀_可控调节阀"
    },
    {
        "label": "武装部-主楼-主楼地库",
        "filter": "269c6d72-fa0d-49fa-b5c1-69afb73c95ef",
        "deviceName": "武装部-主楼-DN50-调节阀_可控调节阀"
    },
    {
        "label": "武装部-主楼-主楼低区",
        "filter": "5788ad83-f7b6-4753-a4a2-9d3b2e1ca949",
        "deviceName": "武装部-主楼-DN80-调节阀_可控调节阀"
    },
    {
        "label": "武装部-副楼-副楼",
        "filter": "99307462-7b56-4bac-9e54-6b82e6e4d0f4",
        "deviceName": "武装部-食堂-调节阀_可控调节阀"
    }
]

function doPost(label, filter, deviceName) {
    As.post("https://www.allsmartcloud.com/api/alarm2/graph", {
        "query": "mutation ($object:Object){alarmItem{create(object:$object){id, datasource, state, alarmCondition, label, description}}}",
        "arguments": {
            "object": {
                "groupId": "77b114ba440a000",
                "groupLabel": "介休一中",
                label,
                "description": "",
                "datasource": "ControlValve",
                "state": 0,
                "alarmCondition": [{
                    "field": "runOpening",
                    "rule": {
                        "0": {
                            "low": 35
                        },
                        "4": {
                            "low": 35
                        },
                        "delay": 5,
                        "restoreDelay": 5,
                        "dataType": "DOUBLE"
                    },
                    "type": "CONTINUOUS",
                    "label": "输出开度"
                }],
                "corpId": "3403c1dd180a000",
                filter,
                deviceName
            }
        }
    }).catch(err => {
        console.log(err)
    })
}

let index = 0
let timer = setInterval(() => {
    let {label, filter, deviceName} = valveIds[index]
    console.log(label)
    doPost(label, filter, deviceName)
    index++;
    if(index >= valveIds.length) {
        clearInterval(timer)
        console.log('结束')
    }
}, 2000);

