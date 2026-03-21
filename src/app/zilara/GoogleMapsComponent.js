"use client";
import {
  APILoader,
  StoreLocator
} from "@googlemaps/extended-component-library/react";
import "./zillara.css";
import { useEffect } from "react";

const LISTINGS =[
    {
        "title": "Jewel One Coimbatore",
        "addressLines": [
            "No. 284 &, 285, Cross Cut Rd, Peranaidu Layout, Ram Nagar, Gandhipuram, Coimbatore, Tamil Nadu 641012, India"
        ],
        "position": {
            "lat": 11.017003,
            "lng": 76.963993
        },
        "placeId": "ChIJA7QLfP9YqDsR_k9amWQXVFQ"
    },
    {
        "title": "Jewel One Udumalaipettai",
        "addressLines": [
            "24, Dhali Rd, Udumalaipettai, Tamil Nadu 641126, India"
        ],
        "position": {
            "lat": 10.586591,
            "lng": 77.245599
        },
        "placeId": "ChIJJdShw6nNqTsR8sLfe-aQcWI"
    },
    {
        "title": "Jewel One Chennai",
        "addressLines": [
            "JewelOne, Near Thirumangalam Metro station, 233-235, 2nd Ave, L Block, Anna Nagar West, Anna Nagar, Chennai, Tamil Nadu 600040, India"
        ],
        "position": {
            "lat": 13.085065,
            "lng": 80.201262
        },
        "placeId": "ChIJgf34DdNnUjoR18qynFlxQpI"
    },
    {
        "title": "Jewel One coimbatore",
        "addressLines": [
            "SF. NO. 460, 461/1 Kathirnaickenpalayam Road, Post, Thoppampatti, Coimbatore, Narasimhanaickenpalayam, Tamil Nadu 641017, India"
        ],
        "position": {
            "lat": 11.103166,
            "lng": 76.934209
        },
        "placeId": "ChIJweZMNhf3qDsRPv54pRO7yLs"
    },
    {
        "title": "Jewel One Salem",
        "addressLines": [
            "1/2, Omalur Main Rd, Arthanari Nagar, Swarnapuri, Salem, Tamil Nadu 636016, India"
        ],
        "position": {
            "lat": 11.670864,
            "lng": 78.139411
        },
        "placeId": "ChIJs5WKl0VvqTsRUJpTYi5JtIg"
    },
    {
        "title": "Jewel One Puducherry",
        "addressLines": [
            "88, Kamaraj Salai, Near Jayaram Hotel, Kamaraj Nagar, Puducherry, 605011, India"
        ],
        "position": {
            "lat": 11.937466,
            "lng": 79.82286
        },
        "placeId": "ChIJLzkGF35hUzoRqKXTednCqYw"
    },
    {
        "title": "Jewel One Pollachi",
        "addressLines": [
            "Narasus Coffee Opp, 34, Bazaar St, Puliampatti, Pollachi, Tamil Nadu 642001, India"
        ],
        "position": {
            "lat": 10.65641,
            "lng": 77.009116
        },
        "placeId": "ChIJzZb3e_9YqDsRk0CtorS8Dzc"
    },
    {
        "title": "Jewel One Erode",
        "addressLines": [
            "85, RKV Rd, Marapalam, Erode, Tamil Nadu 638001, India"
        ],
        "position": {
            "lat": 11.344969,
            "lng": 77.730169
        },
        "placeId": "ChIJ9Rj0l0VvqTsRRNwfHfnwFc8"
    },
    {
        "title": "Jewel One Vellore",
        "addressLines": [
            "18/1, Anna Salai, opp. Voorhees College, Vasanthapuram, Srinivasan Nagar, Vellore, Tamil Nadu 632001, India"
        ],
        "position": {
            "lat": 12.910461,
            "lng": 79.131816
        },
        "placeId": "ChIJxZ1aZ904rTsRx0B3_hpnacQ"
    },
    {
        "title": "Jewel One Madurai",
        "addressLines": [
            "123, Netaji Rd, opposite Modern Restaurant, Madurai Main, Madurai, Tamil Nadu 625001, India"
        ],
        "position": {
            "lat": 9.917816,
            "lng": 78.116923
        },
        "placeId": "ChIJtc1F-4PFADsRitSYwbIA2DI"
    },
    {
        "title": "Jewel One Ramanathapuram",
        "addressLines": [
            "65 Swamy Vivekanda, Salai St, Chalai Bazar, Ramanathapuram, Tamil Nadu 623501, India"
        ],
        "position": {
            "lat": 9.36968,
            "lng": 78.833963
        },
        "placeId": "ChIJHahh_6OiATsRVvzI9ZCqjJ0"
    },
    {
        "title": "Jewel One Hosur",
        "addressLines": [
            "NO.8, OPP HOSUR BUS STAND, NEAR FLOWER MARKET, Surya Nagar, Sri Nagar, Hosur, Tamil Nadu 635109, India"
        ],
        "position": {
            "lat": 12.735892,
            "lng": 77.827999
        },
        "placeId": "ChIJERzvKM9wrjsRS8Rd0UciRjQ"
    },
    {
        "title": "Thangamayil Aruppukottai",
        "addressLines": [
            "102,103, Kasukadai Bazar, Thiruchuli Rd, P.Puliampatti, Aruppukkottai, Tamil Nadu 626101, India"
        ],
        "position": {
            "lat": 9.508312,
            "lng": 78.095087
        },
        "placeId": "ChIJCW4qFRowATsRlGoKbgtF_8c"
    },
    {
        "title": "Thangamayil Bodi",
        "addressLines": [
            "129, Kamarajar Bazaar, Palayam - Bodi Rd, near Suganya Departmental Store, Ammankulam, Bodinayakanur, Tamil Nadu 625513, India"
        ],
        "position": {
            "lat": 10.011777,
            "lng": 77.35125
        },
        "placeId": "ChIJi1yyAK4NBzsRvPWXTw4g_AA"
    },
    {
        "title": "Thangamayil Coimbatore",
        "addressLines": [
            "396, Oppanakara St., Maniam Market, Town Hall, Coimbatore, Tamil Nadu 641001, India"
        ],
        "position": {
            "lat": 10.993878,
            "lng": 76.959831
        },
        "placeId": "ChIJFSl3cwtZqDsRnv-dA5a77JY"
    },
    {
        "title": "Thangamayil Cumbum",
        "addressLines": [
            "Police Station, 196, LF Rd, near Cumbum, Nethaji Nagar, Uthamapuram, Puduppatti, Cumbum, Tamil Nadu 625516, India"
        ],
        "position": {
            "lat": 9.742268,
            "lng": 77.286983
        },
        "placeId": "ChIJb_7qw1gBBzsRk4QnyzglXoA"
    },
    {
        "title": "Thangamayil Dharapuram",
        "addressLines": [
            "14/146, Sri Vinayaga Complex,, Pollachi - Dharapuram Rd, RSP Nagar, Dharapuram, Tamil Nadu 638656, India"
        ],
        "position": {
            "lat": 10.735823,
            "lng": 77.518191
        },
        "placeId": "ChIJ2xnsXoK_qTsREAs226QIMDI"
    },
    {
        "title": "Thangamayil  Dharmapuri",
        "addressLines": [
            "86, Adiyaman Bypass Road Adiyaman Palace, opposite Dharmapuri, Dharmapuri, Tamil Nadu 636701, India"
        ],
        "position": {
            "lat": 12.134785,
            "lng": 78.160337
        },
        "placeId": "ChIJOwAAAFugrjsRe5KwozY8aZI"
    },
    {
        "title": "Thangamayil Dindigul",
        "addressLines": [
            "1-A, Salai Rd, Spencer Compound, Dindigul, Tamil Nadu 624001, India"
        ],
        "position": {
            "lat": 10.361924,
            "lng": 77.975682
        },
        "placeId": "ChIJEWczRViqADsRcPDKXwRjAfA"
    },
    {
        "title": "Thangamayil Tuticorin",
        "addressLines": [
            "3/6, Bharathiyar Road, Eral, Tuticorin District, Tamil Nadu, 628801"
        ],
        "position": {
            "lat": 8.624519,
            "lng": 78.025161
        },
        "placeId": "ChIJExcpCaCMAzsRq7wLG6zXv9k"
    },
    {
        "title": "Thangamayil Erode",
        "addressLines": [
            "10, RKV Rd, Erode, Tamil Nadu 638001, India"
        ],
        "position": {
            "lat": 11.342241,
            "lng": 77.728516
        },
        "placeId": "ChIJ_d4zXXZvqTsRyKzQ2uv8S00"
    },
    {
        "title": "Thangamayil  Ganapathy,Coimbatore",
        "addressLines": [
            "1422-1, Sathy Rd, opposite Sree Annapoorna, Gopalakrishnapuram, Ganapathy, Coimbatore, Tamil Nadu 641006, India"
        ],
        "position": {
            "lat": 11.046949,
            "lng": 76.987936
        },
        "placeId": "ChIJO6ndxO5ZqDsRoEFxZZyhhC0"
    },
    {
        "title": "Thangamayil Gobichettipalayam",
        "addressLines": [
            "277, Cutchery Street, Sakthi, Gopi Main Road, opposite to Travelers Bungalow, Gobichettipalayam, Tamil Nadu 638452, India"
        ],
        "position": {
            "lat": 11.454664,
            "lng": 77.423786
        },
        "placeId": "ChIJw6LZaZg9qTsRymjlmVdmkwk"
    },
    {
        "title": "Thangamayil Hosur",
        "addressLines": [
            "75H2A-E, Bagalur Rd, Hosur, Tamil Nadu 635109, India"
        ],
        "position": {
            "lat": 12.737468,
            "lng": 77.830626
        },
        "placeId": "ChIJve_XFMhxrjsRabH94kN5hYE"
    },
    {
        "title": "Thangamayil  Karaikudi",
        "addressLines": [
            "333-A, Sekkalai Rd, Thilagar Nagar, Sekkalai, Karaikudi, Tamil Nadu 630001, India"
        ],
        "position": {
            "lat": 10.070478,
            "lng": 78.769863
        },
        "placeId": "ChIJDX9j019nADsR97azisBMpbc"
    },
    {
        "title": "Thangamayil  Kovilpatti",
        "addressLines": [
            "406 Tirunelveli main Road, near Old bus stand, V.O.C. Nagar, Kadershan Koil, Kovilpatti, Tamil Nadu 628501, India"
        ],
        "position": {
            "lat": 9.174215,
            "lng": 77.863921
        },
        "placeId": "ChIJj0Wp1W2yBjsRYf-gRBBoPEU"
    },
    {
        "title": "Thangamayil Krishnagiri",
        "addressLines": [
            "9, Bangalore Rd, Bairappa Colony, New Pet, Krishnagiri, Tamil Nadu 635001, India"
        ],
        "position": {
            "lat": 12.519831,
            "lng": 78.22141
        },
        "placeId": "ChIJuUN1pZU0rDsRUiYP7xw04Ag"
    },
    {
        "title": "Thangamayil  Kumbakonam",
        "addressLines": [
            "NO.9A/92, Utchipillaiyar Koil Street, Valayapettai Agraharam, Kumbakonam, Tamil Nadu 612001, India"
        ],
        "position": {
            "lat": 10.958881,
            "lng": 79.376139
        },
        "placeId": "ChIJq_orUMjNqjsRIhsSgzY_Hr0"
    },
    {
        "title": "Thangamayil  Madurai",
        "addressLines": [
            "330, 80 Feet Rd, Anna Nagar, Madurai, Sathamangalam, Tamil Nadu 625020, India"
        ],
        "position": {
            "lat": 9.918747,
            "lng": 78.148912
        },
        "placeId": "ChIJV_GDMKnFADsRvU7M6kNCIl8"
    },
    {
        "title": "Thangamayil Madurai",
        "addressLines": [
            "124, Netaji Rd, Madurai Main, Madurai, Tamil Nadu 625001, India"
        ],
        "position": {
            "lat": 9.917792,
            "lng": 78.117087
        },
        "placeId": "ChIJ_3wj-4PFADsRXia0o4vhEb8"
    },
    {
        "title": "Thangamayil Pollachi",
        "addressLines": [
            "40, MKG Complex, Gandhi statue, New Scheme Rd, Pollachi, Tamil Nadu 642001, India"
        ],
        "position": {
            "lat": 10.661735,
            "lng": 77.00845
        },
        "placeId": "ChIJy7xXa1w5qDsRG7A0dpjLsFY"
    },
    {
        "title": "Thangamayil Madurai",
        "addressLines": [
            "NO. 694, BK BALU NAIDU COMPLEX, Trichy Main Rd, Melur, Tamil Nadu 625106, India"
        ],
        "position": {
            "lat": 10.03051,
            "lng": 78.336371
        },
        "placeId": "ChIJudk_vhPrADsR9syxK_Sczpc"
    },
    {
        "title": "Thangamayil Nagercoil",
        "addressLines": [
            "63/1, Police Station Road, Meenakshipuram, Vadiveeswaram Village, Nagercoil, Tamil Nadu 629001, India"
        ],
        "position": {
            "lat": 8.184385,
            "lng": 77.435598
        },
        "placeId": "ChIJPUz0j6PxBDsRuX-PM87rDxc"
    },
    {
        "title": "Thangamayil Namakkal",
        "addressLines": [
            "158, Salem Rd, R.P Pudur, Namakkal, Tamil Nadu 637001, India"
        ],
        "position": {
            "lat": 11.230886,
            "lng": 78.164677
        },
        "placeId": "ChIJH0cNfPrOqzsR5WcEazZhAS8"
    },
    {
        "title": "Thangamayil Madurai",
        "addressLines": [
            "745A, Gandhiji Rd, Suppan Ragavan Colony, NRT Nagar, Tamil Nadu 625531, India"
        ],
        "position": {
            "lat": 10.009433,
            "lng": 77.47887
        },
        "placeId": "ChIJkaSQ9K4UBzsR0gtS8S7uoAs"
    },
    {
        "title": "Thangamayil Ooty",
        "addressLines": [
            "No. 17,18, State Bank of India, 19, Commercial Rd, opposite Ooty, Upper Bazar, Ooty, Tamil Nadu 643001, India"
        ],
        "position": {
            "lat": 11.409058,
            "lng": 76.705112
        },
        "placeId": "ChIJ0dLCoQM66yAR4bzsJ65TWIM"
    },
    {
        "title": "Thangamayil Natham",
        "addressLines": [
            "48/1, Kottampatti road, Opp Bus stand Natham, Tamil Nadu 624401"
        ],
        "position": {
            "lat": 10.219302,
            "lng": 78.247249
        },
        "placeId": "QA7EWZ4HZoXAJng"
    },
    {
        "title": "Thangamayil  Rajapalayam",
        "addressLines": [
            "South Police Station, 367, Tenkasi Rd, near Rajapalayam, Pudupalaiyam, Rajapalayam, Tamil Nadu 626117, India"
        ],
        "position": {
            "lat": 9.449771,
            "lng": 77.554631
        },
        "placeId": "ChIJo8th3tPpBjsRw-momvxyeAc"
    },
    {
        "title": "Thangamayil Ramanathapuram",
        "addressLines": [
            "262,Swamy Vivekanda, Salai St, Chalai Bazar, Ramanathapuram, Tamil Nadu 623501, India"
        ],
        "position": {
            "lat": 9.36968,
            "lng": 78.833963
        },
        "placeId": "ChIJHahh_6OiATsRVvzI9ZCqjJ0"
    },
    {
        "title": "Thangamayil Salem",
        "addressLines": [
            "62-66, No. 62-66, Bazaar St, Anna Colony, I Agraharam, Salem, Tamil Nadu 636001, India"
        ],
        "position": {
            "lat": 11.653843,
            "lng": 78.160744
        },
        "placeId": "ChIJV87LctLxqzsRjYjwBF01NJA"
    },
    {
        "title": "Thangamayil Sankarankovil",
        "addressLines": [
            "8, South Car Street, Sankarankovil, Tirunelveli District, Tamil Nadu, 627754."
        ],
        "position": {
            "lat": 8.725024,
            "lng": 77.686227
        },
        "placeId": "hTdC-EAgqFAoSCbUKk-BiEQQ7EX6gsqAICqWe"
    },
    {
        "title": "Thangamayil Sivagangai",
        "addressLines": [
            "shop, 4, 292, Nehru Bazaar, Aranmanai Vaasal, Sivaganga, Tamil Nadu 630561, India"
        ],
        "position": {
            "lat": 9.84413,
            "lng": 78.485654
        },
        "placeId": "cBGq7Q-gA7Efv4D4pgNeIiEgdzaG9wLCA0"
    },
    {
        "title": "Thangamayil Sivakasi",
        "addressLines": [
            "144a, NRKR Rd, Palaniandavar Colony, Kaliappa Nagar, Sivakasi, Tamil Nadu 626123, India"
        ],
        "position": {
            "lat": 9.448518,
            "lng": 77.798986
        },
        "placeId": "ChIJ-8lPMOTOBjsRVoalq8G9D44"
    },
    {
        "title": "Thangamayil  Tenkasi",
        "addressLines": [
            "244, 246, Railway Feeder Rd, Tenkasi, Tamil Nadu 627811, India"
        ],
        "position": {
            "lat": 8.964516,
            "lng": 77.306096
        },
        "placeId": "ChIJcWL0AuEpBDsRgU-Hpg5abvoSAzI0NA"
    },
    {
        "title": "Thangamayil Thirumangalam",
        "addressLines": [
            "339, Usilampatti Rd, Peraiyur, Tamil Nadu 625703, India"
        ],
        "position": {
            "lat": 9.738586,
            "lng": 77.791113
        },
        "placeId": "ChIJV9WdXh0pBzsRqt8i2P54Tl4QkdKQc7"
    },
    {
        "title": "Thangamayil Tiruchirappalli",
        "addressLines": [
            "46/1, Chinna Kadai Street, Singarathope, Theradi Bazar, Devathanam, Tiruchirappalli - 620002, Tamil Nadu, India"
        ],
        "position": {
            "lat": 10.826391,
            "lng": 78.698942
        },
        "placeId": "ChIJJawxuq31qjsR92O9Ec8Z5xQQLioUChIJ"
    },
    {
        "title": "Thangamayil Tirunelveli",
        "addressLines": [
            "406, Tirunelveli - Pottalpudur Rd, Tirunelveli Town, Tirunelveli, Tamil Nadu 627004, India"
        ],
        "position": {
            "lat": 8.727492,
            "lng": 77.668197
        },
        "placeId": "ChIJ4yFI1FsRBDsR6bjoTHodhH4"
    },
    {
        "title": "Thangamayil Tiruppur",
        "addressLines": [
            "109, Kumaran Rd, Kannipiran Colony, Valipalayam, Tiruppur, Tamil Nadu 641601, India"
        ],
        "position": {
            "lat": 11.104049,
            "lng": 77.345414
        },
        "placeId": "ChIJlTN5PbsHqTsRG5uI5U3Y060"
    },
    {
        "title": "Thangamayil Tirupuvanam",
        "addressLines": [
            "No 420, Shop No A3 Muthu rowthar complex, Madurai, Mandapam Main Rd, Tiruppuvanam, Tamil Nadu 630611, India"
        ],
        "position": {
            "lat": 9.824835,
            "lng": 78.257412
        },
        "placeId": "ChIJf4lktajdADsRxEom7JZx-2U"
    },
    {
        "title": "Thangamayil Tuticorin",
        "addressLines": [
            "351, West Great Cotton Road, Shanmugapuram, Thoothukudi, Tamil Nadu 628001, India"
        ],
        "position": {
            "lat": 8.803989,
            "lng": 78.151078
        },
        "placeId": "ChIJvzQ1Mp_vAzsRdvEQ0vK_0Ko"
    },
    {
        "title": "Thangamayil Udumalaipettail",
        "addressLines": [
            "1/1, Palani Main Road, Anusham theatre complex, H7P2+CP6 Bus Stand, opposite Udumalpet, Anusham Nagar, Udumalaipettai, Tamil Nadu 642126, India"
        ],
        "position": {
            "lat": 10.586058,
            "lng": 77.251601
        },
        "placeId": "ChIJ575Hg1LMqTsRz-ogFBsPaOw"
    },
    {
        "title": "Thangamayil Vadipatti",
        "addressLines": [
            "290, Vadipatti Main Rd, opposite Nadar Kalyana Mahal, Vadipatti, Tamil Nadu 625218, India"
        ],
        "position": {
            "lat": 10.083858,
            "lng": 77.964403
        },
        "placeId": "ChIJKzxGWpi1ADsRwIVGAqL-AJE"
    },
    {
        "title": "Thangamayil Valliyoor",
        "addressLines": [
            "274, Main Rd, Malappuram, Valliyur, Vadakkuvalliyur, Tamil Nadu 627117, India"
        ],
        "position": {
            "lat": 8.386241,
            "lng": 77.609634
        },
        "placeId": "ChIJC9gvKbtnBDsRtpXLuPtqoP4"
    },
    {
        "title": "Thangamayil Anna Nagar",
        "addressLines": [
            "330, 80 Feet Rd, Anna Nagar, Madurai, Sathamangalam, Tamil Nadu 625020, India"
        ],
        "position": {
            "lat": 9.918747,
            "lng": 78.148912
        },
        "placeId": "ChIJPQrizK7FADsRZAsiqLdFjVY"
    },
    {
        "title": "Thangamayil Theni",
        "addressLines": [
            "4, Chinnamanur, Theni,Tamil Nadu 625533, India"
        ],
        "position": {
            "lat": 9.842702,
            "lng": 77.380138
        },
        "placeId": "ChIJP2h5QncRBzsRqqDG34ZHa3g"
    },
    {
        "title": "Thangamayil Surandai",
        "addressLines": [
            "AG CHURCH, 9 (2, opposite Surandai, Sivagurunathapuram, Surandai, Tamil Nadu 627859, India"
        ],
        "position": {
            "lat": 8.977066,
            "lng": 77.422065
        },
        "placeId": "ChIJUxjmkNedBjsR1v6aSoCOmW0"
    },
    {
        "title": "Thangamayil Rameshwaram",
        "addressLines": [
            "50, Varthagan Street, Rameswaram, Tamil Nadu 623526, India"
        ],
        "position": {
            "lat": 9.286391,
            "lng": 79.313131
        },
        "placeId": "ChIJb1JLdCvjATsRSI3nG3yHIsk"
    },
    {
        "title": "Thangamayil Melur",
        "addressLines": [
            "NO. 694, BK BALU NAIDU COMPLEX, Trichy Main Rd, Melur, Tamil Nadu 625106, India"
        ],
        "position": {
            "lat": 10.03051,
            "lng": 78.336371
        },
        "placeId": "ChIJudk_vhPrADsR9syxK_Sczpc"
    },
    {
        "title": "BROOKEFIELDS Coimbatore",
        "addressLines": [
            "Brookefields, Sukrawar Pettai, R.S. Puram, Coimbatore, Tamil Nadu 641001, India"
        ],
        "position": {
            "lat": 11.008915,
            "lng": 76.959445
        },
        "placeId": "ChIJnSTwRAFZqDsRX3_5oQeNPvg"
    },
    {
        "title": "AKSHAYAM SILKS  Kallakuruchi",
        "addressLines": [
            "Durugam Rd, Varathakattanur, Raja Nagar, Kallakurichi, Tamil Nadu 606213, India"
        ],
        "position": {
            "lat": 11.737445,
            "lng": 78.969052
        },
        "placeId": "ChIJvRGuT9dnqzsRepO0TjY1v5I"
    },
    {
        "title": "Seemati Coimbatore",
        "addressLines": [
            "311, Big Bazaar Street, Big Bazaar Street, Opp. Kamatchiamman Koil, Katteri Chettiar Thottam, Selvapuram North, Coimbatore, Tamil Nadu 641001, India"
        ],
        "position": {
            "lat": 10.992545,
            "lng": 76.951372
        },
        "placeId": "ChIJkQVca1JYqDsR0zeSZgvxyws"
    },
    {
        "title": "SEEMATI Thiruvarur",
        "addressLines": [
            "Old No.2756 New No.1/10,Panagal Park, near Bus Stand, Rajgopal Nagar, Santhamangalam, Madappuram, Thiruvarur, Tamil Nadu 610001, India"
        ],
        "position": {
            "lat": 10.771243,
            "lng": 79.635551
        },
        "placeId": "ChIJhQjyIb9HVToRznxeNxA1j_I"
    },
    {
        "title": "ATHIKALATHU Trichy",
        "addressLines": [
            "867 2 3, 4, N Main St, Pudukotai, Wadair Santha, Santhanathapuram, Pudukkottai, Tamil Nadu 622001, India"
        ],
        "position": {
            "lat": 10.387056,
            "lng": 78.81185
        },
        "placeId": "ChIJF9Vi70h4ADsRpbArM1SSdR8SBzg2NyAyIDM"
    },
    {
        "title": "FEMINA Thanjavur",
        "addressLines": [
            "107, Williams Rd, Cantonment, Tiruchirappalli, Tamil Nadu 620001, India"
        ],
        "position": {
            "lat": 10.800056,
            "lng": 78.681834
        },
        "placeId": "ChIJcx0MfRP1qjsRyZbmWLd6504QayoUChIJhfZru"
    },
    {
        "title": "MAHALAKSHMI Thanjavur",
        "addressLines": [
            "SFNO.200/8A6E, SRI MAKHALAXMI SAREES AND FABRICS, TRICHY ROAD, THURAIYUR POST, Tiruchirappalli, Tamil Nadu, 621010"
        ],
        "position": {
            "lat": 10.970682,
            "lng": 78.401847
        },
        "placeId": "ChIJ91yR4RerqzsR1g6IwMoiMOM"
    },
    {
        "title": "POTHYS WOMANS Chennai",
        "addressLines": [
            "Old New 18/1121, Womans World, Usman Road, T Nagar Chennai - 600017."
        ],
        "position": {
            "lat": 13.03736,
            "lng": 80.22892
        },
        "placeId": "ChIJsS2X7yVnUjoR3bhKRiir_n4"
    },
    {
        "title": "THAILA SILKS Kumbakonam",
        "addressLines": [
            "86, SREE VENUGOPAL TOWERS, NAGESHWARAN NORTH STREET, KUMBAKONAM-612001"
        ],
        "position": {
            "lat": 13.03736,
            "lng": 80.22892
        },
        "placeId": "ChIJQRc9t0zNqjsRrB9fmwsdBoE"
    },
    {
        "title": "SPP SILKS Coimbatore",
        "addressLines": [
            "289, Oppanakara St., Town Hall, Coimbatore, Tamil Nadu 641001, India"
        ],
        "position": {
            "lat": 10.995603,
            "lng": 76.959436
        },
        "placeId": "ChIJrS_77QtZqDsR0njBMXf7BaU"
    },
    {
        "title": "GANAPTHY SILKS coimbatore",
        "addressLines": [
            "135-136, SANJAY COMPLEX, RAJA STREET, COIMBATORE, Coimbatore, Tamil Nadu, 641001"
        ],
        "position": {
            "lat": 10.994773,
            "lng": 76.95748
        },
        "placeId": "ChIJP2RDDMFZqDsRMLzk6q-jfwA"
    },
    {
        "title": "POTHYS coimbatore",
        "addressLines": [
            "East, 399, Oppanakara St., Area, Coimbatore, Tamil Nadu 641001, India"
        ],
        "position": {
            "lat": 10.999699,
            "lng": 76.96228
        },
        "placeId": "ChIJzf_3sglZqDsRVcO5X7EVOic"
    },
    {
        "title": "POTHYS salem",
        "addressLines": [
            "No.4 Omalur Main Road, Salem - 636009"
        ],
        "position": {
            "lat": 11.666038,
            "lng": 78.144238
        },
        "placeId": "ChIJM_aldzr6qzsRPtdim88WeCM"
    },
    {
        "title": "POTHYS Chennai",
        "addressLines": [
            "No.84 85, Pothys Hyper, Usman Road, T Nagar Chennai - 600017."
        ],
        "position": {
            "lat": 13.035507,
            "lng": 80.230471
        },
        "placeId": "ChIJAzU83P9mUjoRVnShDJT2R4E"
    },
    {
        "title": "POTHYS  Pondicherry",
        "addressLines": [
            "400, Anna Salai, near Ram International Hotel, Govindhasalai, Subbarayapillai Chathiram, Puducherry, 605001, India"
        ],
        "position": {
            "lat": 11.933585,
            "lng": 79.824351
        },
        "placeId": "ChIJ9z_qS39hUzoR8Z3UIeohvGQ"
    },
    {
        "title": "SPP  Erode",
        "addressLines": [
            "6, Eswaran Kovil St, Erode Fort, Erode, Tamil Nadu 638001, India"
        ],
        "position": {
            "lat": 11.341612,
            "lng": 77.728013
        },
        "placeId": "ChIJV8lbp0ZvqTsR4K_xGRwKvjg"
    },
    {
        "title": "APN MART Ariyalur",
        "addressLines": [
            "19, MP Kovil St, near APN Silks and Readymades, Ezhilagam, Ethraj Nagar, Ariyalur, Tamil Nadu 621704, India"
        ],
        "position": {
            "lat": 11.13675,
            "lng": 79.073809
        },
        "placeId": "ChIJs_JiY3vfqjsRXVgfnJSUe70"
    },
    {
        "title": "PATHANJALI Trichy",
        "addressLines": [
            "107,Mouna madam pathanjali silks, Bharathiar salai,tiruchirapalli-620001."
        ],
        "position": {
            "lat": 10.8005,
            "lng": 78.688395
        },
        "placeId": "ChIJ1Zk01BD1qjsRDr54YpISmTg"
    },
    {
        "title": "THENI ANANTHAM madurai",
        "addressLines": [
            "19,Thiruvenkadapuram,Alwarpuram,madurai-625002."
        ],
        "position": {
            "lat": 9.928613,
            "lng": 78.135064
        },
        "placeId": "ChIJCxXOC5fFADsR8MpT1yN4oZM"
    },
    {
        "title": "RAJMAHAL madurai",
        "addressLines": [
            "37, Vengalakadai St, Madurai Main, Madurai, Tamil Nadu 625001, India"
        ],
        "position": {
            "lat": 9.918741,
            "lng": 78.122122
        },
        "placeId": "ChIJ_egcq4TFADsR_gEFAD1QG9M"
    },
    {
        "title": "GANAPTHY SILKS Theni",
        "addressLines": [
            "153, Madurai Main Rd, Sunnambu Kalavara, NRT Nagar, Theni, Tamil Nadu 625531, India"
        ],
        "position": {
            "lat": 10.010234,
            "lng": 77.477011
        },
        "placeId": "ChIJR39vWa8UBzsRkbVKzM5ap10QmQEqFAo"
    },
    {
        "title": "NPT TEX Dindigul",
        "addressLines": [
            "171, E Car St, Begambur, Tamil Nadu 624001, India"
        ],
        "position": {
            "lat": 10.363421,
            "lng": 77.971761
        },
        "placeId": "ChIJzZEPcPaqADsRmIB6ZBt7nj4"
    },
    {
        "title": "POTHIGAI Tirunelveli",
        "addressLines": [
            "No.216, Abitha Plaza, Koolakadai street, Tenkasi, Tirunelveli -627811"
        ],
        "position": {
            "lat": 8.728328,
            "lng": 77.684611
        },
        "placeId": "ChIJTXEshGQRBDsRRBy7WnWAci4"
    },
    {
        "title": "CD&CO Thiruchendur",
        "addressLines": [
            "815, 130, N Car St, Thiruchendur, Tamil Nadu 628215, India"
        ],
        "position": {
            "lat": 8.497557,
            "lng": 78.120556
        },
        "placeId": "WmEIIBKhQKEgl9znlqGJADOxFSyvLR5i2WXRIDODE1"
    },
    {
        "title": "CD&CO  Thoothukudi",
        "addressLines": [
            "158, Palayamkottai Rd, Pudugramam, Thoothukudi, Tamil Nadu 628003, India"
        ],
        "position": {
            "lat": 8.801692,
            "lng": 78.137793
        },
        "placeId": "ChIJTUBOIL7vAzsRMd53PoEdu2M"
    },
    {
        "title": "MAHARANI SILKS Thoothukudi",
        "addressLines": [
            "70, Kochi-Madurai-Tondi Point Rd, near Maharani Silks, Aranmanai Vaasal, Sivaganga, Tamil Nadu 630561, India"
        ],
        "position": {
            "lat": 9.848383,
            "lng": 78.487254
        },
        "placeId": "ChIJ8azjr9r6ADsRDsCbdmo_pos"
    },
    {
        "title": "SHONA Sivaganga",
        "addressLines": [
            "9, 9, Trivandrum Rd, Vannarpettai, Tirunelveli, Tamil Nadu 627003, India"
        ],
        "position": {
            "lat": 8.727656,
            "lng": 77.721321
        },
        "placeId": "ChIJBeUuPmgSBDsR0GBe6nOKZ3gSATk"
    },
    {
        "title": "MILAN Madurai",
        "addressLines": [
            "1st Floor ,FF114 MILANEM MALL, 100 FEET ROAD, K K NAGAR, MADURAI - 625020"
        ],
        "position": {
            "lat": 9.927788,
            "lng": 78.14317
        },
        "placeId": "ChIJxaQNWbrFADsRUGZzB4nX7RU"
    },
    {
        "title": "AKCHAYA VELLI JEWELERY Theni",
        "addressLines": [
            "441/2A, Opposite to Convent Hospital, Periyakulam Road, Theni, Tamil Nadu 625531"
        ],
        "position": {
            "lat": 10.036799,
            "lng": 77.485845
        },
        "placeId": "ChIJtWhXqE5rBzsRs3CNHzoB8q8"
    },
    {
        "title": "SHANMUGAM JEWELLERY Annur",
        "addressLines": [
            " No. 6, Main Road, Annur Tamil Nadu- 641653"
        ],
        "position": {
            "lat": 11.193221,
            "lng": 77.108712
        },
        "placeId": "J268s0338qDsR0ht_dIi6rGQQBioUChIJza5GxXD8qDsRzTuibAYAnok"
    },
    {
        "title": "RR FASHION JEWELLERY  Attur",
        "addressLines": [
            "1, Ranipet Main Rd, Attur, Tamil Nadu 636102, India"
        ],
        "position": {
            "lat": 11.599347,
            "lng": 78.597858
        },
        "placeId": "ChQKEgmN6Ep4RpyrOxGDk-H5gYLemBABKhQKEglV4ZgERpyrOxFxNrCzvsht9Q"
    },
    {
        "title": "GOLD PALACE JEWELLERY Avinashi",
        "addressLines": [
            "Old Bus Stand, Main Road, East Car Street, Avinashi, Tiruppur District, Tamil Nadu, India - 641654\n\n\n\n\n\n\n"
        ],
        "position": {
            "lat": 11.197677,
            "lng": 77.268194
        },
        "placeId": "ChIJA48y1psDqTsRFR7i8UOq1Jo"
    },
    {
        "title": "TVS JEWELLERY Cheyyar",
        "addressLines": [
            "38, Gandhi Road, Cheyyar, Tamil Nadu, India - 604407"
        ],
        "position": {
            "lat": 12.659003,
            "lng": 79.540817
        },
        "placeId": "ChIJrZHQqm3XUjoRnnhZLuBw4M0"
    },
    {
        "title": "KASTHURIBAI TEXTILE Chidambaram",
        "addressLines": [
            "Nmp readymades pvt.33-43 west car street,Chidambaram"
        ],
        "position": {
            "lat": 11.399801,
            "lng": 79.691087
        },
        "placeId": "ChIJY5J3lK3DVDoRbvgcMoMQPoc"
    },
    {
        "title": "SILVER PALACE Coimbatore",
        "addressLines": [
            "936, Cross Cut Road, Gandhipuram, Coimbatore, Tamil Nadu, India - 641012\n\n\n\n\n\n\n\n\n"
        ],
        "position": {
            "lat": 11.017122,
            "lng": 76.965826
        },
        "placeId": "EKgHKhQKEgllNQ6HVVioOxECegCmGvfexw"
    },
    {
        "title": "RM MAHAVEER JEWELLERS Cuddalore",
        "addressLines": [
            "#95, Sannathi Street, Thirupathripuliyur, Cuddalore, Tamil Nadu, India - 607002"
        ],
        "position": {
            "lat": 11.748117,
            "lng": 79.750821
        },
        "placeId": "ChIJHT-oH2OYVDoRWP5AS4gy_4s"
    },
    {
        "title": "ORGINAL VASAVI JEWELERY - Dindigul Dindigul",
        "addressLines": [
            "384-R, Oddanchatram - Dharapuram Rd, Oddanchatram, Tamil Nadu 624619, India"
        ],
        "position": {
            "lat": 10.489878,
            "lng": 77.745925
        },
        "placeId": "ChIJMVc_wjz7qTsR7i4l9yppAzU"
    },
    {
        "title": "ASHOK JEWELLERS AFG Gudiyatham",
        "addressLines": [
            "\"No. 20, Thalayatham Bazaar, Gudiyatham, Tamil Nadu, India - 632602\n\n\n\n\n\n\n\""
        ],
        "position": {
            "lat": 12.941547,
            "lng": 78.865014
        },
        "placeId": "ChIJafGyVGdtrTsR7Eu1SuvUjRE"
    },
    {
        "title": "SRI VASAVI SILVERS Jeyakondam",
        "addressLines": [
            "39, Bazaar Street, Jeyankondam, Tamil Nadu, India - 621802"
        ],
        "position": {
            "lat": 11.212246,
            "lng": 79.364041
        },
        "placeId": "OxGS0WPQ1NrW2hAnKhQKEgldr7xRPCurOxGakSy7JxkY8Q"
    },
    {
        "title": "RAJAM CHETTY Kanchipuram",
        "addressLines": [
            "No. 28B, West Raja Street, Kanchipuram, Tamil Nadu-631501 ,India\n\n\n\n\n\n\n"
        ],
        "position": {
            "lat": 12.841371,
            "lng": 79.701045
        },
        "placeId": "ChIJIajMg1HCUjoRBbp8xQBNKmI"
    },
    {
        "title": "THALIR Kovilpatti",
        "addressLines": [
            "\"No. 437-C3/1, Ettayapuram Road, SIDCO, Kovilpatti, Tamil Nadu, India - 628501\n\n\n\n\n\n\""
        ],
        "position": {
            "lat": 9.175214,
            "lng": 77.8802
        },
        "placeId": "GOxHwJ2-JUvKHnBC1AyoUChIJ_3kRLXCyBjsRwoaa_CF2zcs"
    },
    {
        "title": "ABHI SILVERS  Krishnakiri",
        "addressLines": [
            "439, Bangalore Rd, near Rountana, near army canteen, Bairappa Colony, Veerappa Nagar, Krishnagiri, Tamil Nadu 635001, India"
        ],
        "position": {
            "lat": 12.519835,
            "lng": 78.221516
        },
        "placeId": "ChIJNfiNpZU0rDsRaJq1c9nlFKE"
    },
    {
        "title": "UMA JEWELERY WORKS  Krishnakiri",
        "addressLines": [
            "Bangalore Road, Krishnagiri, Tamil Nadu- 635001,India\n\n\n\n\n\n\n"
        ],
        "position": {
            "lat": 12.525924,
            "lng": 78.214772
        },
        "placeId": "yVNKw7EUacgBUpntO4EhQKEgnLufvfvTSsOxEdf22GyjKB-Q"
    },
    {
        "title": "VENKATESHWARA JEWELLERY Namakkal",
        "addressLines": [
            "No. 173, Bazaar Street, Namakkal, Tamil Nadu 637001"
        ],
        "position": {
            "lat": 11.222657,
            "lng": 78.168097
        },
        "placeId": "ESm2UFo0_43fEK0BKhQKEgm_rLie7c6rOxEOwvLRVcBsSg"
    },
    {
        "title": "SRI AUM JEWELERY Neyveli",
        "addressLines": [
            "5/1 Main Bazaar Neyveli, Block 12, Neyveli Twp Block-12, T T K Salai, Neyveli T.S, Tamil Nadu 607803, India"
        ],
        "position": {
            "lat": 11.61351,
            "lng": 79.485853
        },
        "placeId": "ChIJHxbwCEmxVDoRH9eIp9QaCVc"
    },
    {
        "title": "THE BIG SHOP Ooty",
        "addressLines": [
            "38, 39, Commercial Road, Ooty, Tamil Nadu 643001"
        ],
        "position": {
            "lat": 11.409568,
            "lng": 76.705625
        },
        "placeId": "ChYKFAoSCV8hXzKMvag7EZy2qXTkFIGCEgIzOA"
    },
    {
        "title": "RKP JEWELERY Pattukottai",
        "addressLines": [
            "37, Thalayari St, Mainckam Colony, Pattukkottai, Tamil Nadu 614601, India\n\n"
        ],
        "position": {
            "lat": 10.423424,
            "lng": 79.317243
        },
        "placeId": "DsReth3LTUdUjwQJSoUChIJ6xVuZJYAADsRWP2zXUzeTRg"
    },
    {
        "title": "SIVA VALLI VILAS  Pondy",
        "addressLines": [
            "259, Jawaharlal Nehru St, Ilango Nagar, Puducherry, 605001, India"
        ],
        "position": {
            "lat": 11.93669,
            "lng": 79.825656
        },
        "placeId": "EUS9n1YTgFgsEIMCKhQKEgkthjD41GNTOhHEFWXmTNNlGg"
    },
    {
        "title": "SRIWIN JEWELLERY RASIPURAM",
        "addressLines": [
            "156, Thiruvalluvar Salai, JJ Nagar, Velur, Tamil Nadu 637015, India"
        ],
        "position": {
            "lat": 11.107562,
            "lng": 78.007619
        },
        "placeId": "ChIJJwwM-bHUqzsROVwfcLM0Les"
    },
    {
        "title": "ESWAR JEWELLERS Salem",
        "addressLines": [
            "751, Salem Main Road, Puthiragoundanpalayam, Salem - 636119, Tamil Nadu"
        ],
        "position": {
            "lat": 11.651187,
            "lng": 78.477562
        },
        "placeId": "ChIJJ-VGLqqaqzsRvubPU69hASo"
    },
    {
        "title": "SAKTHI JEWELERY Tirupur",
        "addressLines": [
            "1st Floor, 141, PN Road, Near Mettupalayam Bus Stop, Tirupur - 641602, Tamil Nadu"
        ],
        "position": {
            "lat": 11.120105,
            "lng": 77.340274
        },
        "placeId": "ChIJv8sGMVMGqTsRjN4v7-C3Oh8"
    },
    {
        "title": "Pachaiyappas silks  Tiruvannamalai",
        "addressLines": [
            "9, Polur Rd, opposite to bus stand, Chettikulam, Tiruvannamalai, Tamil Nadu 606601, India"
        ],
        "position": {
            "lat": 12.240287,
            "lng": 79.072756
        },
        "placeId": "ChIJAS4Q4YzArDsRP0NkKpZDvgE"
    },
    {
        "title": "Pachaiyappas silks Vellore",
        "addressLines": [
            "8, Dharmaraja Kovil St, Thottapalayam, Vellore, Tamil Nadu 632004, India"
        ],
        "position": {
            "lat": 12.92812,
            "lng": 79.1336
        },
        "placeId": "CWfx55mVOK07EXsY2Is4EYnB"
    },
    {
        "title": "KANYA RAMESH Villpuram",
        "addressLines": [
            "186, Kamarajar St, Thiru Vi Ka Street, Viluppuram, Tamil Nadu 605602, India"
        ],
        "position": {
            "lat": 11.945111,
            "lng": 79.494878
        },
        "placeId": "ChIJ43BeWsBWUzoR03GiRhraYHE"
    },
    {
        "title": "BANU JEWELLERY Coimbatore",
        "addressLines": [
            "241, Trichy Main Road, Sulur, Coimbatore, Tamil Nadu, India - 641402"
        ],
        "position": {
            "lat": 11.028633,
            "lng": 77.130674
        },
        "placeId": "ChIJPUm4z7ZVqDsRUciCXxpNY6k"
    },
    {
        "title": "PACHAYAPPAS Chennai",
        "addressLines": [
            "No. 55, North Usman Road, Near Panagal Park, T. Nagar, Chennai, Tamil Nadu, India - 600017"
        ],
        "position": {
            "lat": 13.042513,
            "lng": 80.232509
        },
        "placeId": "ChIJK7LdI1ZmUjoRi3IEzkOGwnM"
    },
    {
        "title": "KRBS JEWELERY Tirupur",
        "addressLines": [
            "23, Municipal Office Road, Gobald Tetris, Tirupur - 641604, Tamil Nadu"
        ],
        "position": {
            "lat": 11.102491,
            "lng": 77.3467
        },
        "placeId": "ChIJufsUf7sHqTsRiXWUn6o8awA"
    },
    {
        "title": "SNS THANGA MAALIGAI Dhamapuri",
        "addressLines": [
            "52, Arumuga Asari Street, Dharmapuri, Tamil Nadu 636701"
        ],
        "position": {
            "lat": 12.133409,
            "lng": 78.163078
        },
        "placeId": "ChIJgawoJPkWrDsRyac3eacY2XE"
    },
    {
        "title": "BALAJI JEWELLERS (Both FJ and Idol) Alangayam",
        "addressLines": [
            "15, Gandhi Road, Alangayam, Thirupathur District, Tamil Nadu - 635701"
        ],
        "position": {
            "lat": 12.60672,
            "lng": 78.737007
        },
        "placeId": "ChIJiyOskzoCrTsRc_FKs5PDGb4"
    },
    {
        "title": "KMD JEWELLERY Ambur",
        "addressLines": [
            "No 29, sharoff bazzar, Gangapuram, Naganadi, Ambur, Tamil Nadu 635802, India"
        ],
        "position": {
            "lat": 12.788788,
            "lng": 78.716035
        },
        "placeId": "ChIJbf7QNgAJrTsRh9pK0EKxOX8"
    },
    {
        "title": "Shree Jain Jewellers Arakkonam",
        "addressLines": [
            "No. 43 Bazaar Street, Arakonam, Ranipet District, Tamil Nadu, India - 631001"
        ],
        "position": {
            "lat": 13.077479,
            "lng": 79.673994
        },
        "placeId": "OpEhQKEgnXp76xbbxSOhHk3KsJIWMoTQ"
    },
    {
        "title": "T2K TEXTILES ARCOT",
        "addressLines": [
            "Old No. 90, New No. 188 Anna Salai, Arcot, Ranipet District, Tamil Nadu, India - 632503"
        ],
        "position": {
            "lat": 12.921667,
            "lng": 79.333423
        },
        "placeId": "ChYKFAoSCbOb4binNa07EYiz2Od_wqA2EgI5MA"
    },
    {
        "title": "BOMBAY BAZAAR Bodinayakanur",
        "addressLines": [
            "285X+MHH, Subanchetty Street, Karattupatti, Bodinayakanur, Tamil Nadu 625513, India"
        ],
        "position": {
            "lat": 10.009194,
            "lng": 77.348982
        },
        "placeId": "ChIJw6IH7wMNBzsRZT1crLXy03c"
    },
    {
        "title": "SUDHA JEWELLERY Chengam",
        "addressLines": [
            "No. 17, Bazaar Street, Chengam, Tamil Nadu, India - 606701"
        ],
        "position": {
            "lat": 12.311227,
            "lng": 78.793195
        },
        "placeId": "CjcSEBEqFAoSCTMaal6d8aw7EZXY3zaHEZvj"
    },
    {
        "title": "OKJ Chennai",
        "addressLines": [
            "74, N Usman Rd, opp. Ranganathan Street, Postal Colony, T. Nagar, Chennai, Tamil Nadu 600017, India"
        ],
        "position": {
            "lat": 13.036946,
            "lng": 80.230895
        },
        "placeId": "ChIJPx9elv9mUjoRW9B5ZbgYc0E"
    },
    {
        "title": "THAMBI CHUDIDHAR MALL Chennai",
        "addressLines": [
            "18/24, Lakshmi Amman Koil St, near Mugambikai Busstop, Selli Amman Nagar, Kolathur, Chennai, Tamil Nadu 600099, India"
        ],
        "position": {
            "lat": 13.126015,
            "lng": 80.219132
        },
        "placeId": "ChIJ3d2mdbdkUjoRQx3SEIJsrxE"
    },
    {
        "title": "ANAND GOLD HOUSE Chennai",
        "addressLines": [
            "Konnur High road 86/223, Ayanavaram, Mettu St, V.P.Colony, corner, Chennai, Tamil Nadu 600023, India"
        ],
        "position": {
            "lat": 13.098518,
            "lng": 80.233739
        },
        "placeId": "ChIJ6TKTZ8tlUjoRe1TDDg9QRYA"
    },
    {
        "title": "THE VELLI SHOP Chennai",
        "addressLines": [
            "Thyagaraya Road, 116, N Boag Rd, Drivers Colony, T. Nagar, Chennai, Tamil Nadu 600017, India"
        ],
        "position": {
            "lat": 13.040189,
            "lng": 80.244271
        },
        "placeId": "ChIJG3Ic7E1mUjoROMz4UoWJZ_Q"
    },
    {
        "title": "SWARNAJALI JEWELLERY Chinna Salem",
        "addressLines": [
            "No. 646, Trichy Main Road, Gugai, Salem, Tamil Nadu, India - 636006"
        ],
        "position": {
            "lat": 11.64811,
            "lng": 78.156256
        },
        "placeId": "ChIJWSRVUivwqzsRTnfX_Ft_cfc"
    },
    {
        "title": "KVRC CHITHOOR Chitoor",
        "addressLines": [
            "No. 12-147, Bazar Street, Chittoor, Andhra Pradesh, India - 517001"
        ],
        "position": {
            "lat": 13.218827,
            "lng": 79.09597
        },
        "placeId": "RAMKhQKEgmVOk27p16tOxGVB9N6hMz6Pw"
    },
    {
        "title": "RASI THANGA MALIGAI Avinachi",
        "addressLines": [
            "19 West Car Street, Avinashi, Tiruppur District, Tamil Nadu, India - 641654"
        ],
        "position": {
            "lat": 11.189766,
            "lng": 77.268859
        },
        "placeId": "ChIJK1FC0qQDqTsRyA5RycmM1Z8"
    },
    {
        "title": "ARASAN JEWELLERY Coimbatore",
        "addressLines": [
            "Narasipuram Main Road, Thondamuthur, Coimbatore, Tamil Nadu, India - 641109"
        ],
        "position": {
            "lat": 10.992725,
            "lng": 76.840063
        },
        "placeId": "ChIJ_0fT9SVeqDsRWQ98RA1ByXY"
    },
    {
        "title": "COVAI GIFT PARADAISE Coimbatore",
        "addressLines": [
            "157/5&6, SPK Building, Sathy Main Road, Saravanampatti, Coimbatore, Tamil Nadu, India - 641015"
        ],
        "position": {
            "lat": 11.076329,
            "lng": 77.002135
        },
        "placeId": "ChIJd-sC1vP3qDsRjUCKyJ7GsCw"
    },
    {
        "title": "KOTA GOLD Coimbatore",
        "addressLines": [
            "948, Crosscut Road, Gandhipuram, Coimbatore, Tamil Nadu, India - 641012"
        ],
        "position": {
            "lat": 11.017242,
            "lng": 76.964076
        },
        "placeId": "ChIJL6bYDv9YqDsR8NkLC2aDKLU"
    },
    {
        "title": "COVAI SREE ABIRAMI JEWELLERS Coimbatore",
        "addressLines": [
            "607, Raja Street, Coimbatore, Tamil Nadu, India - 641001"
        ],
        "position": {
            "lat": 10.994618,
            "lng": 76.95608
        },
        "placeId": "ChIJ3YH_uQtZqDsRNSGYwiwCi7w"
    },
    {
        "title": "MEENA JEWELERY Coimbatore",
        "addressLines": [
            "426-430, Trichy Road, Singanallur, Coimbatore, Tamil Nadu, India - 641005"
        ],
        "position": {
            "lat": 11.001359,
            "lng": 77.034735
        },
        "placeId": "ChIJAZ9npKZZqDsRhpDynTawK1E"
    },
    {
        "title": "N&N EXQUISITE JEWELLERY Coimbatore",
        "addressLines": [
            "P-1, Kovaipudur, Coimbatore, Tamil Nadu, India - 641042"
        ],
        "position": {
            "lat": 10.949119,
            "lng": 76.929267
        },
        "placeId": "ChIJQ_wXXfJbqDsRiQ-JxDoHdOA"
    },
    {
        "title": "NEW SRI VASAVI JEWELERY Coimbatore",
        "addressLines": [
            "334, Raja St, near RAMANA ONLINE SERVICES, Town Hall, Coimbatore, Tamil Nadu 641001, India"
        ],
        "position": {
            "lat": 10.994175,
            "lng": 76.955529
        },
        "placeId": "ChIJyXwEqw1ZqDsRAqZHX-JI_iY"
    },
    {
        "title": "LATHA JEWELERY Coimbatore",
        "addressLines": [
            "N-Block No. 4A, Kovaipudur, Coimbatore, Tamil Nadu, India - 641042"
        ],
        "position": {
            "lat": 10.943955,
            "lng": 76.938181
        },
        "placeId": "ChIJx8FO_JRbqDsRRuO99wYo9cgSB04tQmxvY2s"
    },
    {
        "title": "KANDHAN THANGA MALIGAI Coimbatore",
        "addressLines": [
            "215/1, Maruthamalai Rd, Vadavalli, Sri Ram Avenue, Coimbatore, Tamil Nadu 641041, India"
        ],
        "position": {
            "lat": 11.028536,
            "lng": 76.897749
        },
        "placeId": "ChIJa-nhYz5fqDsRH6NH0-0BnTg"
    },
    {
        "title": "RAMYAM JEWELLERY Coimbatore",
        "addressLines": [
            "38, Thadagam Road, Velandipalayam, Coimbatore, Tamil Nadu, India - 641025\n\n\n\n\n\n\n"
        ],
        "position": {
            "lat": 11.030271,
            "lng": 76.93145
        },
        "placeId": "ChIJ_QTYR0pfqDsRWPhPoXFcLro"
    },
    {
        "title": "SUBIKSHA JEWELERY Coimbatore",
        "addressLines": [
            "4d, Union Rd, north, Narasimhanaickenpalayam, Tamil Nadu 641031, India"
        ],
        "position": {
            "lat": 11.11477,
            "lng": 76.937464
        },
        "placeId": "ChIJXyE9TJL2qDsRpz_5Eh-IvLU"
    },
    {
        "title": "SRI DEVI JEWELLERY Coimbatore",
        "addressLines": [
            "Shreedevi jewellers, 64 A, Avaram Palayam Rd, G K D Nagar, New Siddhapudur, Coimbatore, Tamil Nadu 641044, India"
        ],
        "position": {
            "lat": 11.021036,
            "lng": 76.978705
        },
        "placeId": "ChIJ475f2RxZqDsRhEi9t42KE_g"
    },
    {
        "title": "SUMANGALI JEWELLERY Coimbatore",
        "addressLines": [
            "318, Raja St, Town Hall, Coimbatore, Tamil Nadu 641001, India"
        ],
        "position": {
            "lat": 10.994389,
            "lng": 76.955952
        },
        "placeId": "ChIJ3YH_uQtZqDsRbxYDmEFX1Nk"
    },
    {
        "title": "AKSHAYAM ELITE JEWELLERY Cuddalore",
        "addressLines": [
            "No. 118, Subburaya Chetty Street, Thiruppathiripuliyur, Cuddalore, Tamil Nadu, India - 607002"
        ],
        "position": {
            "lat": 11.746817,
            "lng": 79.752181
        },
        "placeId": "ChIJK_E8J2OYVDoRRJLuV15DUI8"
    },
    {
        "title": "ELITE JEWELLERY Cuddalore",
        "addressLines": [
            "67, Car Street, Thirupathiripuliyur, Cuddalore, Tamil Nadu, India - 607002"
        ],
        "position": {
            "lat": 11.747847,
            "lng": 79.75272
        },
        "placeId": "ChIJz0rMmWKYVDoR1TiWzZ1Zr6o"
    },
    {
        "title": "VELLIYAMBALAM JEWELLERY Cuddalore",
        "addressLines": [
            "9C, Cuddalore Main Road, Bhuvanagiri, Tamil Nadu, India - 608601"
        ],
        "position": {
            "lat": 11.445693,
            "lng": 79.664138
        },
        "placeId": "ChIJezzqAkXBVDoRD_3RW2lf1T8"
    },
    {
        "title": "GURUDEV JEWELLERY Cuddalore-OT",
        "addressLines": [
            "52 & 52A, Kumara Koil Street, Cuddalore Port, Tamil Nadu, India - 607003"
        ],
        "position": {
            "lat": 11.714678,
            "lng": 79.769941
        },
        "placeId": "ChIJPXy18SSYVDoR_sk-vrhrHec"
    },
    {
        "title": "SIVA VALLI VILAS  Cuddlore",
        "addressLines": [
            "No. 46, Subburaya Chetty Street, Thiruppathiripuliyur, Cuddalore, Tamil Nadu, India"
        ],
        "position": {
            "lat": 11.746735,
            "lng": 79.750701
        },
        "placeId": "ChIJj1BR1nyYVDoR1oSNS1OmdOA"
    },
    {
        "title": "BHAGWATH JEWELLERY Cumbum",
        "addressLines": [
            "Velappar Kovil St, Maalaikkovil, Cumbum, Tamil Nadu 625516, India"
        ],
        "position": {
            "lat": 9.737403,
            "lng": 77.28356
        },
        "placeId": "ChIJ50sBVlgBBzsRisZ2Wlk6ICw"
    },
    {
        "title": "SSS JEWEL PARADISE Dhamapuri",
        "addressLines": [
            "19, Chinnasamy Naidu Street, Dharmapuri, Tamil Nadu-641012, India"
        ],
        "position": {
            "lat": 12.133266,
            "lng": 78.162755
        },
        "placeId": "ChIJ42IML_kWrDsRpq8XmR6Wtfc"
    },
    {
        "title": "L.ANANTHA MUDHALIYAR Eral",
        "addressLines": [
            "9/2, Big Manara Pallivasal, Eral, Tamil Nadu 628801, India"
        ],
        "position": {
            "lat": 8.625385,
            "lng": 78.022033
        },
        "placeId": "ChIJibGAKaCMAzsRnHwpbfgQkKg"
    },
    {
        "title": "DISHA CLOTHING Gudiyatham",
        "addressLines": [
            "69, Rajendra Singh Street, Chunambupet, Ambapuram, Gudiyatham, Tamil Nadu 632602, India"
        ],
        "position": {
            "lat": 12.942875,
            "lng": 78.867827
        },
        "placeId": "KhQKEgkbtynWMG2tOxGFQzVYASC5kg"
    },
    {
        "title": "SREE ANNAMALAIYAR SILKS Hosur",
        "addressLines": [
            "2, Denkanikotta Rd, Anna Nagar, Hosur, Tamil Nadu 635109, India"
        ],
        "position": {
            "lat": 12.735094,
            "lng": 77.824372
        },
        "placeId": "ChIJy9A2CcZwrjsRyIXe1BGEBK0"
    },
    {
        "title": "ST VICTORIES Jolarpet",
        "addressLines": [
            "#51/1, Parthasarathy St, Old Jolarpet, Kudiyanakuppam, Jolarpet, Tamil Nadu 635851, India"
        ],
        "position": {
            "lat": 12.56943,
            "lng": 78.570093
        },
        "placeId": "ChIJN1VVValUrDsRbtuwMphmEV8"
    },
    {
        "title": "ANB ELITE JEWELLERY Kallakurichi",
        "addressLines": [
            "79, Salem Main Rd, Kallakurichi, Tamil Nadu 606202, India"
        ],
        "position": {
            "lat": 11.735622,
            "lng": 78.962878
        },
        "placeId": "ChIJKS3PiuVmqzsRClSFSscoZUI"
    },
    {
        "title": "CENTRE POINT Coonoor",
        "addressLines": [
            "41B,1St Floor, Vaishali Trade centre, Bedford, opposite Upasi, Kumaran Nagar, Coonoor, Tamil Nadu 643101, India"
        ],
        "position": {
            "lat": 11.348619,
            "lng": 76.795733
        },
        "placeId": "ChIJKzHPIuyVqDsRNENjHhDJ6pc"
    },
    {
        "title": "SRI SHANMUGA JEWELERY - Anjugramam Kanyakumari",
        "addressLines": [
            "5H2C+5J7, Anjugramam Rd, Maharajapuram, Anjugramam, Tamil Nadu 627114, India"
        ],
        "position": {
            "lat": 8.150417,
            "lng": 77.571537
        },
        "placeId": "ChIJuWLzrM2NBDsRP2id_68U3MQ"
    },
    {
        "title": "SANTHI JEWELLERY Karaikal",
        "addressLines": [
            "67/2, Thirunallar Road, Karaikal, Puducherry, India - 609602"
        ],
        "position": {
            "lat": 10.92157,
            "lng": 79.832988
        },
        "placeId": "ChIJjUn-UEoRVToRCdp2EDxTEmY"
    },
    {
        "title": "AYYAPPA SILKS Karaikudi",
        "addressLines": [
            ".167, Sekkalai Road, Karaikudi, Tamil Nadu, India - 630001"
        ],
        "position": {
            "lat": 10.069692,
            "lng": 78.768187
        },
        "placeId": "ChIJK84WsF9nADsRQpmY0i07eHE"
    },
    {
        "title": "navkaraikudi@gmail.com Karaikudi",
        "addressLines": [
            "No. 110, Sekkalai Road, Karaikudi, Tamil Nadu, India - 630001\n\n\n\n\n\n\n"
        ],
        "position": {
            "lat": 10.068768,
            "lng": 78.766034
        },
        "placeId": "ChIJuYogQF9nADsRPcoKGihgNp4"
    },
    {
        "title": "PARAMS TEXTILE Karaikudi",
        "addressLines": [
            "Sekkalai, Karaikudi, Tamil Nadu 630003, India"
        ],
        "position": {
            "lat": 10.07352,
            "lng": 78.778664
        },
        "placeId": "ChIJ_1mhf2RnADsRgpxWQj0CQzU"
    },
    {
        "title": "GANESH JEWELLERY KARUR",
        "addressLines": [
            "226, Jawahar Bazaar, Karur, Tamil Nadu-631501,India\n\n\n\n\n\n\n"
        ],
        "position": {
            "lat": 10.959114,
            "lng": 78.076698
        },
        "placeId": "ChIJ1W8Vs7ovqjsR6z62n00Uybw"
    },
    {
        "title": "NACHIYA JEWELERY Kattumannarkovil",
        "addressLines": [
            "7HF2+VJF, Kattumannarkoil, Tamil Nadu 608301, India"
        ],
        "position": {
            "lat": 11.274685,
            "lng": 79.55154
        },
        "placeId": "ChIJaff3q5nQVDoRYC8dhNvthLI"
    },
    {
        "title": "SRI MAHAVEER JEWELLERY Kurinjipadi",
        "addressLines": [
            "212/16, Raja Veethi, Main Road, Kurinjipadi, Tamil Nadu, India - 607302\n\n\n\n\n\n\n"
        ],
        "position": {
            "lat": 11.565975,
            "lng": 79.594336
        },
        "placeId": "ChIJV6xC0gm5VDoRSLYg6lrfPE4"
    },
    {
        "title": "NAVANEETHA THANGAMALIGAI LALGUDI",
        "addressLines": [
            "Main Rd, opp. to bus stand, Paramasivapuram, Lalgudi, Tamil Nadu 621601"
        ],
        "position": {
            "lat": 10.878057,
            "lng": 78.81777
        },
        "placeId": "ChIJa4Dace3xqjsRkmzllG7csMY"
    },
    {
        "title": "RADHAKRISHNA JEWELLERS Madhanapalle",
        "addressLines": [
            "11-123, Nehru Bazar Rd, Basinikonda, Madanapalle, Andhra Pradesh 517325, India"
        ],
        "position": {
            "lat": 13.550583,
            "lng": 78.503589
        },
        "placeId": "ChIJ64mus95lsjsRkgyXIVAKrdA"
    },
    {
        "title": "ALAGENDRAN AUTOMOBILES(idol) Madurai",
        "addressLines": [
            "177, 1, N Veli St, Simmakkal, Madurai Main, Madurai, Tamil Nadu 625001, India"
        ],
        "position": {
            "lat": 9.924373,
            "lng": 78.117064
        },
        "placeId": "ChIJy8_aWo_FADsR7d_IygzWJpo"
    },
    {
        "title": "SELVA MALIGAI Madurai",
        "addressLines": [
            "140, 141, S Avani Moola St, Valaiyal Kadai, Madurai Main, Madurai, Tamil Nadu 625001"
        ],
        "position": {
            "lat": 9.916583,
            "lng": 78.1182
        },
        "placeId": "ChIJcSEcuYPFADsRZ6VtTZlGaUY"
    },
    {
        "title": "CHENNAI AURUM JEWEL HOUSE PVT LTD (NARAYANA JEWELLERY) Mayiladuthurai",
        "addressLines": [
            "109A, Pattamangala St, Gandhi Nagar, Kamarajar Salai, Mayiladuthurai, Tamil Nadu 609001, India"
        ],
        "position": {
            "lat": 11.102945,
            "lng": 79.65198
        },
        "placeId": "ChIJafq-7t8hVToRT2ng9XTOmhY"
    },
    {
        "title": "RAVIRAJ JEWELERY Melur",
        "addressLines": [
            "Jewellery Bazaar, Alagar Koil Main Road, Melur, Madurai, Tamil Nadu - 625106."
        ],
        "position": {
            "lat": 10.032414,
            "lng": 78.339557
        },
        "placeId": "ChIJCTj6rG3rADsRjU5HVZK1-DE"
    },
    {
        "title": "SIBIRAJA JEWELLERY Kangeyam",
        "addressLines": [
            "252, Main Road, Kangayam, Tamil Nadu, India - 638701\n\n\n\n\n\n\n"
        ],
        "position": {
            "lat": 11.002544,
            "lng": 77.562363
        },
        "placeId": "ChIJJzDVTv2hqTsRKupGZAJhRRE"
    },
    {
        "title": "KAMINI FASHION JEWELLERY Nagarcoil",
        "addressLines": [
            "66, Ammasimadam St, Meenakshipuram, Vadiveeswaram Village, Nagercoil, Tamil Nadu 629001, India"
        ],
        "position": {
            "lat": 8.182719,
            "lng": 77.435269
        },
        "placeId": "ChIJJ6BHtyTxBDsRI2FF9P-s6tE"
    },
    {
        "title": "SUMATHI JEWELLERY Namakkal",
        "addressLines": [
            "15A, 15B, Bazaar Street, Namakkal, Tamil Nadu 637001"
        ],
        "position": {
            "lat": 11.222643,
            "lng": 78.16723
        },
        "placeId": "ChYKFAoSCQUkFXvyzqs7EeQ4q9v99JIWEgMxNWE"
    },
    {
        "title": "ORGINAL VASAVI JEWELERY - Ottanchathiram Oddanchathiram",
        "addressLines": [
            "384-R, Dharapuram Road, Oddanchathiram, Tamil Nadu 624619"
        ],
        "position": {
            "lat": 10.489878,
            "lng": 77.745925
        },
        "placeId": "ChIJMVc_wjz7qTsR7i4l9yppAzU"
    },
    {
        "title": "SANKAR JEWELERY Palani",
        "addressLines": [
            "Okkaligar Complex, 14, Gandhi Rd, Indra Nagar, Palani, Tamil Nadu 624601, India"
        ],
        "position": {
            "lat": 10.450876,
            "lng": 77.51399
        },
        "placeId": "ChIJxzu1eYjeqTsRpWTZWIPUn4s"
    },
    {
        "title": "PALANIYAPPA TEXTILES Tirupattur",
        "addressLines": [
            "22, OV ROAD, Krishnapuram, Ambur, Tamil Nadu 635802, India"
        ],
        "position": {
            "lat": 12.787518,
            "lng": 78.714406
        },
        "placeId": "ChIJp6hRgioJrTsRpePrQz_MP4U"
    },
    {
        "title": "SV JEWELERY Panruti",
        "addressLines": [
            "35, Rajaji Rd, Panruti, Thorapadi, Tamil Nadu 607106, Indi"
        ],
        "position": {
            "lat": 11.773202,
            "lng": 79.549719
        },
        "placeId": "ChIJwfMGKFuvVDoRuPANCDcmFAc"
    },
    {
        "title": "SSM - JEWELERY Pattukottai",
        "addressLines": [
            "NO-6/3, CHINNAYA STREET, Mainckam Colony, Pattukkottai, Tamil Nadu 614601, India"
        ],
        "position": {
            "lat": 10.423189,
            "lng": 79.318717
        },
        "placeId": "ChIJsa5vDR0BADsRFmYPJAAMdzg"
    },
    {
        "title": "VINAYAGA JEWELLERY PERAVURANI",
        "addressLines": [
            "23, Avanam Road, Peravurani, Tamil Nadu 614804"
        ],
        "position": {
            "lat": 10.286607,
            "lng": 79.200294
        },
        "placeId": "ChIJaeyufZYFADsRyyOJO4SPYgU"
    },
    {
        "title": "SREE RANGA JEWELLERY Mettupalayam",
        "addressLines": [
            "1B, Railway Station road 641301 Mettupalayam"
        ],
        "position": {
            "lat": 11.303384,
            "lng": 76.936375
        },
        "placeId": "Ek8xYiwgUmFpbHdheSBTdGF0aW9uIFJvYWQsIE1haGFkZXZhcHVyYW0sIE1ldHR1cGFsYXlhbSwgVGFtaWwgTmFkdSA2NDEzMDUsIEluZGlhIjASLgoUChIJIVkpYr7uqDsRxCJoF3DfmnQQASoUChIJbfev5ZXuqDsR15JUE_lJMHI"
    },
    {
        "title": "KCV JEWELLERY Pondy",
        "addressLines": [
            "264, Ambalathadayar Madam St, Heritage Town, Puducherry, 605001, India"
        ],
        "position": {
            "lat": 11.937426,
            "lng": 79.826957
        },
        "placeId": "ChIJ2_e3Yn5hUzoRY9cDA8xY5AM"
    },
    {
        "title": "SRI VNM JEWELLERS Pondy",
        "addressLines": [
            "97-99, Kamarajar Salai, Vallalar Salai Rd, Junction, Puducherry, 605011, India"
        ],
        "position": {
            "lat": 11.937172,
            "lng": 79.821529
        },
        "placeId": "ChIJjWLsZ35hUzoREf_-ClNE0M8"
    },
    {
        "title": "VSP THANGA MALIGAI PUDUKOTTAI",
        "addressLines": [
            "2752, E Main Rd, Melaraja Vidi, Malamelkudi, Pudukkottai, Tamil Nadu 622001, India"
        ],
        "position": {
            "lat": 10.384911,
            "lng": 78.822231
        },
        "placeId": "ChIJrz4_RDF4ADsRnzavREHtf8w"
    },
    {
        "title": "KAMADHENU JEWELLERS Sankarapuram",
        "addressLines": [
            "Kallakurichi, East Coast Rd, Sankarapuram, Tamil Nadu 606401, India"
        ],
        "position": {
            "lat": 11.88592,
            "lng": 78.916935
        },
        "placeId": "ChIJS0usT8WdrDsR5DjhRnWpAzs"
    },
    {
        "title": "SIVANTHI SHOPEE Sattur",
        "addressLines": [
            "65/10, 65/11, Ground Floor, Thayammal Complex, Old Trunk Road, Sattur, Tamil Nadu 626203"
        ],
        "position": {
            "lat": 9.358912,
            "lng": 77.918505
        },
        "placeId": "ChIJWWbxKLfKBjsRRqB5RlKHdMU"
    },
    {
        "title": "GOWTHAM JEWELLERY Sholinganallur",
        "addressLines": [
            "No. 162, Bazaar Street, Sholingur, Tamil Nadu 631102\n\n\n\n\n\n\n"
        ],
        "position": {
            "lat": 13.115732,
            "lng": 79.421115
        },
        "placeId": "ChIJyVBbv_SyUjoR2ftcUUn9ScI"
    },
    {
        "title": "ARC JEWELERY Tanjore",
        "addressLines": [
            "11-A,SOUTH, E Rampart Rd, Rajakrisnapuram, Thanjavur, Tamil Nadu 613001, India"
        ],
        "position": {
            "lat": 10.789445,
            "lng": 79.13878
        },
        "placeId": "ChIJNf4h8Z24qjsRLN555BfZOWE"
    },
    {
        "title": "VPP JEWELERY Tanjore",
        "addressLines": [
            "264, Ambalathadayar Madam Street, Pondicherry 605008"
        ],
        "position": {
            "lat": 11.937426,
            "lng": 79.826957
        },
        "placeId": "ChIJ2_e3Yn5hUzoRY9cDA8xY5AM"
    },
    {
        "title": "Sri Shunmugam Jewellers Thisayanvilai",
        "addressLines": [
            "Nanguneri - Uvari Rd, Thisayanvilai, Tamil Nadu 627657, India"
        ],
        "position": {
            "lat": 8.335117,
            "lng": 77.86772
        },
        "placeId": "ChIJ5ZOUfVl-BDsRG6VEP0IgQxw"
    },
    {
        "title": "MS SILVER Thirukoilur",
        "addressLines": [
            "92, North Street, Thirukoilure, Tamil Nadu 605757, India"
        ],
        "position": {
            "lat": 11.967835,
            "lng": 79.204511
        },
        "placeId": "ChIJb8u3WFivrDsRbIVgZ4jpn0g"
    },
    {
        "title": "SUMANGALI JEWELLERS Thirukovilur",
        "addressLines": [
            "49/a, Kattakopuram street, Thirukoilure, Tamil Nadu 605757, India"
        ],
        "position": {
            "lat": 11.968051,
            "lng": 79.202749
        },
        "placeId": "ChIJ-7rPeSKvrDsRwUeVpyZbwXs"
    },
    {
        "title": "VILVUM JEWELLERS Thiruvannamalai",
        "addressLines": [
            "TPS COMPLEX, 5B, Rettai Pillaiyar Kovil St, Pavazhakundur, Tiruvannamalai, Tamil Nadu 606601, India"
        ],
        "position": {
            "lat": 12.233091,
            "lng": 79.070327
        },
        "placeId": "ChIJ8wxdyvPBrDsRXF9bAe6-ORU"
    },
    {
        "title": "SRI SHANMUGA JEWELERY - Tisayanvilai Thisayanvilai",
        "addressLines": [
            "510, Main Road, Tisayanvilai, Tirunelveli District - 627657, Tamil Nadu"
        ],
        "position": {
            "lat": 8.335117,
            "lng": 77.86772
        },
        "placeId": "ChIJ5ZOUfVl-BDsRG6VEP0IgQxw"
    },
    {
        "title": "SHEETHAL JEWELLERY Tindivanam",
        "addressLines": [
            "38, Nehru St, Tindivanam, Tamil Nadu 604001, India"
        ],
        "position": {
            "lat": 12.233629,
            "lng": 79.649235
        },
        "placeId": "Ejpuby4gMzgsIE5laHJ1IFN0cmVldCwgVGluZGl2YW5hbSwgVGFtaWwgTmFkdSA2MDQwMDEsIEluZGlhIjASLgoUChIJjUJqJFNHUzoR5eYpSufXPuIQJioUChIJr19hM7NAUzoR4XcjGzFK4jk"
    },
    {
        "title": "CHINNANNAN JEWELLERY Pollachi",
        "addressLines": [
            "157, Bazaar St, Puliampatti, Pollachi, Tamil Nadu 642001, India"
        ],
        "position": {
            "lat": 10.656308,
            "lng": 77.007719
        },
        "placeId": "ChIJqXvaqIo5qDsR7PbyEg2zGeg"
    },
    {
        "title": "SRI THAILA SILKS TRICHY",
        "addressLines": [
            "53A1, Big Bazaar St, opp. Townhall Street, Singarathope, Devathanam, Tiruchirappalli, Tamil Nadu 620002, India"
        ],
        "position": {
            "lat": 10.824409,
            "lng": 78.697117
        },
        "placeId": "ChIJSzmMhC31qjsRVgV6IbSsFZU"
    },
    {
        "title": "OM JEWELLERY TRICHY",
        "addressLines": [
            "96/1, Chinna Chetty St, West Extension, Tennur, Tiruchirappalli, Tamil Nadu 620008, India"
        ],
        "position": {
            "lat": 10.819152,
            "lng": 78.678448
        },
        "placeId": "ChIJ9Q9Gnp_1qjsRUN1Ywxipt8E"
    },
    {
        "title": "JOS JEWELLERS Udumalpet",
        "addressLines": [
            "Dhali Rd, Udumalaipettai, Tamil Nadu 642126, India"
        ],
        "position": {
            "lat": 10.586605,
            "lng": 77.245954
        },
        "placeId": "ChIJ-79iflTMqTsRyjKbAJXs98M"
    },
    {
        "title": "DM THANGAMALIGAI Ulundurpet",
        "addressLines": [
            "42/95, Salem Main Rd, Kallakurichi, Tamil Nadu 606202, India"
        ],
        "position": {
            "lat": 11.732564,
            "lng": 78.961763
        },
        "placeId": "ChIJm9vgKgpnqzsRn3qHncm4VcM"
    },
    {
        "title": "LSK JEWELLERS Vaniyampadi",
        "addressLines": [
            "394, CL Rd, Periyapet, Vaniyambadi, Tamil Nadu 635751, India"
        ],
        "position": {
            "lat": 12.679507,
            "lng": 78.618076
        },
        "placeId": "ChIJP98MCM6prTsRuQv4M9o6UUo"
    },
    {
        "title": "VIJAYALAKSHMI JEWELLERS Vaniyampadi",
        "addressLines": [
            "no.52, Pookadai Bazaar St, Vaniyambadi, Tamil Nadu 635751, India"
        ],
        "position": {
            "lat": 12.684761,
            "lng": 78.613866
        },
        "placeId": "ChIJScMzyaeprTsRbW7t0gY8fzA"
    },
    {
        "title": "SRI SANGEETHA SILVER Vellakoil",
        "addressLines": [
            "State Highway 84A, Muthur Rd, Vellakoil, Tamil Nadu 638111, India"
        ],
        "position": {
            "lat": 10.946629,
            "lng": 77.713028
        },
        "placeId": "ChIJHxdRcuWaqTsRF0phgRwdU_U"
    },
    {
        "title": "GUNA JEWELS Vellore",
        "addressLines": [
            "15, Arni Rd, Velapadi, Vellore, Tamil Nadu 632001, India"
        ],
        "position": {
            "lat": 12.906639,
            "lng": 79.13404
        },
        "placeId": "ChIJDfU4SnE5rTsRJk5Mmw7_5II"
    },
    {
        "title": "PRAKASH JEWELLERY Vellore",
        "addressLines": [
            "114-1, Main Bazaar Rd, Sripuram, Saidapet, Vellore, Tamil Nadu 632004, India"
        ],
        "position": {
            "lat": 12.921338,
            "lng": 79.134692
        },
        "placeId": "ChIJMcYZ5Oo4rTsRKUv1U2nOO_c"
    },
    {
        "title": "Champalal Jewellers Vellore",
        "addressLines": [
            "No: 24/4, Officers Lane Opp to Voorhees college, Vasanthapuram, Srinivasan Nagar, Vellore, Tamil Nadu 632004, India"
        ],
        "position": {
            "lat": 12.910289,
            "lng": 79.131646
        },
        "placeId": "ChIJGwAA9Oc4rTsRXafiwx_z7T8"
    },
    {
        "title": "Pachayapas Chennai",
        "addressLines": [
            "No. 55, North Usman Road, Near Panagal Park, T. Nagar, Chennai, Tamil Nadu, India - 600017"
        ],
        "position": {
            "lat": 13.042513,
            "lng": 80.232509
        },
        "placeId": "ChIJK7LdI1ZmUjoRi3IEzkOGwnM"
    },
    {
        "title": "Venulife style Jeweller Mumbai",
        "addressLines": [
            "Shop No. 79, Moksha Plaza, S.V. Road, Borivali, Mumbai, Maharashtra 400092, India."
        ],
        "position": {
            "lat": 19.226104,
            "lng": 72.85464
        },
        "placeId": "ChIJG10bLdSw5zsRqBIKXAFkBuE"
    },
    {
        "title": "Eva Mall Jeweller Gujarat",
        "addressLines": [
            "Eva Circle, Manjalpur, Vadodara, Gujarat 390011, India."
        ],
        "position": {
            "lat": 22.273392,
            "lng": 73.188791
        },
        "placeId": "ChIJ7ZHAKdzFXzkR1XQtaznZNIw"
    },
    {
        "title": "Seven Seas Mall Jeweller Gujarat",
        "addressLines": [
            "Seven Seas Mall, Near IRCL Circle, Jayesh Colony, Fatehganj, Vadodara, Gujarat 390002, India."
        ],
        "position": {
            "lat": 22.322681,
            "lng": 73.187001
        },
        "placeId": "ChIJ0QxM9jXPXzkRjBcf0G2Lu6s"
    },
    {
        "title": "S.S. Jeweller Gujarat",
        "addressLines": [
            "FF-23, Darshnam Arish, Gotri Sevasi Road, Vadodara, Gujarat 390021, India.\n\n\n\n\n\n\n"
        ],
        "position": {
            "lat": 22.31352,
            "lng": 73.128976
        },
        "placeId": "ElRHb3RyaSAtIFNldmFzaSBSb2FkLCBDaGFuZHJhbWF1bGVzaHdhciBOYWdhciwgR290cmksIFZhZG9kYXJhLCBHdWphcmF0IDM5MDAyMSwgSW5kaWEiLiosChQKEgkJGuO1Z8hfORF58h-YI9domRIUChIJ42p63mPIXzkRHPytod6y6YM"
    },
    {
        "title": "Shreeji Jeweller Gujarat",
        "addressLines": [
            "FF-23,SHIV ICON, ANAND CHOKDI, opp. Swaminarayan Temple, Vasna VIllage, Vasna, Borsad, Gujarat 388540, India"
        ],
        "position": {
            "lat": 22.390695,
            "lng": 72.910759
        },
        "placeId": "ChIJt5zhBWOzXzkR-_xjOuTTeRU"
    },
    {
        "title": "S/R Mandaliya Jeweller Gujarat",
        "addressLines": [
            "HX42+JF8, GJ SH 60, Ganesh Colony, Anand, Gujarat 388001, India"
        ],
        "position": {
            "lat": 22.556526,
            "lng": 72.951214
        },
        "placeId": "ChIJF3keToFOXjkRJxenI5eQdd8"
    },
    {
        "title": "Ratndeep Jeweller Gujarat",
        "addressLines": [
            "XJC7+MWR, Swamibapa Smruti Mandir Rd, Ghodasar, Ahmedabad, Gujarat 380050, India"
        ],
        "position": {
            "lat": 22.971681,
            "lng": 72.614679
        },
        "placeId": "ChIJG8f4z1SPXjkR9hhaN83oMmk"
    },
    {
        "title": "Atulya Jeweller Gujarat",
        "addressLines": [
            "3791, Metaji Nagar, Dahod, Gujarat 389151, India.\n\n\n\n\n\n\n"
        ],
        "position": {
            "lat": 22.830732,
            "lng": 74.259758
        },
        "placeId": "ChIJ8ebh2qsdYTkRnye_sBfCULM"
    },
    {
        "title": "Neelam Gold And diamond (BOKARO) Jharkhand",
        "addressLines": [
            "RAMGARH CANTT, RAMGARH SADAR, RAMGAR 829122, Jharkhand"
        ],
        "position": {
            "lat": 23.624137,
            "lng": 85.530115
        },
        "placeId": "ChIJCUFIr6_19DkRWOPFcU5MKJA"
    },
    {
        "title": "Shambhu Jewellers Jharkhand",
        "addressLines": [
            "MAIN ROAD, HAZARIBAGH, Hazaribag, Jharkhand 825301"
        ],
        "position": {
            "lat": 23.994283,
            "lng": 85.353932
        },
        "placeId": "ChIJyQyjbaee9DkRkGw6LkxMphk"
    },
    {
        "title": "Maniratnam jewelers West Bengal",
        "addressLines": [
            "NACHAN ROAD, BENACHITY, DURGAPUR, BENACHITY, Bardhaman 713213"
        ],
        "position": {
            "lat": 23.557656,
            "lng": 87.275032
        },
        "placeId": "ChIJuzbL9o5t9zkRaNr6aTizDB0"
    },
    {
        "title": "Banganga Jewellers West Bengal",
        "addressLines": [
            "H5HQ+FG9, Kabiraj Gali, Durgapur, Andal, West Bengal 713321"
        ],
        "position": {
            "lat": 23.578771,
            "lng": 87.188536
        },
        "placeId": "ChIJz3PT-LQT9zkR7s-yvaWI-pI"
    },
    {
        "title": "Sarat Chandra Das West Bengal",
        "addressLines": [
            "419/168, SAHABHARANG BAZAR, BIBIGUNJ, MIDNAPORE TOWN, Paschim Medinipur, West Bengal 721101"
        ],
        "position": {
            "lat": 22.412144,
            "lng": 87.326771
        },
        "placeId": "ChIJ140NZClbHToRRncOR2pomeo"
    },
    {
        "title": "New Ranu Jewellers West Bengal",
        "addressLines": [
            "Parbatipur, Tamluk, Purba Medinipur, Rakshit More, Tamluk, Midnapore 721636"
        ],
        "position": {
            "lat": 22.286778,
            "lng": 87.924298
        },
        "placeId": "ChIJHyLyOHCUAjoRgKPvaYqIitc"
    },
    {
        "title": "Indian Gem & Jewellery Creation West Bengal",
        "addressLines": [
            "35, Dr Abani Dutta Rd, Babudanga, Mali Panchghara, Howrah, West Bengal 711106, India"
        ],
        "position": {
            "lat": 22.594033,
            "lng": 88.342185
        },
        "placeId": "ChIJHW1M8-l3AjoR2HSF1M7cRIw"
    },
    {
        "title": "SAHA ALANKAR West Bengal",
        "addressLines": [
            "Collectorate More, Saral Babur Bazar, Khudiram More, Burdge Town, Midnapore, West Bengal 721101"
        ],
        "position": {
            "lat": 22.426045,
            "lng": 87.318347
        },
        "placeId": "ChIJw6qqqtpaHToRNwDvefs08Gw"
    },
    {
        "title": "New Kalpana Jewellers West Bengal",
        "addressLines": [
            "188/169, Diamond Harbor Road, Barisha, Kolkata 700008, West bengal"
        ],
        "position": {
            "lat": 22.477342,
            "lng": 88.31039
        },
        "placeId": "ChIJy7PkyGV6AjoR4gsctcf7MrM"
    },
    {
        "title": "Shree Ganesh Jewellers West Bengal",
        "addressLines": [
            "DEBARUN COMPLEX, SONARPUR BAZAR, GORKHARA, South 24 Parganas 700150"
        ],
        "position": {
            "lat": 22.443345,
            "lng": 88.432957
        },
        "placeId": "ChIJ47VlQABzAjoRD3YBbmYIXJU"
    },
    {
        "title": "Pratima Jewellery Works West Bengal",
        "addressLines": [
            "2/20, Vidya Sagar Main Rd, Vidyasagar Colony, Ganguly Bagan, Kolkata, West Bengal 700047, India"
        ],
        "position": {
            "lat": 22.481324,
            "lng": 88.375797
        },
        "placeId": "ChIJO1VU2xFxAjoRPV3wO1oyD4o"
    },
    {
        "title": "Alankar Jewellers West Bengal",
        "addressLines": [
            "1st Floor, 3/1, Rajkrishna Chatterjee Rd, New Ballygunge, Kasba, Kolkata, West Bengal 700042, India"
        ],
        "position": {
            "lat": 22.519472,
            "lng": 88.377734
        },
        "placeId": "ChIJzTkIS0l3AjoRi1Ak7r7dmyo"
    },
    {
        "title": "Maa Sarda Jewellers West Bengal",
        "addressLines": [
            "212,RashBehari Avenue Gariahat corporation market Shop no.-CD/01/89 (1st floor Landmark- Kmc market, Golpark, Fern Place, Gariahat, Kolkata, West Bengal 700019, India"
        ],
        "position": {
            "lat": 22.520666,
            "lng": 88.368184
        },
        "placeId": "ChIJ0bWGkKd3AjoR9J1-yKwSBvI"
    },
    {
        "title": "Ankit Gems West Bengal",
        "addressLines": [
            "148, Rash Behari Ave, opposite Priya Cinema, lake Terrace, Ballygunge, Kolkata, West Bengal 700029, India"
        ],
        "position": {
            "lat": 22.517541,
            "lng": 88.354561
        },
        "placeId": "ChIJQ8OjmrB3AjoRxs-jRMM1FrU"
    },
    {
        "title": "P S Jewellers West Bengal",
        "addressLines": [
            "24C, Mirza Ghalib St, New Market Area, Janbazar, Taltala, Kolkata, West Bengal 700087, India"
        ],
        "position": {
            "lat": 22.56178,
            "lng": 88.355225
        },
        "placeId": " ChIJyXmOpQd3AjoRoAyUUC7RXZ4"
    },
    {
        "title": "R M GOLD West Bengal",
        "addressLines": [
            "44B, MUZAFFAR AHMED STREET, RIPPON STREET, KOLKATA 700016"
        ],
        "position": {
            "lat": 22.553102,
            "lng": 88.361947
        },
        "placeId": "ChIJZROBuwJ3AjoR9jWIeEr6oHE"
    },
    {
        "title": "Sonalia Jewellers West Bengal",
        "addressLines": [
            "P-187, CIT Road, VIP Market, Ground Floor, Phoolbagan, Kolkata 700054"
        ],
        "position": {
            "lat": 22.575429,
            "lng": 88.390488
        },
        "placeId": "ChIJJ-M4ZmV2AjoR7-WWFEsd4zI"
    },
    {
        "title": "Jaiswal Jewellers West Bengal",
        "addressLines": [
            "19 Adi Banstalla Lane, Kolkata 700007"
        ],
        "position": {
            "lat": 22.582751,
            "lng": 88.356623
        },
        "placeId": "ChIJpRteuLZ3AjoRsPHoOLVUTsE"
    },
    {
        "title": "Mahabir Jewellers West Bengal",
        "addressLines": [
            "1 Hat Lane, Howrah 711101"
        ],
        "position": {
            "lat": 22.578699,
            "lng": 88.33163
        },
        "placeId": "ChIJY-N73gJ3AjoRMhKo_0JTrnI"
    },
    {
        "title": "Piyali Jewellers West Bengal",
        "addressLines": [
            "12, Manujendra Dutta Road, Cantt, Gora Bazar, Rajbari, Dum Dum, North Dumdum, Kolkata, West Bengal 700028, India\n\n\n\n\n\n\n"
        ],
        "position": {
            "lat": 22.635784,
            "lng": 88.415711
        },
        "placeId": "ChIJ0fM5ThOe-DkRAu3qzc7SwFE"
    },
    {
        "title": "Chowdhury Jewellery Museum Pvt Ltd West Bengal",
        "addressLines": [
            "105, Feeder Rd, Indrapuri, Beehive Garden, Belghoria, Kolkata, West Bengal 700056, India"
        ],
        "position": {
            "lat": 22.660514,
            "lng": 88.386729
        },
        "placeId": "ChIJo0yzpjSc-DkRxKWP6exrAsA"
    },
    {
        "title": "Das & Sons Jewellers West Bengal",
        "addressLines": [
            "49, KNC Rd, beside Bidhan Cinema, Katgola, Gupta Colony, Barasat, Kolkata, West Bengal 700124, India"
        ],
        "position": {
            "lat": 22.721702,
            "lng": 88.483371
        },
        "placeId": "ChIJMyGL0wei-DkRTneCiGJfY-I"
    },
    {
        "title": "Hi Light Ornamants West Bengal",
        "addressLines": [
            "Gohat, Melatala, Pandua, Hooghly 712149"
        ],
        "position": {
            "lat": 23.019869,
            "lng": 88.219841
        },
        "placeId": "EkBQYW5kdWEgLSBCZWxtdXJpIFJvYWQsIEpheWVyLCBIb29naGx5LCBXZXN0IEJlbmdhbCA3MTIxNDksIEluZGlhIi4qLAoUChIJMXVpnED1-DkRciKPmsFR0cYSFAoSCbe-vc_p9Pg5EdDN0INqEcNb"
    },
    {
        "title": "PINKI GOLD PALACE West Bengal",
        "addressLines": [
            "GURAP, HASAMPUR ,GURAP, Hooghly 712303, West Bengal"
        ],
        "position": {
            "lat": 23.0288,
            "lng": 88.106789
        },
        "placeId": "ChIJ35pRspZf-DkR84sHqzuGB2c"
    },
    {
        "title": "Burima Jewellery West Bengal",
        "addressLines": [
            "Buri Kali Bari Road ,New Market Balurghat Dist- Dakshin Dinajpur 733101"
        ],
        "position": {
            "lat": 25.237283,
            "lng": 88.783061
        },
        "placeId": "ChIJk7QiQfdh-zkRVUwUyMgvQx0"
    },
    {
        "title": "Hall Mark Jewellers House West Bengal",
        "addressLines": [
            "2nd floor, Ukilpara Public Bus Stand, Raiganj, Uttar Dinajpur, West Bengal, India, Pin, Pakamba, Bahin, Raiganj, West Bengal 733134, India"
        ],
        "position": {
            "lat": 25.618272,
            "lng": 88.125734
        },
        "placeId": "ChIJefkX2Q3V-jkRygs62k19Xr4"
    },
    {
        "title": "syani gold and diamond raigunj West Bengal",
        "addressLines": [
            "LICHUTALA UKILPARA, THANAROAD, RAIGANJ, Uttar Dinajpur, West Bengal 733134"
        ],
        "position": {
            "lat": 25.615633,
            "lng": 88.127493
        },
        "placeId": "ChIJ0YgPPQjV-jkRTZMI78EXt_4"
    },
    {
        "title": "Matri Bhander Jewellers West Bengal",
        "addressLines": [
            "New Town, BF Road, Alipurduar"
        ],
        "position": {
            "lat": 26.489882,
            "lng": 89.526669
        },
        "placeId": "ChIJidPoBD5X4jkRpISk2QoJoJY"
    },
    {
        "title": "kIARA jEWELS West Bengal",
        "addressLines": [
            "1st Floor , Shop, Rajani Centre, F1, Hill Cart Rd, beside P.C. Chandra Jewellers, Ward 11, Hakim Para, Siliguri, West Bengal 734001, India"
        ],
        "position": {
            "lat": 26.713073,
            "lng": 88.42511
        },
        "placeId": "ChIJ0zTHXM1B5DkRvy1ym54QzYs"
    },
    {
        "title": "Gayatri Jewellers West Bengal",
        "addressLines": [
            "Gole Bazar, 88R8+CJC, Ram Mandir Rd, Kharagpur, West Bengal 721301, India"
        ],
        "position": {
            "lat": 22.341059,
            "lng": 87.316506
        },
        "placeId": " ChIJs3Hm8XREHToRLUh5czYc3xI"
    },
    {
        "title": "Jashomati Jewellery Stores West Bengal",
        "addressLines": [
            "DBC Rd, Nutan Para, Jalpaiguri, West Bengal 735101, India"
        ],
        "position": {
            "lat": 26.52481,
            "lng": 88.724782
        },
        "placeId": "ChIJm0Q2Eox55DkRL20VCiKfVy4"
    },
    {
        "title": "G D GINI HOUSE West Bengal",
        "addressLines": [
            "Netaji Subhash Rd, Netaji More, Malda, West Bengal 732101, India"
        ],
        "position": {
            "lat": 25.000575,
            "lng": 88.145933
        },
        "placeId": "ChIJwX_FJsP9-jkRu4Z7bVS7uYE"
    },
    {
        "title": "Prakash jewelers (siliguri) West Bengal",
        "addressLines": [
            "Ward No 46, Champasari Rd, Ward 46, Champasari, Siliguri, Mallaguri, West Bengal 734003, India"
        ],
        "position": {
            "lat": 26.739101,
            "lng": 88.416268
        },
        "placeId": "ChIJ2Uh47ulB5DkRrQRfMVsB_bM"
    },
    {
        "title": "Hanuman Jewellers West Bengal",
        "addressLines": [
            "D S Gurung Road, Kalimpong 734301"
        ],
        "position": {
            "lat": 27.069062,
            "lng": 88.471483
        },
        "placeId": "ChIJk5oH-wIi5DkR4eEJc4THzvk"
    },
    {
        "title": "Patra Alankar West Bengal",
        "addressLines": [
            "Barabazar Rd, Midnapore, West Bengal 721101, India"
        ],
        "position": {
            "lat": 22.414079,
            "lng": 87.328376
        },
        "placeId": "ChIJlVTMcTFbHToRr2orDda104I"
    },
    {
        "title": "Silver queen (siliguri) West Bengal",
        "addressLines": [
            "Gali No 2, More, Seth Srilal Market, Sevoke Rd, behind Momo Gali, opposite Agarwal Brothers, Ward 11, Hakim Para, Siliguri, West Bengal 734001"
        ],
        "position": {
            "lat": 26.715936,
            "lng": 88.423649
        },
        "placeId": " ChIJvd2vyt9B5DkRthmozCLTr7Y"
    },
    {
        "title": "DAS & SON West Bengal",
        "addressLines": [
            "49, KNC Rd, beside Bidhan Cinema, Katgola, Gupta Colony, Barasat, Kolkata, West Bengal 700124"
        ],
        "position": {
            "lat": 22.721702,
            "lng": 88.483371
        },
        "placeId": "ChIJ3_onxgii-DkRINRMJ8kCpnA"
    },
    {
        "title": "Shanti Jewellers West Bengal",
        "addressLines": [
            "DBC Rd, opp. Sarkar Petrol Pump, Nutan Para, Jalpaiguri, West Bengal 735101"
        ],
        "position": {
            "lat": 26.524598,
            "lng": 88.722947
        },
        "placeId": "Q5EU5wjRfSXZ2oEhQKEgnxojpVRHnkORFd_MVmlT00TA"
    },
    {
        "title": "GK Exclusive West Bengal",
        "addressLines": [
            "1st Floor, 12/B-1, 12/B-1, S V SARANI NO 1, OPP: SBI BANK,RANAGHAT, Nadia 741201"
        ],
        "position": {
            "lat": 23.173587,
            "lng": 88.566828
        },
        "placeId": "ChIJr-XdlUXF-DkRMFVxhfUeAVk"
    },
    {
        "title": "RAJSHREE JEWELLERS Bihar",
        "addressLines": [
            "Tower Chowk Opp. D .C. Lal and Sons darbhanga - 846004"
        ],
        "position": {
            "lat": 26.155678,
            "lng": 85.892126
        },
        "placeId": "ChIJlxaIdTO47TkRR9_CVF2ncqA"
    },
    {
        "title": "Sayani gold & diamonds West Bengal",
        "addressLines": [
            "House No. 45, Ukilpara, Thana Road, Lichutala, Raiganj, West Bengal 733134, India\n\n\n\n\n\n\n"
        ],
        "position": {
            "lat": 25.615633,
            "lng": 88.127493
        },
        "placeId": "ChIJ0YgPPQjV-jkRTZMI78EXt_4"
    },
    {
        "title": "New karni jewelers ( Katihar Bihar) Bihar",
        "addressLines": [
            "DAULATRAM CHOWK VENUS MORE, KATIHAR 854105, Bihar"
        ],
        "position": {
            "lat": 25.539243,
            "lng": 87.575127
        },
        "placeId": "ChIJO4UFd4Op-jkR4cMFrEZnKlI"
    },
    {
        "title": "Narayan Jewellers Bihar",
        "addressLines": [
            "jhanda chowk, Bhatta Bazar, Mehboob Khan Tola, Purnia, Bihar 854301, India"
        ],
        "position": {
            "lat": 25.771172,
            "lng": 87.478617
        },
        "placeId": "ChIJD089p3P57zkRJpI3RQkAOCs"
    },
    {
        "title": "Rajendar Jewellers Bihar",
        "addressLines": [
            "Sonar Patti Road, Sonar Patti Road, Sonar Patti Road, Ward no.13, Kishanganj, Bihar 855107"
        ],
        "position": {
            "lat": 26.103887,
            "lng": 87.953542
        },
        "placeId": "ChIJfUSorMAW5TkRX_n6l_CVy4c"
    },
    {
        "title": "Ram Chandra Pradeep Kumar Jewellers Sikkim",
        "addressLines": [
            "GTK/009/k/9/2, Lall Market Road, Lall Market, Gangtok, East, Sikkim 737101"
        ],
        "position": {
            "lat": 27.327279,
            "lng": 88.612126
        },
        "placeId": "ChIJ2WLaZxSl5jkRboKf_7XgjnU"
    },
    {
        "title": "Ganpati jewelers ( Gangtok) Sikkim",
        "addressLines": [
            "Lall Bazar Gangtok (sikkim) Near Kanchanjanga shoping complex Gangtok - 737101"
        ],
        "position": {
            "lat": 27.325859,
            "lng": 88.61109
        },
        "placeId": "ChIJO3rVZSKl5jkRqGBSF0_ttFc"
    },
    {
        "title": "Muktamoni Assam",
        "addressLines": [
            "Jugal Bazar, Ganesh Guri, Below Union Bank, Dispur - 781006, Assam"
        ],
        "position": {
            "lat": 26.149774,
            "lng": 91.785251
        },
        "placeId": "ChIJtw-VSBhZWjcRGNGnS_veqqU"
    },
    {
        "title": "Arun Jewellers (GUWAHATI) Assam",
        "addressLines": [
            "48, M R D Road Opp Namghar, Noonmati, Kamrup Metropolitan - 781020"
        ],
        "position": {
            "lat": 26.182128,
            "lng": 91.80114
        },
        "placeId": "ChIJITrAQFBYWjcRLi_4QmInt9U"
    },
    {
        "title": "Aha Jewellers (GUWAHATI ) Assam",
        "addressLines": [
            "HB ROAD FANCY BAZAR, GUWAHTI, Kamrup Metropolitan, Assam, 781001"
        ],
        "position": {
            "lat": 26.180466,
            "lng": 91.738956
        },
        "placeId": "ChIJ8YTWlVJbWjcRVtVkrJjr3t4"
    },
    {
        "title": "MAYA JEWELERS (SILCHAR) Assam",
        "addressLines": [
            "NARSINGTOLA, NARSINGTOLA, Cachar, Assam 788001"
        ],
        "position": {
            "lat": 24.826171,
            "lng": 92.800363
        },
        "placeId": "ChIJh3W1al5KTjcROtwtAxWZNNI"
    },
    {
        "title": "Bonafied Nagaland",
        "addressLines": [
            "M4F5+645, National Highway 61, Kohima, Nagaland 797001, India"
        ],
        "position": {
            "lat": 25.673006,
            "lng": 94.107871
        },
        "placeId": "ChIJ-xMpQ3YhRjcRy3g29vWKJww"
    },
    {
        "title": "Sweety Jewellers Bihar",
        "addressLines": [
            "2, Daudnagar - Barun Road, Patwa Toli Rd, near durga club, Jagan mode, Daudnagar, Bihar 824143, India"
        ],
        "position": {
            "lat": 25.033096,
            "lng": 84.405561
        },
        "placeId": "ChIJGy2cva0PjTkRL6prxHq9UCA"
    },
    {
        "title": "KAMADHENU FINE THREADS PVT LTD Karnataka",
        "addressLines": [
            "# 149, Opp SBI, Malur-Kolar road, Maruthi Extension, Malur, Karnataka -563130"
        ],
        "position": {
            "lat": 13.006334,
            "lng": 77.940976
        },
        "placeId": "ChIJEyS9Sm3irTsRiRQ39LQx3cw"
    },
    {
        "title": "JEVAR JEWELLERS Karnataka",
        "addressLines": [
            "#179, Commercial street, Bengaluru - 560001"
        ],
        "position": {
            "lat": 12.981743,
            "lng": 77.60982
        },
        "placeId": "ChIJQ2sPTogWrjsRY0ZtUjCXqMs"
    },
    {
        "title": "BRINDAVAN GEMS & JEWELLERS Karnataka",
        "addressLines": [
            "No. 219 & 220, Kuvempu Layout, Next to Decathalon, Gubbi cross, Kothanur Post, Bengaluru, Karnataka -560077"
        ],
        "position": {
            "lat": 13.06559,
            "lng": 77.652116
        },
        "placeId": "ChIJMzlSMeAZrjsR73gLK4WVE0o"
    },
    {
        "title": "MEENAKSHI JEWELLERS Karnataka",
        "addressLines": [
            "#165, Shop No 2, Sarakki kanakapura main road, Near J P Nagar metro station, Bengaluru - 560078"
        ],
        "position": {
            "lat": 12.908637,
            "lng": 77.573203
        },
        "placeId": "ChQKEgkbx9VYZRWuOxE7avVnAUHTcxIJMTY1LCBTaG9w"
    },
    {
        "title": "DHANALAKSHMI SWARNA MAHAL Karnataka",
        "addressLines": [
            "New thippasandra main road, Seethappa colony, HAL 3rd stage, puttappa Layout, Bengaluru, Karnataka - 560075"
        ],
        "position": {
            "lat": 12.97217,
            "lng": 77.652248
        },
        "placeId": "ChIJx-713KoWrjsR7j2NWp-0iKU"
    },
    {
        "title": "SHV CITY FASHIONS & TEXTILES Karnataka",
        "addressLines": [
            "# 30/7 , Behidn A.G.S.Layout, 3rd Main Rd, Arehalli, Hosakerehalli, Bengaluru, Karnataka 560061, India"
        ],
        "position": {
            "lat": 12.916755,
            "lng": 77.54185
        },
        "placeId": "ChIJEx_k_8o_rjsRasj4BJYXS90"
    },
    {
        "title": "VARDHAMAN JEWELLERS Karnataka",
        "addressLines": [
            "No. 04, Panchayat Layout, Ayodhyarama road, Sarakki, Bengaluru, Karnataka - 560078"
        ],
        "position": {
            "lat": 12.903359,
            "lng": 77.574585
        },
        "placeId": "ChIJsS22uWgVrjsR4ROVklQxKkY"
    },
    {
        "title": "WORLD OF SILVER Karnataka",
        "addressLines": [
            "No. 51, D Devaraj Urs road,Opp Anjaneya swamy temple, Subbarayanakere, Chamrajpura, Mysuru, Karnataka - 570001"
        ],
        "position": {
            "lat": 12.309154,
            "lng": 76.648559
        },
        "placeId": "ChIJpTAgawxwrzsRes6cFW7nI20"
    },
    {
        "title": "BHAWANI FANCY & GIFT CENTER Karnataka",
        "addressLines": [
            "# 1, Krishna Complex, Gouravnagar bus stop, J P Nagar 7th Phase, Bengaluru, Karnataka - 560078"
        ],
        "position": {
            "lat": 12.908459,
            "lng": 77.587085
        },
        "placeId": "ChIJd6LG8RIVrjsRSNSVEBkkpZE"
    },
    {
        "title": "NAVYAA AABHARAN Karnataka",
        "addressLines": [
            "# 432, Krishna mane, old office, K R Pura Extension, Bengaluru, Karnataka - 560036"
        ],
        "position": {
            "lat": 13.011644,
            "lng": 77.698584
        },
        "placeId": "ChIJv8IWTQcRrjsRvr0vV9kg3fw"
    },
    {
        "title": "KVRC CHITHOOR Andhra pradesh",
        "addressLines": [
            "No. 12-147, Bazar Street, Chittoor, Andhra Pradesh, India - 517001"
        ],
        "position": {
            "lat": 13.218869,
            "lng": 79.096296
        },
        "placeId": "ChIJH-HVpKderTsRU06hwuwy4KU"
    }
]

