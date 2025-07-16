const getBusImage = (busType) => {
  switch (busType.toLowerCase()) {
    case "ac sleeper":
      return "https://i.ytimg.com/vi/nNs9_GNVUc8/maxresdefault.jpg";
    case "luxury ac":
      return "https://th.bing.com/th/id/R.ca754dfbb6c4b2ebd8dfdb783296eace?rik=vJKil6tS2VfAug&riu=http%3a%2f%2f5.imimg.com%2fdata5%2fLH%2fVG%2fMY-16810%2fluxury-bus-rental.jpg";
    case "non-ac express":
      return "https://coachbuildersindia.com/wp-content/uploads/2023/09/Interior-image-of-a-Sleeper-cum-Seater-Hybrid-Bus-in-21-layout-1024x577.webp";
    case "deluxe":
      return "https://tse4.mm.bing.net/th/id/OIP.A_q1q028ZSQOcN3uuuvjJgHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3";
    case "ac semi-sleeper":
    case "volvo b9r":
      return "https://coachbuildersindia.com/wp-content/uploads/2023/09/Interior-of-Sleeper-Buses-in-India-1024x577.webp";
    default:
      return "https://images.unsplash.com/photo-1549921296-3a6b50648a47?auto=format&fit=crop&w=800&q=80";
  }
};
export default getBusImage;