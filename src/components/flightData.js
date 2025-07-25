const flights = [
  {
    "id": 1,
    "airline": "Akasa Air",
    "from": "Bangalore",
    "to": "Pune",
    "departure": "2025-07-31 21:15",
    "arrival": "2025-07-31 23:15",
    "duration": "2h",
    "price": 4011,
    "class": "Business"
  },
  {
    "id": 2,
    "airline": "Air India",
    "from": "Pune",
    "to": "Kolkata",
    "departure": "2025-07-21 05:45",
    "arrival": "2025-07-21 08:45",
    "duration": "3h",
    "price": 6588,
    "class": "Economy"
  },
  {
    "id": 3,
    "airline": "Akasa Air",
    "from": "Chennai",
    "to": "Delhi",
    "departure": "2025-08-08 19:30",
    "arrival": "2025-08-09 00:30",
    "duration": "5h",
    "price": 11361,
    "class": "First"
  },
  {
    "id": 4,
    "airline": "Akasa Air",
    "from": "Pune",
    "to": "Delhi",
    "departure": "2025-07-27 18:00",
    "arrival": "2025-07-27 21:00",
    "duration": "3h",
    "price": 4636,
    "class": "Business"
  },
  {
    "id": 5,
    "airline": "Vistara",
    "from": "Chennai",
    "to": "Jaipur",
    "departure": "2025-07-28 02:45",
    "arrival": "2025-07-28 05:45",
    "duration": "3h",
    "price": 8057,
    "class": "First"
  },
  {
    "id": 6,
    "airline": "Vistara",
    "from": "Delhi",
    "to": "Ahmedabad",
    "departure": "2025-08-07 01:45",
    "arrival": "2025-08-07 04:45",
    "duration": "3h",
    "price": 8857,
    "class": "First"
  },
  {
    "id": 7,
    "airline": "Air India",
    "from": "Ahmedabad",
    "to": "Mumbai",
    "departure": "2025-07-11 04:15",
    "arrival": "2025-07-11 05:15",
    "duration": "1h",
    "price": 7838,
    "class": "First"
  },
  {
    "id": 8,
    "airline": "Vistara",
    "from": "Kolkata",
    "to": "Ahmedabad",
    "departure": "2025-07-13 01:30",
    "arrival": "2025-07-13 06:30",
    "duration": "5h",
    "price": 5368,
    "class": "Premium Economy"
  },
  {
    "id": 9,
    "airline": "Akasa Air",
    "from": "Bangalore",
    "to": "Pune",
    "departure": "2025-08-01 15:15",
    "arrival": "2025-08-01 16:15",
    "duration": "1h",
    "price": 6402,
    "class": "Premium Economy"
  },
  {
    "id": 10,
    "airline": "Vistara",
    "from": "Bangalore",
    "to": "Mumbai",
    "departure": "2025-07-11 03:30",
    "arrival": "2025-07-11 08:30",
    "duration": "5h",
    "price": 5953,
    "class": "First"
  },
  {
    "id": 11,
    "airline": "Air India",
    "from": "Chennai",
    "to": "Mumbai",
    "departure": "2025-07-13 09:30",
    "arrival": "2025-07-13 13:30",
    "duration": "4h",
    "price": 10157,
    "class": "Economy"
  },
  {
    "id": 12,
    "airline": "Vistara",
    "from": "Chennai",
    "to": "Hyderabad",
    "departure": "2025-08-01 19:30",
    "arrival": "2025-08-01 20:30",
    "duration": "1h",
    "price": 11542,
    "class": "Business"
  },
  {
    "id": 13,
    "airline": "Go First",
    "from": "Kolkata",
    "to": "Pune",
    "departure": "2025-07-15 13:15",
    "arrival": "2025-07-15 17:15",
    "duration": "4h",
    "price": 8246,
    "class": "First"
  },
  {
    "id": 14,
    "airline": "IndiGo",
    "from": "Hyderabad",
    "to": "Mumbai",
    "departure": "2025-08-02 05:30",
    "arrival": "2025-08-02 08:30",
    "duration": "3h",
    "price": 6505,
    "class": "First"
  },
  {
    "id": 15,
    "airline": "Air India",
    "from": "Bangalore",
    "to": "Hyderabad",
    "departure": "2025-07-31 04:15",
    "arrival": "2025-07-31 07:15",
    "duration": "3h",
    "price": 4527,
    "class": "Economy"
  },
  {
    "id": 16,
    "airline": "Akasa Air",
    "from": "Delhi",
    "to": "Lucknow",
    "departure": "2025-07-19 05:15",
    "arrival": "2025-07-19 08:15",
    "duration": "3h",
    "price": 7235,
    "class": "First"
  },
  {
    "id": 17,
    "airline": "Air India",
    "from": "Ahmedabad",
    "to": "Chennai",
    "departure": "2025-07-26 11:00",
    "arrival": "2025-07-26 16:00",
    "duration": "5h",
    "price": 14895,
    "class": "Economy"
  },
  {
    "id": 18,
    "airline": "IndiGo",
    "from": "Bangalore",
    "to": "Hyderabad",
    "departure": "2025-08-01 01:30",
    "arrival": "2025-08-01 06:30",
    "duration": "5h",
    "price": 9476,
    "class": "Premium Economy"
  },
  {
    "id": 19,
    "airline": "IndiGo",
    "from": "Jaipur",
    "to": "Delhi",
    "departure": "2025-08-02 18:00",
    "arrival": "2025-08-02 19:00",
    "duration": "1h",
    "price": 3032,
    "class": "Premium Economy"
  },
  {
    "id": 20,
    "airline": "Air India",
    "from": "Kolkata",
    "to": "Lucknow",
    "departure": "2025-07-13 21:30",
    "arrival": "2025-07-14 02:30",
    "duration": "5h",
    "price": 6293,
    "class": "Business"
  },
  {
    "id": 21,
    "airline": "Vistara",
    "from": "Lucknow",
    "to": "Chennai",
    "departure": "2025-07-12 17:15",
    "arrival": "2025-07-12 20:15",
    "duration": "3h",
    "price": 3115,
    "class": "Business"
  },
  {
    "id": 22,
    "airline": "Akasa Air",
    "from": "Jaipur",
    "to": "Chennai",
    "departure": "2025-08-05 14:00",
    "arrival": "2025-08-05 19:00",
    "duration": "5h",
    "price": 14149,
    "class": "Business"
  },
  {
    "id": 23,
    "airline": "Go First",
    "from": "Delhi",
    "to": "Bangalore",
    "departure": "2025-07-15 06:30",
    "arrival": "2025-07-15 11:30",
    "duration": "5h",
    "price": 9476,
    "class": "Premium Economy"
  },
  {
    "id": 24,
    "airline": "Go First",
    "from": "Lucknow",
    "to": "Jaipur",
    "departure": "2025-08-06 19:00",
    "arrival": "2025-08-07 00:00",
    "duration": "5h",
    "price": 13565,
    "class": "Economy"
  },
  {
    "id": 25,
    "airline": "Go First",
    "from": "Hyderabad",
    "to": "Pune",
    "departure": "2025-07-11 18:15",
    "arrival": "2025-07-11 23:15",
    "duration": "5h",
    "price": 13155,
    "class": "First"
  },
  {
    "id": 26,
    "airline": "Go First",
    "from": "Ahmedabad",
    "to": "Bangalore",
    "departure": "2025-08-03 14:45",
    "arrival": "2025-08-03 19:45",
    "duration": "5h",
    "price": 10075,
    "class": "Premium Economy"
  },
  {
    "id": 27,
    "airline": "Air India",
    "from": "Bangalore",
    "to": "Jaipur",
    "departure": "2025-08-08 11:15",
    "arrival": "2025-08-08 14:15",
    "duration": "3h",
    "price": 10885,
    "class": "First"
  },
  {
    "id": 28,
    "airline": "Vistara",
    "from": "Ahmedabad",
    "to": "Hyderabad",
    "departure": "2025-08-02 18:00",
    "arrival": "2025-08-02 22:00",
    "duration": "4h",
    "price": 14114,
    "class": "First"
  },
  {
    "id": 29,
    "airline": "SpiceJet",
    "from": "Ahmedabad",
    "to": "Lucknow",
    "departure": "2025-08-06 11:30",
    "arrival": "2025-08-06 16:30",
    "duration": "5h",
    "price": 3474,
    "class": "Business"
  },
  {
    "id": 30,
    "airline": "SpiceJet",
    "from": "Ahmedabad",
    "to": "Chennai",
    "departure": "2025-07-27 12:00",
    "arrival": "2025-07-27 13:00",
    "duration": "1h",
    "price": 12705,
    "class": "Economy"
  },
  {
    "id": 31,
    "airline": "SpiceJet",
    "from": "Delhi",
    "to": "Pune",
    "departure": "2025-08-06 03:15",
    "arrival": "2025-08-06 08:15",
    "duration": "5h",
    "price": 14677,
    "class": "Economy"
  },
  {
    "id": 32,
    "airline": "Vistara",
    "from": "Bangalore",
    "to": "Lucknow",
    "departure": "2025-07-29 18:30",
    "arrival": "2025-07-29 21:30",
    "duration": "3h",
    "price": 9228,
    "class": "First"
  },
  {
    "id": 33,
    "airline": "Air India",
    "from": "Lucknow",
    "to": "Chennai",
    "departure": "2025-08-04 11:45",
    "arrival": "2025-08-04 14:45",
    "duration": "3h",
    "price": 13948,
    "class": "Business"
  },
  {
    "id": 34,
    "airline": "Vistara",
    "from": "Bangalore",
    "to": "Jaipur",
    "departure": "2025-07-29 22:00",
    "arrival": "2025-07-30 02:00",
    "duration": "4h",
    "price": 5447,
    "class": "First"
  },
  {
    "id": 35,
    "airline": "SpiceJet",
    "from": "Pune",
    "to": "Ahmedabad",
    "departure": "2025-08-06 13:15",
    "arrival": "2025-08-06 14:15",
    "duration": "1h",
    "price": 5463,
    "class": "First"
  },
  {
    "id": 36,
    "airline": "IndiGo",
    "from": "Jaipur",
    "to": "Chennai",
    "departure": "2025-08-10 10:15",
    "arrival": "2025-08-10 11:15",
    "duration": "1h",
    "price": 11450,
    "class": "Economy"
  },
  {
    "id": 37,
    "airline": "Air India",
    "from": "Bangalore",
    "to": "Lucknow",
    "departure": "2025-07-28 07:15",
    "arrival": "2025-07-28 09:15",
    "duration": "2h",
    "price": 6802,
    "class": "Business"
  },
  {
    "id": 38,
    "airline": "Vistara",
    "from": "Lucknow",
    "to": "Mumbai",
    "departure": "2025-08-01 01:00",
    "arrival": "2025-08-01 05:00",
    "duration": "4h",
    "price": 6745,
    "class": "Premium Economy"
  },
  {
    "id": 39,
    "airline": "IndiGo",
    "from": "Kolkata",
    "to": "Mumbai",
    "departure": "2025-07-18 17:30",
    "arrival": "2025-07-18 22:30",
    "duration": "5h",
    "price": 11773,
    "class": "First"
  },
  {
    "id": 40,
    "airline": "Akasa Air",
    "from": "Mumbai",
    "to": "Ahmedabad",
    "departure": "2025-08-02 12:45",
    "arrival": "2025-08-02 13:45",
    "duration": "1h",
    "price": 11269,
    "class": "Business"
  },
  {
    "id": 41,
    "airline": "Go First",
    "from": "Hyderabad",
    "to": "Chennai",
    "departure": "2025-07-12 23:15",
    "arrival": "2025-07-13 01:15",
    "duration": "2h",
    "price": 5795,
    "class": "Economy"
  },
  {
    "id": 42,
    "airline": "Akasa Air",
    "from": "Mumbai",
    "to": "Bangalore",
    "departure": "2025-07-19 11:15",
    "arrival": "2025-07-19 12:15",
    "duration": "1h",
    "price": 13918,
    "class": "Economy"
  },
  {
    "id": 43,
    "airline": "SpiceJet",
    "from": "Mumbai",
    "to": "Lucknow",
    "departure": "2025-07-20 13:45",
    "arrival": "2025-07-20 18:45",
    "duration": "5h",
    "price": 7457,
    "class": "First"
  },
  {
    "id": 44,
    "airline": "Air India",
    "from": "Kolkata",
    "to": "Delhi",
    "departure": "2025-07-26 16:30",
    "arrival": "2025-07-26 19:30",
    "duration": "3h",
    "price": 5777,
    "class": "Premium Economy"
  },
  {
    "id": 45,
    "airline": "Air India",
    "from": "Pune",
    "to": "Jaipur",
    "departure": "2025-07-15 19:45",
    "arrival": "2025-07-15 22:45",
    "duration": "3h",
    "price": 7236,
    "class": "First"
  },
  {
    "id": 46,
    "airline": "Air India",
    "from": "Bangalore",
    "to": "Kolkata",
    "departure": "2025-08-09 08:30",
    "arrival": "2025-08-09 12:30",
    "duration": "4h",
    "price": 13256,
    "class": "First"
  },
  {
    "id": 47,
    "airline": "Akasa Air",
    "from": "Bangalore",
    "to": "Chennai",
    "departure": "2025-07-14 04:45",
    "arrival": "2025-07-14 05:45",
    "duration": "1h",
    "price": 11221,
    "class": "Economy"
  },
  {
    "id": 48,
    "airline": "IndiGo",
    "from": "Delhi",
    "to": "Hyderabad",
    "departure": "2025-07-27 17:00",
    "arrival": "2025-07-27 21:00",
    "duration": "4h",
    "price": 12600,
    "class": "Premium Economy"
  },
  {
    "id": 49,
    "airline": "SpiceJet",
    "from": "Ahmedabad",
    "to": "Hyderabad",
    "departure": "2025-08-05 02:00",
    "arrival": "2025-08-05 07:00",
    "duration": "5h",
    "price": 9054,
    "class": "Premium Economy"
  },
  {
    "id": 50,
    "airline": "Go First",
    "from": "Bangalore",
    "to": "Pune",
    "departure": "2025-08-10 16:45",
    "arrival": "2025-08-10 20:45",
    "duration": "4h",
    "price": 8252,
    "class": "Premium Economy"
  },
  {
    "id": 51,
    "airline": "IndiGo",
    "from": "Ahmedabad",
    "to": "Hyderabad",
    "departure": "2025-08-07 21:00",
    "arrival": "2025-08-07 22:00",
    "duration": "1h",
    "price": 9683,
    "class": "Economy"
  },
  {
    "id": 52,
    "airline": "Akasa Air",
    "from": "Hyderabad",
    "to": "Kolkata",
    "departure": "2025-07-22 02:00",
    "arrival": "2025-07-22 06:00",
    "duration": "4h",
    "price": 3222,
    "class": "Business"
  },
  {
    "id": 53,
    "airline": "Go First",
    "from": "Hyderabad",
    "to": "Jaipur",
    "departure": "2025-07-19 19:45",
    "arrival": "2025-07-19 22:45",
    "duration": "3h",
    "price": 10662,
    "class": "Economy"
  },
  {
    "id": 54,
    "airline": "Go First",
    "from": "Pune",
    "to": "Mumbai",
    "departure": "2025-07-11 06:00",
    "arrival": "2025-07-11 09:00",
    "duration": "3h",
    "price": 4214,
    "class": "First"
  },
  {
    "id": 55,
    "airline": "Go First",
    "from": "Hyderabad",
    "to": "Bangalore",
    "departure": "2025-07-18 00:00",
    "arrival": "2025-07-18 01:00",
    "duration": "1h",
    "price": 10725,
    "class": "Economy"
  },
  {
    "id": 56,
    "airline": "Go First",
    "from": "Chennai",
    "to": "Kolkata",
    "departure": "2025-07-20 11:00",
    "arrival": "2025-07-20 15:00",
    "duration": "4h",
    "price": 13181,
    "class": "First"
  },
  {
    "id": 57,
    "airline": "Air India",
    "from": "Lucknow",
    "to": "Pune",
    "departure": "2025-07-14 17:15",
    "arrival": "2025-07-14 20:15",
    "duration": "3h",
    "price": 8805,
    "class": "Premium Economy"
  },
  {
    "id": 58,
    "airline": "Air India",
    "from": "Ahmedabad",
    "to": "Jaipur",
    "departure": "2025-08-03 06:15",
    "arrival": "2025-08-03 11:15",
    "duration": "5h",
    "price": 14239,
    "class": "Business"
  },
  {
    "id": 59,
    "airline": "Vistara",
    "from": "Hyderabad",
    "to": "Kolkata",
    "departure": "2025-07-20 19:30",
    "arrival": "2025-07-20 20:30",
    "duration": "1h",
    "price": 3526,
    "class": "First"
  },
  {
    "id": 60,
    "airline": "SpiceJet",
    "from": "Mumbai",
    "to": "Delhi",
    "departure": "2025-08-09 14:00",
    "arrival": "2025-08-09 18:00",
    "duration": "4h",
    "price": 9662,
    "class": "Economy"
  },
  {
    "id": 61,
    "airline": "Go First",
    "from": "Hyderabad",
    "to": "Lucknow",
    "departure": "2025-07-12 11:30",
    "arrival": "2025-07-12 14:30",
    "duration": "3h",
    "price": 7239,
    "class": "Premium Economy"
  },
  {
    "id": 62,
    "airline": "Air India",
    "from": "Kolkata",
    "to": "Lucknow",
    "departure": "2025-07-19 23:45",
    "arrival": "2025-07-20 02:45",
    "duration": "3h",
    "price": 6786,
    "class": "Premium Economy"
  },
  {
    "id": 63,
    "airline": "Akasa Air",
    "from": "Kolkata",
    "to": "Hyderabad",
    "departure": "2025-07-13 14:45",
    "arrival": "2025-07-13 17:45",
    "duration": "3h",
    "price": 5993,
    "class": "First"
  },
  {
    "id": 64,
    "airline": "Akasa Air",
    "from": "Mumbai",
    "to": "Hyderabad",
    "departure": "2025-08-08 15:15",
    "arrival": "2025-08-08 19:15",
    "duration": "4h",
    "price": 5575,
    "class": "Economy"
  },
  {
    "id": 65,
    "airline": "SpiceJet",
    "from": "Hyderabad",
    "to": "Jaipur",
    "departure": "2025-07-18 01:00",
    "arrival": "2025-07-18 06:00",
    "duration": "5h",
    "price": 13300,
    "class": "Business"
  },
  {
    "id": 66,
    "airline": "IndiGo",
    "from": "Lucknow",
    "to": "Bangalore",
    "departure": "2025-07-19 03:00",
    "arrival": "2025-07-19 07:00",
    "duration": "4h",
    "price": 8647,
    "class": "First"
  },
  {
    "id": 67,
    "airline": "IndiGo",
    "from": "Mumbai",
    "to": "Lucknow",
    "departure": "2025-07-12 17:15",
    "arrival": "2025-07-12 18:15",
    "duration": "1h",
    "price": 5474,
    "class": "First"
  },
  {
    "id": 68,
    "airline": "Vistara",
    "from": "Ahmedabad",
    "to": "Bangalore",
    "departure": "2025-07-27 14:15",
    "arrival": "2025-07-27 18:15",
    "duration": "4h",
    "price": 11746,
    "class": "Premium Economy"
  },
  {
    "id": 69,
    "airline": "IndiGo",
    "from": "Pune",
    "to": "Kolkata",
    "departure": "2025-07-14 09:00",
    "arrival": "2025-07-14 13:00",
    "duration": "4h",
    "price": 7443,
    "class": "Business"
  },
  {
    "id": 70,
    "airline": "Akasa Air",
    "from": "Hyderabad",
    "to": "Ahmedabad",
    "departure": "2025-08-03 16:15",
    "arrival": "2025-08-03 19:15",
    "duration": "3h",
    "price": 5643,
    "class": "Premium Economy"
  },
  {
    "id": 71,
    "airline": "Akasa Air",
    "from": "Kolkata",
    "to": "Hyderabad",
    "departure": "2025-08-09 20:15",
    "arrival": "2025-08-10 01:15",
    "duration": "5h",
    "price": 11876,
    "class": "First"
  },
  {
    "id": 72,
    "airline": "Go First",
    "from": "Lucknow",
    "to": "Pune",
    "departure": "2025-07-18 08:15",
    "arrival": "2025-07-18 11:15",
    "duration": "3h",
    "price": 3034,
    "class": "Business"
  },
  {
    "id": 73,
    "airline": "Go First",
    "from": "Mumbai",
    "to": "Ahmedabad",
    "departure": "2025-07-22 10:45",
    "arrival": "2025-07-22 14:45",
    "duration": "4h",
    "price": 5625,
    "class": "First"
  },
  {
    "id": 74,
    "airline": "SpiceJet",
    "from": "Pune",
    "to": "Jaipur",
    "departure": "2025-08-04 16:45",
    "arrival": "2025-08-04 17:45",
    "duration": "1h",
    "price": 4132,
    "class": "Economy"
  },
  {
    "id": 75,
    "airline": "Akasa Air",
    "from": "Hyderabad",
    "to": "Kolkata",
    "departure": "2025-08-02 09:45",
    "arrival": "2025-08-02 13:45",
    "duration": "4h",
    "price": 3790,
    "class": "Business"
  },
  {
    "id": 76,
    "airline": "Go First",
    "from": "Chennai",
    "to": "Hyderabad",
    "departure": "2025-07-12 22:15",
    "arrival": "2025-07-13 00:15",
    "duration": "2h",
    "price": 4282,
    "class": "Premium Economy"
  },
  {
    "id": 77,
    "airline": "SpiceJet",
    "from": "Ahmedabad",
    "to": "Lucknow",
    "departure": "2025-08-10 03:00",
    "arrival": "2025-08-10 05:00",
    "duration": "2h",
    "price": 7756,
    "class": "Business"
  },
  {
    "id": 78,
    "airline": "Go First",
    "from": "Delhi",
    "to": "Lucknow",
    "departure": "2025-07-23 20:45",
    "arrival": "2025-07-23 22:45",
    "duration": "2h",
    "price": 13236,
    "class": "Economy"
  },
  {
    "id": 79,
    "airline": "Vistara",
    "from": "Pune",
    "to": "Bangalore",
    "departure": "2025-07-26 01:00",
    "arrival": "2025-07-26 04:00",
    "duration": "3h",
    "price": 13407,
    "class": "Business"
  },
  {
    "id": 80,
    "airline": "SpiceJet",
    "from": "Delhi",
    "to": "Pune",
    "departure": "2025-07-24 13:00",
    "arrival": "2025-07-24 18:00",
    "duration": "5h",
    "price": 13400,
    "class": "Economy"
  },
  {
    "id": 81,
    "airline": "Vistara",
    "from": "Kolkata",
    "to": "Bangalore",
    "departure": "2025-08-08 08:15",
    "arrival": "2025-08-08 11:15",
    "duration": "3h",
    "price": 4758,
    "class": "Economy"
  },
  {
    "id": 82,
    "airline": "Akasa Air",
    "from": "Lucknow",
    "to": "Jaipur",
    "departure": "2025-07-29 10:45",
    "arrival": "2025-07-29 12:45",
    "duration": "2h",
    "price": 12805,
    "class": "Premium Economy"
  },
  {
    "id": 83,
    "airline": "Go First",
    "from": "Chennai",
    "to": "Hyderabad",
    "departure": "2025-07-24 02:45",
    "arrival": "2025-07-24 07:45",
    "duration": "5h",
    "price": 6169,
    "class": "Economy"
  },
  {
    "id": 84,
    "airline": "Air India",
    "from": "Chennai",
    "to": "Kolkata",
    "departure": "2025-08-06 10:15",
    "arrival": "2025-08-06 11:15",
    "duration": "1h",
    "price": 6402,
    "class": "Business"
  },
  {
    "id": 85,
    "airline": "Go First",
    "from": "Bangalore",
    "to": "Hyderabad",
    "departure": "2025-07-16 23:15",
    "arrival": "2025-07-17 02:15",
    "duration": "3h",
    "price": 3829,
    "class": "Premium Economy"
  },
  {
    "id": 86,
    "airline": "Akasa Air",
    "from": "Delhi",
    "to": "Mumbai",
    "departure": "2025-07-24 03:00",
    "arrival": "2025-07-24 06:00",
    "duration": "3h",
    "price": 3974,
    "class": "Business"
  },
  {
    "id": 87,
    "airline": "Go First",
    "from": "Kolkata",
    "to": "Hyderabad",
    "departure": "2025-08-10 02:00",
    "arrival": "2025-08-10 04:00",
    "duration": "2h",
    "price": 13180,
    "class": "Business"
  },
  {
    "id": 88,
    "airline": "IndiGo",
    "from": "Hyderabad",
    "to": "Bangalore",
    "departure": "2025-07-26 12:45",
    "arrival": "2025-07-26 15:45",
    "duration": "3h",
    "price": 5479,
    "class": "Business"
  },
  {
    "id": 89,
    "airline": "Go First",
    "from": "Pune",
    "to": "Delhi",
    "departure": "2025-07-25 05:15",
    "arrival": "2025-07-25 08:15",
    "duration": "3h",
    "price": 14424,
    "class": "Economy"
  },
  {
    "id": 90,
    "airline": "Go First",
    "from": "Delhi",
    "to": "Jaipur",
    "departure": "2025-08-10 07:30",
    "arrival": "2025-08-10 11:30",
    "duration": "4h",
    "price": 7177,
    "class": "Economy"
  },
  {
    "id": 91,
    "airline": "Go First",
    "from": "Ahmedabad",
    "to": "Kolkata",
    "departure": "2025-07-27 02:00",
    "arrival": "2025-07-27 06:00",
    "duration": "4h",
    "price": 14007,
    "class": "First"
  },
  {
    "id": 92,
    "airline": "Go First",
    "from": "Bangalore",
    "to": "Ahmedabad",
    "departure": "2025-08-10 05:15",
    "arrival": "2025-08-10 08:15",
    "duration": "3h",
    "price": 8660,
    "class": "First"
  },
  {
    "id": 93,
    "airline": "Vistara",
    "from": "Pune",
    "to": "Kolkata",
    "departure": "2025-07-19 08:15",
    "arrival": "2025-07-19 11:15",
    "duration": "3h",
    "price": 9826,
    "class": "Business"
  },
  {
    "id": 94,
    "airline": "Go First",
    "from": "Bangalore",
    "to": "Hyderabad",
    "departure": "2025-07-29 13:30",
    "arrival": "2025-07-29 14:30",
    "duration": "1h",
    "price": 11202,
    "class": "Economy"
  },
  {
    "id": 95,
    "airline": "Air India",
    "from": "Ahmedabad",
    "to": "Mumbai",
    "departure": "2025-07-16 03:45",
    "arrival": "2025-07-16 06:45",
    "duration": "3h",
    "price": 7720,
    "class": "Premium Economy"
  },
  {
    "id": 96,
    "airline": "Go First",
    "from": "Bangalore",
    "to": "Jaipur",
    "departure": "2025-08-05 10:30",
    "arrival": "2025-08-05 11:30",
    "duration": "1h",
    "price": 14881,
    "class": "First"
  },
  {
    "id": 97,
    "airline": "SpiceJet",
    "from": "Ahmedabad",
    "to": "Pune",
    "departure": "2025-07-30 20:00",
    "arrival": "2025-07-31 01:00",
    "duration": "5h",
    "price": 10891,
    "class": "Premium Economy"
  },
  {
    "id": 98,
    "airline": "Air India",
    "from": "Jaipur",
    "to": "Bangalore",
    "departure": "2025-08-02 14:30",
    "arrival": "2025-08-02 16:30",
    "duration": "2h",
    "price": 11222,
    "class": "Business"
  },
  {
    "id": 99,
    "airline": "SpiceJet",
    "from": "Pune",
    "to": "Bangalore",
    "departure": "2025-07-23 09:00",
    "arrival": "2025-07-23 13:00",
    "duration": "4h",
    "price": 10223,
    "class": "Economy"
  },
  {
    "id": 100,
    "airline": "Vistara",
    "from": "Ahmedabad",
    "to": "Pune",
    "departure": "2025-07-28 20:15",
    "arrival": "2025-07-29 00:15",
    "duration": "4h",
    "price": 4664,
    "class": "Business"
  }
];

export default flights;