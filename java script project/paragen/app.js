const text = [
 
  "The rise of artificial intelligence has caused many industries to rethink their workflows. AI is now a part of daily life, assisting with tasks such as voice recognition, facial recognition, and even driving cars. Businesses across the world are leveraging machine learning to enhance productivity. Startups are harnessing the power of AI to create cutting-edge products. However, the rapid advancement of AI technologies has led to concerns regarding job displacement and ethical considerations. While there is no denying the benefits, proper regulation is needed to avoid misuse. AIs potential in healthcare is immense, with applications in diagnostics and personalized medicine. Nonetheless, there are challenges related to data privacy, algorithmic transparency, and bias that need addressing. The future will see AI play a central role in almost every sector of the economy.",


  "In recent years, climate change has emerged as one of the biggest challenges facing the global community. Countries are investing heavily in renewable energy technologies like wind, solar, and hydropower. These technologies aim to reduce dependence on fossil fuels and curb greenhouse gas emissions. Governments around the world are setting ambitious carbon neutrality goals. Electric vehicles are part of the solution, and many automobile manufacturers have started shifting toward electric models. Public awareness around climate change has also grown, with younger generations becoming more active in advocacy. Yet, despite these efforts, there are significant obstacles to transitioning to a completely green economy. Energy storage, infrastructure development, and political will are all critical factors. The urgency to act is felt now more than ever.",


 " The internet has completely transformed communication. Emails, instant messaging, and social media have replaced traditional forms of communication such as letters and telegrams. This digital revolution has made it easier for people to stay in touch, regardless of their geographical location. Businesses have also adopted online communication tools, allowing teams to collaborate remotely. While this connectivity brings numerous benefits, it also raises concerns over privacy and data security. The rise of social media platforms has reshaped societal norms, with influencers and content creators playing a key role in shaping opinions. Digital communication also creates a digital footprint that can be used for advertising purposes, raising questions about data ownership. Despite the drawbacks, the internet remains an integral part of modern life.",

 
  "Space exploration has fascinated humankind for centuries. With the moon landings of the 20th century and the upcoming missions to Mars, space remains a frontier for discovery. Government agencies like NASA, as well as private companies such as SpaceX and Blue Origin, are driving innovation in space travel. Advances in rocketry, materials science, and artificial intelligence have made space travel safer and more accessible. There are now discussions around the colonization of Mars and the potential for mining asteroids for rare minerals. Despite the enormous cost and technical challenges, the potential benefits of space exploration are vast. It could lead to technological breakthroughs that impact industries on Earth. There's also the possibility of discovering new life forms or understanding more about the origins of the universe. Space tourism is another emerging industry that could take off in the coming decades.",


  "One of the most exciting developments in technology is the potential for quantum computing. Traditional computers rely on bits, which represent data as 0s or 1s. However, quantum computers use qubits, which can represent 0, 1, or both simultaneously thanks to the principles of superposition. This allows quantum computers to solve certain problems much faster than classical computers. Quantum computing could revolutionize industries such as cryptography, material science, and pharmaceuticals. While quantum computers are still in the experimental stage, their future applications could be vast. Large tech companies like IBM and Google are investing heavily in quantum research. Governments are also funding quantum initiatives to ensure they remain competitive in this emerging field. However, challenges such as error correction, scaling, and stability need to be addressed before quantum computers can reach their full potential.",


 " Blockchain technology, first popularized by cryptocurrencies, is now being explored for a range of other applications. At its core, blockchain is a decentralized ledger that allows for secure, transparent, and immutable transactions. Beyond digital currencies, blockchain can be used in supply chain management, healthcare, and even voting systems. By ensuring transparency, blockchain has the potential to reduce fraud and increase accountability. Companies are now developing new blockchain-based platforms that could revolutionize industries. Smart contracts, for instance, allow for automatic execution of agreements when predefined conditions are met. Despite its promise, blockchain adoption faces challenges such as scalability, energy consumption, and regulatory concerns. As these hurdles are addressed, blockchain could become a key infrastructure for the digital age.",



  
  "This array contains a list of fruits. Arrays are an essential part of programming in JavaScript. They allow you to store multiple values in a single variable, making it easy to access, modify, or loop through the data. You can access any element in the array using its index. For example, 'fruits[0]' will give you 'apple', while 'fruits[3]' will give you 'mango'. JavaScript arrays are dynamic, meaning their size can change as elements are added or removed. This flexibility makes arrays one of the most powerful and commonly used data structures in web development.",


"  Augmented reality (AR) and virtual reality (VR) are two emerging technologies that are set to transform the way we interact with the digital world. AR overlays digital information onto the real world, enhancing the users perception of their environment. VR, on the other hand, immerses the user in a completely digital environment. These technologies are finding applications in various fields such as gaming, education, healthcare, and retail. In healthcare, for example, AR is being used for medical training and to assist in surgeries. Retailers are using AR to allow customers to visualize how products will look in their homes. As these technologies continue to develop, we can expect even more innovative applications. Challenges such as hardware costs and user adoption remain, but the future of AR and VR looks promising.",


"  The world of finance has been radically transformed by technology in recent years. Fintech companies are changing how people manage money, from budgeting apps to mobile payment solutions. Digital currencies like Bitcoin and Ethereum have gained popularity, offering decentralized alternatives to traditional banking systems. Blockchain, the underlying technology behind cryptocurrencies, is being explored for its potential to secure and streamline financial transactions. Peer-to-peer lending platforms are giving consumers more choices in how they invest and borrow money. Despite the benefits, these technologies also come with risks, including regulatory uncertainty and the potential for financial fraud. The rise of online banking has made financial services more accessible, but it has also created new challenges for maintaining cybersecurity and consumer trust.",


  "Biotechnology is rapidly advancing, particularly in fields like genetic engineering and personalized medicine. Scientists are now able to modify DNA, opening up possibilities for curing genetic diseases and enhancing human capabilities. CRISPR technology, for instance, allows for precise gene editing, which could one day lead to breakthroughs in treating conditions such as cancer, diabetes, and HIV. Personalized medicine is another area of growth, with treatments being tailored to an individuals genetic makeup. This approach holds promise for increasing the efficacy of drugs and reducing side effects. However, ethical concerns about genetic modification and privacy remain a significant barrier. The future of biotechnology is likely to reshape the healthcare landscape in ways that are still hard to imagine."
];


let formcon=document.querySelector(".formcon");
let inputbox=document.getElementById("inputbox");
let addpara=document.querySelector(".addpara");

formcon.addEventListener("submit",function(e){
    e.preventDefault();
    let value=parseInt(inputbox.value)
    let rno=Math.floor(Math.random()*text.length)


    if(isNaN(value) || value<=0 || value>10){
      addpara.innerHTML=`<p class=addpara1>${text[rno]}</p>`
    }
    else{
     let slicecon=text.slice(0,value);
     slicecon=slicecon.map(function(item){
      return `<p class="addpara1">${item}</p>`
     }).join("")

     addpara.innerHTML=slicecon;

    }

})