const GoogleMapsComponent = () => { 
    useEffect(() => {
        const applyStylesToShadowDom = () => {
          const shadowHost = document.querySelector('gmpx-store-locator');
    
          if (shadowHost && shadowHost.shadowRoot) {
            const shadowRoot = shadowHost.shadowRoot;
    
            // Use a timeout to ensure elements have time to render
            setTimeout(() => {
              const elements = shadowRoot.querySelectorAll(".select-location h2");
    
              if (elements.length > 0) {
                elements.forEach(el => el.style.textAlign = 'start'); // Example style
              } else {
                console.error('No elements found inside shadow DOM.');
              }
            }, 1000); // Delay to allow rendering
          } else {
            console.error('Shadow host or shadow root not found.');
          }
        };
    
        // Apply styles after component mounts
        applyStylesToShadowDom();
      }, []); // Empty dependency array to ensure it runs once
  return (
    <section>
      <div className="container pb-5">
        <div className="col-12">
          <div className="fs-2 fw-semibold text-center mb-4 text-uppercase">
            store locator
          </div>
          <div className="border border-1 border-black">
            <APILoader
              apiKey="AIzaSyCLl2XwLcdCro91gX5QQmkzmQgRPwgGIRY"
              solutionChannel="GMP_GCC_storelocator_v2"

            />
            <StoreLocator
            className="store-locator"
            featureSet="advanced"
              mapId="28204a3eb787948a"
              listings={LISTINGS}
                mapOptions = {{"center":{"lat":11.0,"lng":76},"fullscreenControl":true,"mapTypeControl":true,"streetViewControl":true,"zoom":20,"zoomControl":true,"maxZoom":21}}          
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoogleMapsComponent;
