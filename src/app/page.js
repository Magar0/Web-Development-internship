import Card from "./components/card/page";

export default function Home() {

  const data = [
    {
      id: 1,
      name: "Dr. Najwa Joharji",
      type: "pediatric dental consultant",
      image: "https://img.freepik.com/free-photo/beautiful-young-female-doctor-looking-camera-office_1301-7807.jpg"
    },
    {
      id: 2,
      name: "Dr. Ibrahim Almajed",
      type: "orthodontist",
      image: "https://hips.hearstapps.com/hmg-prod/images/portrait-of-a-happy-young-doctor-in-his-clinic-royalty-free-image-1661432441.jpg?crop=0.66698xw:1xh;center,top&resize=640:*"
    },
    {
      id: 3,
      name: "Dr. Mahnna Aljabab",
      type: "orthodontist",
      image: "https://t4.ftcdn.net/jpg/03/20/52/31/360_F_320523164_tx7Rdd7I2XDTvvKfz2oRuRpKOPE5z0ni.jpg"
    },
    {
      id: 4,
      name: "Dr. Wael Alomari",
      type: "dental care",
      image: "https://www.shutterstock.com/image-photo/profile-photo-attractive-family-doc-600nw-1724693776.jpg"
    },
    {
      id: 5,
      name: "Dr. Ibrahim Almajed",
      type: "orthodontist",
      image: "https://hips.hearstapps.com/hmg-prod/images/portrait-of-a-happy-young-doctor-in-his-clinic-royalty-free-image-1661432441.jpg?crop=0.66698xw:1xh;center,top&resize=640:*"
    },
    {
      id: 6,
      name: "Dr. Mahnna Aljabab",
      type: "orthodontist",
      image: "https://t4.ftcdn.net/jpg/03/20/52/31/360_F_320523164_tx7Rdd7I2XDTvvKfz2oRuRpKOPE5z0ni.jpg"
    },
    {
      id: 7,
      name: "Dr. Wael Alomari",
      type: "dental care",
      image: "https://www.shutterstock.com/image-photo/profile-photo-attractive-family-doc-600nw-1724693776.jpg"
    },
    {
      id: 8,
      name: "Dr. Mahnna Aljabab",
      type: "orthodontist",
      image: "https://t4.ftcdn.net/jpg/03/20/52/31/360_F_320523164_tx7Rdd7I2XDTvvKfz2oRuRpKOPE5z0ni.jpg"
    },
    {
      id: 9,
      name: "Dr. Najwa Joharji",
      type: "pediatric dental consultant",
      image: "https://img.freepik.com/free-photo/beautiful-young-female-doctor-looking-camera-office_1301-7807.jpg"
    },
    {
      id: 10,
      name: "Dr. Ibrahim Almajed",
      type: "orthodontist",
      image: "https://hips.hearstapps.com/hmg-prod/images/portrait-of-a-happy-young-doctor-in-his-clinic-royalty-free-image-1661432441.jpg?crop=0.66698xw:1xh;center,top&resize=640:*"
    },
    {
      id: 11,
      name: "Dr. Mahnna Aljabab",
      type: "orthodontist",
      image: "https://t4.ftcdn.net/jpg/03/20/52/31/360_F_320523164_tx7Rdd7I2XDTvvKfz2oRuRpKOPE5z0ni.jpg"
    },
    {
      id: 12,
      name: "Dr. Wael Alomari",
      type: "dental care",
      image: "https://www.shutterstock.com/image-photo/profile-photo-attractive-family-doc-600nw-1724693776.jpg"
    }, {
      id: 13,
      name: "Dr. Najwa Joharji",
      type: "pediatric dental consultant",
      image: "https://img.freepik.com/free-photo/beautiful-young-female-doctor-looking-camera-office_1301-7807.jpg"
    },
    {
      id: 14,
      name: "Dr. Ibrahim Almajed",
      type: "orthodontist",
      image: "https://hips.hearstapps.com/hmg-prod/images/portrait-of-a-happy-young-doctor-in-his-clinic-royalty-free-image-1661432441.jpg?crop=0.66698xw:1xh;center,top&resize=640:*"
    },
    {
      id: 15,
      name: "Dr. Mahnna Aljabab",
      type: "orthodontist",
      image: "https://t4.ftcdn.net/jpg/03/20/52/31/360_F_320523164_tx7Rdd7I2XDTvvKfz2oRuRpKOPE5z0ni.jpg"
    },
    {
      id: 16,
      name: "Dr. Wael Alomari",
      type: "dental care",
      image: "https://www.shutterstock.com/image-photo/profile-photo-attractive-family-doc-600nw-1724693776.jpg"
    }, {
      id: 17,
      name: "Dr. Najwa Joharji",
      type: "pediatric dental consultant",
      image: "https://img.freepik.com/free-photo/beautiful-young-female-doctor-looking-camera-office_1301-7807.jpg"
    },
    {
      id: 18,
      name: "Dr. Ibrahim Almajed",
      type: "orthodontist",
      image: "https://hips.hearstapps.com/hmg-prod/images/portrait-of-a-happy-young-doctor-in-his-clinic-royalty-free-image-1661432441.jpg?crop=0.66698xw:1xh;center,top&resize=640:*"
    },
    {
      id: 19,
      name: "Dr. Mahnna Aljabab",
      type: "orthodontist",
      image: "https://t4.ftcdn.net/jpg/03/20/52/31/360_F_320523164_tx7Rdd7I2XDTvvKfz2oRuRpKOPE5z0ni.jpg"
    },
    {
      id: 20,
      name: "Dr. Wael Alomari",
      type: "dental care",
      image: "https://www.shutterstock.com/image-photo/profile-photo-attractive-family-doc-600nw-1724693776.jpg"
    }, {
      id: 21,
      name: "Dr. Najwa Joharji",
      type: "pediatric dental consultant",
      image: "https://img.freepik.com/free-photo/beautiful-young-female-doctor-looking-camera-office_1301-7807.jpg"
    },
    {
      id: 22,
      name: "Dr. Ibrahim Almajed",
      type: "orthodontist",
      image: "https://hips.hearstapps.com/hmg-prod/images/portrait-of-a-happy-young-doctor-in-his-clinic-royalty-free-image-1661432441.jpg?crop=0.66698xw:1xh;center,top&resize=640:*"
    },
    {
      id: 23,
      name: "Dr. Mahnna Aljabab",
      type: "orthodontist",
      image: "https://t4.ftcdn.net/jpg/03/20/52/31/360_F_320523164_tx7Rdd7I2XDTvvKfz2oRuRpKOPE5z0ni.jpg"
    },
    {
      id: 24,
      name: "Dr. Wael Alomari",
      type: "dental care",
      image: "https://www.shutterstock.com/image-photo/profile-photo-attractive-family-doc-600nw-1724693776.jpg"
    },
    {
      id: 25,
      name: "Dr. Wael Alomari",
      type: "dental care",
      image: "https://www.shutterstock.com/image-photo/profile-photo-attractive-family-doc-600nw-1724693776.jpg"
    },
  ]

  return (
    <section className="main p-5">
      <h1 className=" text-center my-10 text-2xl">Select Doctor</h1>
      <div className="container grid place-items-center grid-cols-4  m-auto gap-10">
        {
          data.length > 0 && data.map(item => (
            <Card key={item.id} item={item} />
          ))
        }
      </div>

    </section>

  );
}
