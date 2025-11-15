import { Component } from "@/components/ui/circular-gallery";

// const quotes = [
//   "Tera pyar hai meri zindagi!",
//   "Bas meri zindagi tera pyaar hai!",
//   "Yeh jo halka halka suroor hai \n Yeh teri nazar ka qasoor hai!",
//   "Mere raske qamar tune peheli nazar \n Nazar se milayi maza aagaya!",
//   "O cheliya na priya Sakhiya!",
//   "Hamsaro... marry me marry me Hamsarooo!",
//   "Nuvvu nenu janta, \n Talk of the townu anta!",
//   "Ninne pelladukoni raajuaipotha, \n Nuvve na ranivani fix ayipotha!",
//   "Kannulu neeve reppalu neeve, \n Kalalu maathram cheliyaa naavi!",
//   "Taanu nenu moyalo minnu, \n Taanu nenu kaluva kolanu!",
//   "Husn-E-Jana ki tareef mumkin nahi, \n Afreen Afreen Afreen",
//   "Aisa dekha nahi khoobsurat koi, \n Jism jaise ajanta ki murat koi",
//   "Chupultho guchi guchi champake mere hai!",
//   "Mere baad kis ko sataao gai?",
//   "Aankh un ki ladi yuun meri aankh se, \n Dekh kar yeh ladaaii maza aa gaya"
// ]

// const items = [
//   {'image': '/pictures/diwali.webp', 'text': 'O Cheliya Na Priya Sakhiya...'},
//   {'image': '/pictures/bottu2.webp', 'text': 'Cheyi Jaarenu Naa Manaseeee!'},
//   {'image': '/pictures/birthday.webp','text': 'Tera Pyar hai meri zindagi...'},
//   {'image': '/pictures/seattle.webp','text': 'Bas Meri Zindagi Tera Pyaar Hai!'},
//   {'image': '/pictures/temple2.webp','text': 'Taanu Nenu...'},
//   {'image': '/pictures/car2.webp','text': 'Moeilu Minnu!'},
//   {'image': '/pictures/lockefield.webp','text': 'O Cheli Taara...'},
//   {'image': '/pictures/temple.webp','text': 'Naa Cheli Thaara!'},
//   {'image': '/pictures/first.webp','text': 'Hamsarooo...'},
//   {'image': '/pictures/disney.webp','text': 'Marry Me Marry Me Hamsaro!'},
// ]

const items = [
  {'image': '/pictures/diwali.webp', 'text': 'O Cheliya Na Priya Sakhiya...'},
  {'image': '/pictures/bottu2.webp', 'text': 'Cheyi Jaarenu Naa Manaseeee!'},
  {'image': '/pictures/birthday.webp','text': 'Tera Pyar hai meri zindagi...'},
  {'image': '/pictures/seattle.webp','text': 'Bas Meri Zindagi Tera Pyaar Hai!'},
  {'image': '/pictures/temple2.webp','text': 'Taanu Nenu...'},
  {'image': '/pictures/car2.webp','text': 'Moeilu Minnu!'},
  {'image': '/pictures/lockefield.webp','text': 'O Cheli Taara...'},
  {'image': '/pictures/temple.webp','text': 'Naa Cheli Thaara!'},
  {'image': '/pictures/first.webp','text': 'Hamsarooo...'},
  {'image': '/pictures/disney.webp','text': 'Marry Me Marry Me Hamsaro!'},
]


const Pictures = () => {
  return (
    <div className="flex w-full h-screen justify-center items-center bg-transparent -mb-25 -mt-30">
      <div 
        className="w-full max-w-screen-xl mx-auto h-[80vh] overflow-hidden relative bg-transparent border-none shadow-none"
      >
        <Component 
          items={items} 
          bend={-0.5} 
          textColor="#ffffff" 
          borderRadius={0.03} 
        />
      </div>
    </div>
  );
};

export { Pictures };