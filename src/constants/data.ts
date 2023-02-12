import {Domain, HowToLearn, Master, RelatedSkill, SkillType} from '../@types';

export const DATA: Domain[] = [
  {
    id: 'd1',
    name: 'Web Development',
    image:
      'https://www.elegantthemes.com/blog/wp-content/uploads/2018/12/top11.png',
    description:
      'Web development is the work involved in developing a Web site for the Internet (World Wide Web) or an intranet (a private network). Web development can range from developing a simple single static page of plain text to complex Web-based Internet applications (web apps), electronic businesses, and social network services.',
  },
  {
    id: 'd3',
    name: 'Cyber Security',
    image:
      'https://img.freepik.com/free-vector/cyber-security-concept_23-2148532223.jpg',
    description:
      'Cyber security is the practice of defending computers, servers, mobile devices, electronic systems, networks, and data from malicious attacks.',
  },
  {
    id: 'd6',
    name: 'Mobile Development',
    image:
      'https://www.raghwendra.com/blog/wp-content/uploads/2022/08/android-ios-mobile-app-development-company-in-india.jpg',
    description:
      'Mobile application development is the process of creating software applications that run on a mobile device, and a typical mobile application utilizes a network connection to work with remote computing resources',
  },
  {
    id: 'd2',
    name: 'Software Development',
    image:
      'https://bigwater.consulting/wp-content/uploads/2019/04/SDLC_BWC.png',
    description:
      'Software development refers to a set of computer science activities dedicated to the process of creating, designing, deploying and supporting software. Software itself is the set of instructions or programs that tell a computer what to do.',
  },
  {
    id: 'd13',
    name: 'AI & ML',
    image: 'https://tint.edu.in/images/aiml/aiml01.jpg',
    description:
      'Its the process of using mathematical models of data to help a computer learn without direct instruction. ',
  },
  {
    id: 'd11',
    name: 'Game Development',
    image:
      'https://media.istockphoto.com/id/1297564630/vector/game-dev-isometric-concept-education-of-creation-3d-design-of-location-or-level-computer.jpg?s=612x612&w=0&k=20&c=NuOH1Hfd3Y-DJtqwc9bafZEjrifMs47rdr4Zw1nGV3g=',
    description:
      'Its the process of using mathematical models of data to help a computer learn without direct instruction. ',
  },
];
export const RELATED_SKILLS: RelatedSkill[] = [
  {
    domain_id: 'd1',
    id: 'd1rs1',
    name: 'HTML',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpngGRjYX1ca7qAADU3K6eGLj7ShQE3L2otdzfryl_Y9Ht2QRoQKYQbsXd36XIxMbYOw0&usqp=CAU',
  },
  {
    domain_id: 'd1',
    id: 'd1rs2',
    name: 'Java Script',
    image:
      'https://sllearnengine.blob.core.windows.net/material-images/087a9b79a3094d4382bcdbfdb6718734-JS_1.png',
  },
  {
    domain_id: 'd1',
    id: 'd1rs3',
    name: 'CSS',
    image: 'https://cdn-icons-png.flaticon.com/512/919/919826.png',
  },
  {
    domain_id: 'd3',
    id: 'd3rs1',
    name: 'Ethical Hacking',
    image:
      'https://img.freepik.com/free-vector/cyber-security-concept_23-2148532223.jpg',
  },
  {
    domain_id: 'd3',
    id: 'd3rs2',
    name: 'Bug Bounty',
    image:
      'https://www.shutterstock.com/image-vector/bug-shield-security-flat-sign-260nw-489707539.jpg',
  },
  {
    domain_id: 'd3',
    id: 'd3rs3',
    name: 'Digital Forensics',
    image: 'https://www.ecpi.edu/sites/default/files/ECPI%20July%2029.png',
  },
  {
    domain_id: 'd3',
    id: 'd3rs4',
    name: 'Debugging',
    image: 'https://www.elprocus.com/wp-content/uploads/Featured-image-2.png',
  },
  {
    domain_id: 'd6',
    id: 'd6rs1',
    name: 'React Native',
    image:
      'https://www.appcoda.com/wp-content/uploads/2015/04/react-native.png',
  },
  {
    domain_id: 'd6',
    id: 'd6rs2',
    name: 'flutter development',
    image:
      'https://play-lh.googleusercontent.com/5e7z5YCt7fplN4qndpYzpJjYmuzM2WSrfs35KxnEw-Ku1sClHRWHoIDSw3a3YS5WpGcI=w240-h480-rw',
  },
  {
    domain_id: 'd2',
    id: 'd2rs1',
    name: 'C',
    image:
      'https://assets.toptal.io/images?url=https://bs-uploads.toptal.io/blackfish-uploads/components/blog_post_page/content/cover_image_file/cover_image/1129776/regular_1708x683_cover-0828_AfterAllTheseYearstheWorldisStillPoweredbyCProgramming_Razvan_Newsletter-2b9ea38294bb08c5aea1f0c1cb06732f.png',
  },
  {
    domain_id: 'd2',
    id: 'd2rs2',
    name: 'C++',
    image:
      'https://www.analyticsinsight.net/wp-content/uploads/2022/03/bh1-1024x725-1.jpg',
  },
  {
    domain_id: 'd2',
    id: 'd2rs3',
    name: 'Java',
    image:
      'https://www.webskittersacademy.in/wp-content/uploads/2016/01/Java-As-A-Programming-Language-825x410.png',
  },
  {
    domain_id: 'd2',
    id: 'd2rs4',
    image:
      'https://cdn.britannica.com/83/146383-050-62A38BCD/Green-tree-python.jpg',
    name: 'Python',
  },
  {
    domain_id: 'd13',
    id: 'd13rs1',
    name: 'Artificial intelligence',
    image:
      'https://www.simplilearn.com/ice9/free_resources_article_thumb/Advantages_and_Disadvantages_of_artificial_intelligence.jpg',
  },
  {
    domain_id: 'd13',
    id: 'd13rs2',
    name: 'Machine Learning',
    image:
      'https://builtin.com/sites/www.builtin.com/files/styles/og/public/2021-12/machine-learning-examples-applications.png',
  },
  {
    domain_id: 'd11',
    id: 'd11rs1',
    name: 'Unity',
    image: 'https://unity3d.com/files/images/ogimg.jpg',
  },
  {
    domain_id: 'd11',
    id: 'd11rs2',
    name: 'Unreal Engine',
    image:
      'https://cdn2.unrealengine.com/ue-logo-1400x788-1400x788-8f185e1e3635.jpg',
  },
];
export const SKILLS_DETAILS: SkillType[] = [
  {
    id: 'd1rs1',
    name: 'HTML',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpngGRjYX1ca7qAADU3K6eGLj7ShQE3L2otdzfryl_Y9Ht2QRoQKYQbsXd36XIxMbYOw0&usqp=CAU',
    introduction:
      'HTML stands for Hypertext Markup Language and is the standard markup language for creating web pages. It is used to structure the content of a web page, such as text, images, and links, and define how the content should be displayed to the user. HTML is a markup language, meaning that it uses tags to define elements and their properties, rather than a programming language.',
    history:
      'HTML was first created in the late 1980s by physicist Tim Berners-Lee and computer scientist Robert Cailliau, who were working at CERN, the European Organization for Nuclear Research. It was designed as a way to share research documents among scientists and has since become the standard language for creating and sharing web content on the internet.',
  },
  {
    id: 'd1rs3',
    image: 'https://cdn-icons-png.flaticon.com/512/919/919826.png',
    name: 'CSS',
    introduction:
      'CSS stands for Cascading Style Sheets and is used to style and layout web pages. It is a stylesheet language that describes the look and formatting of a document written in HTML. With CSS, developers can control the colors, fonts, spacing, and other visual elements of web pages, making it easier to create consistent and attractive designs. CSS works by applying styles to specific elements in an HTML document, using selectors to identify the elements and properties to define the styles.',
    history:
      'CSS was first proposed in 1996 by Hakon Wium Lie, who was working at CERN at the time. It was developed as a way to separate the content and presentation of web pages, making it easier for developers to create and maintain websites. CSS has evolved over the years, with the introduction of CSS3 in 1999 and subsequent updates, to become a powerful tool for web designers and developers.',
  },
  {
    id: 'd1rs2',
    image:
      'https://sllearnengine.blob.core.windows.net/material-images/087a9b79a3094d4382bcdbfdb6718734-JS_1.png',
    name: 'JavaScript',
    introduction:
      "JavaScript is a high-level, interpreted programming language that is commonly used to create interactive and dynamic websites. It is a scripting language that runs on the client-side, meaning that it is executed directly in the user's web browser, rather than on a server. JavaScript allows developers to add behavior and interactivity to web pages, such as responding to user actions, updating page content, and creating animations. JavaScript is often used in conjunction with HTML and CSS to build complex, dynamic web applications.",
    history:
      'JavaScript was created in just 10 days in May 1995 by Brendan Eich, a programmer at Netscape Communications Corporation. It was originally called Mocha and then changed to LiveScript before being finally named JavaScript. JavaScript quickly became one of the most popular programming languages for web development, and is now used to build a wide range of applications, from simple websites to complex web apps and server-side tools.',
  },
  {
    id: 'd3rs1',
    image:
      'https://img.freepik.com/free-vector/cyber-security-concept_23-2148532223.jpg',
    name: 'Ethical Hacking',
    introduction:
      "Ethical hacking is the practice of using hacking techniques for the purpose of identifying and fixing security vulnerabilities in computer systems and networks. It is also known as 'penetration testing' or 'pen testing.' Ethical hackers simulate real-world attacks to identify potential weaknesses in a system and help organizations improve their security posture. Ethical hacking is a vital component of a comprehensive security program, as it provides organizations with a proactive and defensive approach to security.",
    history:
      'The practice of ethical hacking has its roots in the early days of computer security, but it has become more formalized and widespread in recent years. The concept of ethical hacking is said to have been first introduced in the 1990s, when the growing number of cyber attacks and increasing dependence on computer systems made it clear that traditional security measures were no longer enough. Ethical hacking has since evolved and grown into a critical discipline, with a wide range of tools and techniques used to identify and remediate security vulnerabilities. Today, many organizations rely on ethical hackers to help them stay ahead of cyber attackers and keep their systems secure.',
  },
  {
    id: 'd3rs2',
    image:
      'https://www.shutterstock.com/image-vector/bug-shield-security-flat-sign-260nw-489707539.jpg',
    name: 'Bug Bounty',
    introduction:
      "A bug bounty is a program offered by many websites and software developers that rewards individuals for finding and reporting security vulnerabilities in their systems. The goal of a bug bounty is to identify and fix vulnerabilities before they can be exploited by malicious actors. Bug bounties are typically open to anyone, and rewards can range from recognition and a mention in the company's security acknowledgments, to cash payouts or merchandise. Participating in a bug bounty program is a great way for security researchers and enthusiasts to hone their skills and make a positive contribution to the security of the internet.",
    history:
      "The concept of a bug bounty is believed to have originated in the 1990s, when early internet companies began offering rewards for finding and reporting security vulnerabilities. The first formal bug bounty program was launched by Netscape Communications Corporation in 1995, and since then, bug bounties have become a popular and effective way for companies to identify and remediate security vulnerabilities. Today, many of the world's largest technology companies, such as Google, Microsoft, and Facebook, offer bug bounties as part of their security programs.",
  },
  {
    id: 'd3rs3',
    image: 'https://www.ecpi.edu/sites/default/files/ECPI%20July%2029.png',
    name: 'Digital Forensics',
    introduction:
      'Digital forensics is the process of collecting, analyzing, and preserving digital evidence in support of a legal investigation. It involves the identification, acquisition, and preservation of data from digital devices and systems, such as computers, smartphones, and networks. The goal of digital forensics is to determine the truth about a digital incident and provide evidence that can be used in a court of law. Digital forensics is a critical component of many types of investigations, including cybercrime, intellectual property theft, and fraud.',
    history:
      "The field of digital forensics has its roots in the early days of computing, but has grown and evolved as technology has advanced. The first documented case of digital forensics was in the late 1970s, when a computer programmer was accused of altering his company's payroll records. Since then, digital forensics has become a critical discipline, with the development of specialized tools and techniques for collecting, analyzing, and preserving digital evidence. Today, digital forensics plays a crucial role in a wide range of legal and criminal investigations.",
  },
  {
    id: 'd3rs4',
    image: 'https://www.elprocus.com/wp-content/uploads/Featured-image-2.png',
    name: 'Debugging',
    introduction:
      'Debugging is the process of finding and fixing errors or bugs in software. It is an essential part of the software development process, as bugs can cause software to behave incorrectly or crash. Debugging can be a challenging task, as bugs can be caused by a wide range of factors, including syntax errors, logical errors, and unexpected inputs. Debugging requires a systematic and methodical approach, as well as a good understanding of the software and the problem being solved. Debugging tools and techniques, such as debuggers and print statements, can help make the debugging process more efficient and effective.',
    history:
      'The need for debugging has been present since the earliest days of computing. In the early days of computing, debugging was a manual process and often involved reviewing code line by line and using print statements to track down bugs. As software became more complex and the use of computers became more widespread, the need for more efficient and effective debugging techniques grew. This led to the development of specialized debugging tools and techniques, such as debuggers, which allow developers to step through code, inspect variables, and track the flow of execution. Today, debugging is an essential part of the software development process and is performed by developers of all levels, from beginners to experienced professionals.',
  },
  {
    id: 'd6rs2',
    image:
      'https://play-lh.googleusercontent.com/5e7z5YCt7fplN4qndpYzpJjYmuzM2WSrfs35KxnEw-Ku1sClHRWHoIDSw3a3YS5WpGcI=w240-h480-rw',
    name: 'Flutter Development',
    introduction:
      'Flutter is an open-source mobile application development framework created by Google. It allows developers to build high-performance, visually attractive, and cross-platform mobile applications for iOS and Android using a single codebase. Flutter uses the Dart programming language, and its key features include a fast development cycle, customizable widgets, and hot reload, which allows developers to see the results of their changes instantly. Flutter is gaining popularity among developers due to its ease of use, fast development cycle, and ability to create high-quality, native-looking apps for multiple platforms.',
    history:
      'Flutter was first announced by Google in 2017 and has since become one of the most popular mobile development frameworks. It was created as a response to the need for a faster and more efficient way to develop high-quality, cross-platform mobile applications. The first stable version of Flutter was released in 2018, and since then, it has been used by developers around the world to create a wide range of applications. Today, Flutter is widely regarded as a leading mobile development framework and is used by many organizations and individuals to create high-quality, cross-platform mobile applications.',
  },
  {
    id: 'd2rs1',
    image:
      'https://assets.toptal.io/images?url=https://bs-uploads.toptal.io/blackfish-uploads/components/blog_post_page/content/cover_image_file/cover_image/1129776/regular_1708x683_cover-0828_AfterAllTheseYearstheWorldisStillPoweredbyCProgramming_Razvan_Newsletter-2b9ea38294bb08c5aea1f0c1cb06732f.png',
    name: 'C',
    introduction:
      'C is a high-level, general-purpose programming language that is widely used for system programming, as well as for developing applications in a wide range of domains, including operating systems, embedded systems, and game development. C is a low-level language that provides close access to hardware, making it suitable for tasks such as writing operating systems and device drivers. It is also widely used for developing high-performance applications, such as video games, due to its ability to generate efficient machine code and provide fine-grained control over system resources. Despite its age, C remains one of the most widely used programming languages, and a strong foundation in C is an important part of many software development curricula.',
    history:
      'C was developed in the early 1970s by Dennis Ritchie at Bell Labs, as part of the development of the Unix operating system. It was designed to be a high-level, portable, and efficient language, and quickly became popular for system programming and developing operating systems. The first version of C was used to develop the Unix operating system, and its success led to the widespread adoption of C for system programming and other low-level tasks. Today, C is one of the most widely used programming languages, and is used in a wide range of applications, from system programming to game development.',
  },
  {
    id: 'd2rs2',
    image:
      'https://www.analyticsinsight.net/wp-content/uploads/2022/03/bh1-1024x725-1.jpg',
    name: 'C++',
    introduction:
      'C++ is a general-purpose programming language that is an extension of the C programming language. C++ was created to provide an object-oriented programming framework for C, and it has since become one of the most widely used programming languages. C++ provides a powerful set of features, including object-oriented programming, generic programming, and exception handling, as well as low-level access to system resources. C ++ is used in a wide range of applications, including system programming, game development, and scientific computing. It is also widely used for developing high-performance applications due to its ability to generate efficient machine code and its low-level access to system resources. C++ is a complex language, with a steep learning curve, but its versatility and performance make it a valuable skill for any software developer.',
    history:
      'C++ was developed in the early 1980s by Bjarne Stroustrup at Bell Labs, as an extension of the C programming language. Its goal was to provide an object-oriented framework for C, while retaining the performance and low-level access to system resources that C provided. C++ was first released in 1985 and quickly gained popularity among developers. Today, C++ is one of the most widely used programming languages and is used in a wide range of applications, from system programming to game development and scientific computing.',
  },
  {
    id: 'd2rs3',
    image:
      'https://www.webskittersacademy.in/wp-content/uploads/2016/01/Java-As-A-Programming-Language-825x410.png',
    name: 'Java',
    introduction:
      'Java is a general-purpose, object-oriented programming language that is class-based and concurrent. Java was designed to be portable, secure, and maintainable, and it is widely used for developing enterprise applications, as well as for Android mobile app development. Java provides a powerful set of features, including automatic memory management, an extensive class library, and support for multithreading, making it an excellent choice for developing complex applications. Java is often used for developing web applications, and it is one of the most popular programming languages in use today.',
    history:
      'Java was developed in the mid-1990s by James Gosling and his team at Sun Microsystems (now part of Oracle Corporation). Its goal was to create a portable, secure, and maintainable programming language for developing networked and embedded systems. Java was first released in 1995, and quickly gained popularity due to its simplicity, security, and portability. Today, Java is one of the most widely used programming languages, and it is used for a wide range of applications, from enterprise software to Android mobile app development.',
  },
  {
    id: 'd2rs4',
    image:
      'https://cdn.britannica.com/83/146383-050-62A38BCD/Green-tree-python.jpg',
    name: 'Python',
    introduction:
      'Python is a high-level, interpreted, and general-purpose programming language. It is dynamically typed, meaning that data types are determined at runtime, and it is known for its clear syntax, making it an excellent language for beginners. Python is widely used for web development, scientific computing, data analysis, artificial intelligence, and more. It provides a large standard library, including modules for tasks such as connecting to the internet and reading and writing files, and its simplicity and versatility make it a popular choice for developers of all levels.',
    history:
      'Python was created by Guido van Rossum in the late 1980s as a successor to the ABC language. It was designed to be simple, easy to read, and highly extensible, and it has since become one of the most popular programming languages in the world. Python was first released in 1991, and since then, it has been used for a wide range of applications, from web development and scientific computing to artificial intelligence and data analysis. Today, Python is one of the fastest-growing programming languages and is widely regarded as one of the easiest to learn.',
  },
  {
    id: 'd13rs1',
    image:
      'https://blog.integral-system.fr/wp-content/uploads/2020/02/33797061.jpg',
    name: 'Artificial Intelligence',
    introduction:
      'Artificial Intelligence (AI) is the branch of computer science that focuses on creating machines that can perform tasks that would typically require human intelligence. AI is achieved by teaching computers to make decisions, solve problems, and perform tasks in a way that mimics human intelligence . Some common applications of AI include image recognition, speech recognition, natural language processing, and robotics. AI has the potential to revolutionize many industries, and it is one of the fastest-growing and most exciting fields in technology today. With advancements in machine learning, deep learning, and other related technologies, the possibilities of what AI can achieve are constantly expanding.',
    history:
      "The concept of artificial intelligence dates back to the 1950s, when computer scientist John McCarthy first defined it as the study of making machines do things that would require intelligence if done by humans. Since then, AI has gone through many phases of development, from early rule-based systems to today's sophisticated machine learning algorithms. In recent years, the field of AI has exploded, with rapid advancements in machine learning, deep learning, and other related technologies, leading to breakthroughs in image recognition, speech recognition, and natural language processing. AI is now widely used across a range of industries, from finance and healthcare to retail and transportation.",
  },
  {
    id: 'd13rs2',
    image: 'https://tint.edu.in/images/aiml/aiml01.jpg',
    name: 'Machine Learning',
    introduction:
      'Machine Learning is a subfield of artificial intelligence that focuses on the development of algorithms and statistical models that allow computers to improve their performance on a specific task through experience. It involves feeding large amounts of data into a model, which then makes predictions or decisions without being explicitly programmed to perform the task. Machine learning algorithms are used in a wide range of applications, including image recognition, natural language processing, and predictive analytics. The field of machine learning is rapidly growing, and it has the potential to transform a wide range of industries.',
    history:
      "The concept of machine learning dates back to the 1950s and 60s, but it wasn't until the late 20th century that it began to gain significant traction. In the late 1980s and early 1990s, advances in computer hardware and algorithms led to the development of more sophisticated machine learning models. With the advent of big data and the rise of cloud computing, the field of machine learning has exploded, leading to breakthroughs in areas such as image recognition, natural language processing, and predictive analytics. Today, machine learning is widely used across a range of industries and has the potential to transform many more.",
  },
  {
    id: 'd11rs1',
    image: 'https://unity3d.com/files/images/ogimg.jpg',
    name: 'Unity',
    introduction:
      'Unity is a cross-platform game engine developed by Unity Technologies, first announced and released in June 2005 at Apple Inc. s Worldwide Developers Conference as a Mac OS X-exclusive game engine. As of 2018, the engine had been extended to support more than 25 platforms. The engine can be used to create three-dimensional, two-dimensional, virtual reality, and augmented reality games, as well as simulations and other experiences.',
    history:
      'Unity Technologies was founded in 2004 by David Helgason, who had previously worked on the game engine id Tech 4 at id Software. The company is based in San Francisco, California, and has additional offices in Beijing, Tokyo, Seoul, Taipei, and Shanghai. Unity Technologies is a subsidiary of Japanese gaming company Nexon. Unity Technologies was founded in 2004 by David Helgason, who had previously worked on the game engine id Tech 4 at id Software. The company is based in San Francisco, California, and has additional offices in Beijing, Tokyo, Seoul, Taipei, and Shanghai. Unity Technologies is a subsidiary of Japanese gaming company Nexon.',
  },
  {
    id: 'd11rs2',
    image:
      'https://static.wikia.nocookie.net/rememberme/images/a/a2/UNREAL_4_LOGO.png/revision/latest?cb=20160616192531',
    name: 'Unreal Engine',
    introduction:
      'Unreal Engine is a game engine developed by Epic Games, first showcased in the 1998 first-person shooter game Unreal. It features a high degree of portability, supporting a wide range of operating systems, including Windows, macOS, Linux, iOS, Android, PlayStation 4, Xbox One, Nintendo Switch, and the web. It is used to develop video games, simulations, and other applications. The engine can be used to create three-dimensional, two-dimensional, virtual reality, and augmented reality games, as well as simulations and other experiences.',
    history:
      'Unreal Engine is a game engine developed by Epic Games, first showcased in the 1998 first-person shooter game Unreal. It features a high degree of portability, supporting a wide range of operating systems, including Windows, macOS, Linux, iOS, Android, PlayStation 4, Xbox One, Nintendo Switch, and the web. It is used to develop video games, simulations, and other applications. The engine can be used to create three-dimensional, two-dimensional, virtual reality, and augmented reality games, as well as simulations and other experiences.',
  },
];

export const MASTERS: Master[] = [
  {
    id: 'm1',
    image:
      'https://images.unsplash.com/photo-1611548224889-08f2aa1a88f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c21hcnQlMjBib3l8ZW58MHx8MHx8&w=1000&q=80',
    name: 'Rahul Moriwar',
    domain: 'Web Development',
    teaches: ['HTML', 'CSS', 'JavaScript', 'React', 'NodeJS'],
    experience: 5,
  },
  {
    id: 'm2',
    image:
      'https://c.superprof.com/i/a/24356996/11146012/600/20221230181736/masters-from-punjabi-university-patiala-having-more-than-years-work-experience-web-development.jpg',
    name: 'Zakir Rana',
    domain: 'Web Development',
    teaches: ['HTML', 'CSS', 'JavaScript', 'React', 'NodeJS'],
    experience: 3,
  },
  {
    id: 'm3',
    image:
      'https://images.squarespace-cdn.com/content/v1/5760eea3555986ada683b8fe/1486601900650-1J5N0V2VZNC7V1QK7U9Q/image-asset.jpeg?format=1000w',
    name: 'silla chakma',
    domain: 'Web Development',
    teaches: ['HTML', 'CSS', 'JavaScript', 'React'],
    experience: 4,
  },
  {
    id: 'm4',
    image:
      'https://media.licdn.com/dms/image/C5603AQHtR8m5I1IJwQ/profile-displayphoto-shrink_800_800/0/1607378729683?e=2147483647&v=beta&t=o-wF0jxGoRW3Uvq49RmU0Kba5Evg8dy5HF6Qrd-76lw',
    name: 'Munzereen Shahid',
    domain: 'Web Development',
    teaches: ['HTML', 'CSS', 'JavaScript'],
    experience: 6,
  },
  {
    id: 'm5',
    image:
      'https://as1.ftcdn.net/v2/jpg/03/96/06/44/1000_F_396064464_znR5LnjSowGf5AkwBgMGPlIaHoKHbd6R.jpg',
    name: 'rajesh sharma',
    domain: 'Web Development',
    teaches: ['HTML', 'CSS', 'JavaScript', 'nodejs'],
    experience: 6,
  },
  {
    id: 'm6',
    image:
      'https://thumbs.dreamstime.com/b/headshot-portrait-smiling-businessman-posing-office-profile-picture-young-caucasian-suit-glasses-pose-modern-happy-214577125.jpg',
    name: 'Rakesh warade',
    domain: 'Cyber Security',
    teaches: [
      'Ethical Hacking',
      'Bug Bounty',
      'Digital Forensics',
      'Debugging',
    ],
    experience: 6,
  },
  {
    id: 'm7',
    image:
      'https://i.pinimg.com/736x/fb/50/a9/fb50a9be133a42fd39da4fb6eb207c7c.jpg',
    name: 'Karishma khanna',
    domain: 'Cyber Security',
    teaches: ['Ethical Hacking', 'Bug Bounty', 'Digital Forensics'],
    experience: 3,
  },
  {
    id: 'm8',
    image:
      'https://qph.cf2.quoracdn.net/main-qimg-719f114ee38ebe42fff5baf5be8bcee7-lq',
    name: 'Kartik Rangari',
    domain: 'Cyber Security',
    teaches: ['Ethical Hacking', 'Digital Forensics', 'Debugging'],
    experience: 2,
  },
  {
    id: 'm9',
    image:
      'https://www.premiumgraduate.com.au/wp-content/uploads/2020/06/good-linkedin-profile-photo-right-expression-1000x1000.jpg',
    name: 'Abhijit Singhaniya',
    domain: 'Cyber Security',
    teaches: [
      'Ethical Hacking',
      'Digital Forensics',
      'Bug Bounty',
      'Debugging',
    ],
    experience: 3,
  },
  {
    id: 'm10',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5KdYzK-t3--oWkpsdb9O1K77FmlR0cDrUFtlBL8YOF5hNcli8LycLIvVwvW2H-4KmhMc&usqp=CAU',
    name: 'Umang Raghwade',
    domain: 'Cyber Security',
    teaches: [
      'Ethical Hacking',
      'Digital Forensics',
      'Bug Bounty',
      'Debugging',
    ],
    experience: 5,
  },
  {
    id: 'm11',
    image:
      'https://thumbs.dreamstime.com/b/attractive-young-woman-profile-portrait-office-attractive-young-woman-profile-portrait-office-confident-business-person-191722052.jpg',
    name: 'Shital Khurana',
    domain: 'Mobile Development',
    teaches: ['React Native', 'flutter development'],
    experience: 3,
  },
  {
    id: 'm12',
    image:
      'https://www.corporatephotographerslondon.com/wp-content/uploads/2016/06/Studio-Headshots-LinkedIn.jpg',
    name: 'Shanker Mohan',
    domain: 'Mobile Developmet',
    teaches: ['React Native'],
    experience: 2,
  },
  {
    id: 'm13',
    image:
      'https://media.licdn.com/dms/image/C4D03AQHA528sTNJ34Q/profile-displayphoto-shrink_800_800/0/1661607559541?e=2147483647&v=beta&t=6juJt6ur4wIX6g2sqy7zSmOVYuZ6F4HF8Be0jZgU7vE',
    name: 'Kartik Chakrapani',
    domain: 'Mobile Development',
    teaches: ['React Native', 'flutter development'],
    experience: 3,
  },
  {
    id: 'm14',
    image:
      'https://www.themarque.com/photos-cache/profile-images/95355025-603e6ee3014ba6/profile_public_big.png',
    name: 'Satya Rao',
    domain: 'Mobile Development',
    teaches: ['React Native', 'flutter development'],
    experience: 8,
  },
  {
    id: 'm15',
    image:
      'https://www.corporatephotographerslondon.com/wp-content/uploads/2021/06/non-smiling-LinkedIn-profile-photo.jpg',
    name: 'Raghav Martand',
    domain: 'Software Development',
    teaches: ['C', 'C++', 'Java', 'Python'],
    experience: 5,
  },
  {
    id: 'm16',
    image:
      'https://monteluke.com.au/wp-content/gallery/linkedin-profile-pictures/cache/34294-MLS-Rodrigo-Roa-004flinbw.jpg-nggid03425-ngg0dyn-591x591-00f0w010c010r110f110r010t010.jpg',
    name: 'Raghav Juyal',
    domain: 'Software Development',
    teaches: ['C', 'C++', 'Python'],
    experience: 4,
  },
  {
    id: 'm17',
    image:
      'https://images.squarespace-cdn.com/content/v1/5cf0d08d5fc69d000172462a/1591435140280-D2B4F21NWCTHE77MTTAX/Ash+London+Professional+LinkedIn+Headshot?format=1000w',
    name: 'Darshan Raut',
    domain: 'Software Development',
    teaches: ['C', 'C++', 'Java', 'Python'],
    experience: 3,
  },
  {
    id: 'm18',
    image:
      'https://images.squarespace-cdn.com/content/v1/5cf0d08d5fc69d000172462a/1599805610146-J0G5GMGFBXVWND4Z71UK/Aleem+Business+Headshot+for+LinkedIn+Profile.jpg',
    name: 'Saksham Denial',
    domain: 'Software Development',
    teaches: ['C', 'C++', 'Java', 'Python'],
    experience: 4,
  },
  {
    id: 'm19',
    image:
      'https://i.pinimg.com/736x/97/31/02/9731022f0be7c965e880505461643850.jpg',
    name: 'Rakshat Yewle',
    domain: 'Software Development',
    teaches: ['C', 'C++', 'Java', 'Python'],
    experience: 6,
  },
  {
    id: 'm20',
    image:
      'https://i.pinimg.com/736x/ce/d8/4a/ced84a67302c60bd1abaaf9314064433.jpg',
    name: 'Reena Goswami',
    domain: 'AI&ML',
    teaches: ['Artificial Intelligence', 'Machine Learning'],
    experience: 4,
  },

  {
    id: 'm21',
    image:
      'https://images.squarespace-cdn.com/content/v1/5aee389b3c3a531e6245ae76/1531792846005-MYGZAOI0L93I3YJWHB6W/D75_5697-Edit.jpg',
    name: 'Costa Mesa',
    domain: 'AI&ML',
    teaches: ['Artificial Intelligence', 'Machine Learning'],
    experience: 5,
  },
  {
    id: 'm22',
    image:
      'https://oakbarnphoto.com/wp-content/uploads/2017/01/headshots_taunton_somerset18.jpg',
    name: 'Rinky Choudary',
    domain: 'AI&ML',
    teaches: ['Artificial Intelligence', 'Machine Learning'],
    experience: 4,
  },
  {
    id: 'm23',
    image:
      'https://media.licdn.com/dms/image/D4D03AQHc3UhByLuyFQ/profile-displayphoto-shrink_800_800/0/1675265538143?e=1681344000&v=beta&t=U5WpTrd7qShHjf_Pv1R9Qen8Cuk_AfoFDAaEzob966k',
    name: 'Manu Kumar',
    domain: 'AI&ML',
    teaches: ['Artificial Intelligence', 'Machine Learning'],
    experience: 7,
  },
  {
    id: 'm24',
    image:
      'https://media.licdn.com/dms/image/C5103AQF0itUuvwUe9g/profile-displayphoto-shrink_800_800/0/1548490023759?e=2147483647&v=beta&t=IpdZqb-f3nJtoCen2EsrGr0ykhRfjJ7le6DW0zZwwXo',
    name: 'Ronak Shah',
    domain: 'AI&ML',
    teaches: ['Artificial Intelligence', 'Machine Learning'],
    experience: 2,
  },
  {
    id: 'm25',
    image:
      'https://media.licdn.com/dms/image/C5603AQHJ2Ao8t0uFww/profile-displayphoto-shrink_800_800/0/1646976120919?e=2147483647&v=beta&t=RbOYODNraAfhEscvMFN4kaksbxtmBMFi6zbtaxekkH4',
    name: 'Gk Senthil',
    domain: 'AI&ML',
    teaches: ['Artificial Intelligence', 'Machine Learning'],
    experience: 3,
  },
  {
    id: 'm26',
    image:
      'https://media.licdn.com/dms/image/C5103AQF0itUuvwUe9g/profile-displayphoto-shrink_800_800/0/1548490023759?e=2147483647&v=beta&t=IpdZqb-f3nJtoCen2EsrGr0ykhRfjJ7le6DW0zZwwXo',
    name: 'Ronak Shah',
    domain: 'Game Development',
    teaches: ['Unity', 'Unreal Engine'],
    experience: 2,
  },
  {
    id: 'm27',
    image:
      'https://media.licdn.com/dms/image/C5603AQHJ2Ao8t0uFww/profile-displayphoto-shrink_800_800/0/1646976120919?e=2147483647&v=beta&t=RbOYODNraAfhEscvMFN4kaksbxtmBMFi6zbtaxekkH4',
    name: 'Game Development',
    domain: 'AIML & Game Development',
    teaches: ['Unity', 'Unreal Engine'],
    experience: 3,
  },
];

export const HOW_TO_LEARN: HowToLearn[] = [
  {
    skill_id: 'd1rs1',
    id: 'd1rs1htl1',
    name: 'HTML Tutorial',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpngGRjYX1ca7qAADU3K6eGLj7ShQE3L2otdzfryl_Y9Ht2QRoQKYQbsXd36XIxMbYOw0&usqp=CAU',
    link: 'https://www.w3schools.com/html/',
    platform: 'w3schools',
    created_at: '2020-10-10',
    description:
      'Lorem ipsum doler set amet lorem ipsum doler set amet lorem ipsum doler set amet lorem ipsum doler set amet lorem ipsum doler set amet',
  },
  {
    skill_id: 'd1rs1',
    id: 'd1rs1htl2',
    name: 'HTML, CSS, and Javascript for Web Developers',
    image:
      'https://play-lh.googleusercontent.com/RslBy1o2NEBYUdRjQtUqLbN-ZM2hpks1mHPMiHMrpAuLqxeBPcFSAjo65nQHbTA53YYn',
    link: 'https://in.coursera.org/learn/html-css-javascript-for-web-developers',
    platform: 'w3schools',
    created_at: '2020-10-10',
    description:
      'Lorem ipsum doler set amet lorem ipsum doler set amet lorem ipsum doler set amet lorem ipsum doler set amet lorem ipsum doler set amet',
  },
  {
    skill_id: 'd1rs1',
    id: 'd1rs1htl3',
    name: 'HTML, CSS, and Javascript for Web Developers',
    image:
      'https://play-lh.googleusercontent.com/RslBy1o2NEBYUdRjQtUqLbN-ZM2hpks1mHPMiHMrpAuLqxeBPcFSAjo65nQHbTA53YYn',
    link: 'https://www.udemy.com/course/1-hour-html/',
    platform: 'w3schools',
    created_at: '2020-10-10',
    description:
      'Lorem ipsum doler set amet lorem ipsum doler set amet lorem ipsum doler set amet lorem ipsum doler set amet lorem ipsum doler set amet',
  },
  {
    skill_id: 'd1rs1',
    id: 'd1rs1htl4',
    name: 'Learn HTML',
    image: 'https://cdn-icons-png.flaticon.com/512/888/888859.png',
    link: 'https://www.codecademy.com/learn/learn-html',
    platform: 'codecademy',
    created_at: '2020-10-10',
    description:
      'Lorem ipsum doler set amet lorem ipsum doler set amet lorem ipsum doler set amet lorem ipsum doler set amet lorem ipsum doler set amet',
  },
  {
    skill_id: 'd1rs1',
    id: 'd1rs1htl5',
    name: 'HTML tutorial',
    image: 'https://cdn3d.iconscout.com/3d/free/thumb/html-5728485-4781249.png',
    link: 'https://youtu.be/qz0aGYrrlhU',
    platform: 'codecademy',
    created_at: '2020-10-10',
    description:
      'Lorem ipsum doler set amet lorem ipsum doler set amet lorem ipsum doler set amet lorem ipsum doler set amet lorem ipsum doler set amet',
  },
  {
    skill_id: 'd1rs2',
    id: 'd1rs2htl1',
    name: 'JavaScript for Beginners Specialization',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpngGRjYX1ca7qAADU3K6eGLj7ShQE3L2otdzfryl_Y9Ht2QRoQKYQbsXd36XIxMbYOw0&usqp=CAU',
    link: 'https://in.coursera.org/specializations/javascript-beginner',
    platform: 'w3schools',
    created_at: '2020-10-10',
    description:
      'Lorem ipsum doler set amet lorem ipsum doler set amet lorem ipsum doler set amet lorem ipsum doler set amet lorem ipsum doler set amet',
  },
  {
    skill_id: 'd1rs2',
    id: 'd1rs2htl2',
    name: 'Javascript for Beginners',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
    link: 'https://www.udemy.com/course/beginning-javascript/',
    platform: 'udemy',
    created_at: '2020-10-10',
    description:
      'Lorem ipsum doler set amet lorem ipsum doler set amet lorem ipsum doler set amet lorem ipsum doler set amet lorem ipsum doler set amet',
  },
  {
    skill_id: 'd1rs2',
    id: 'd1rs2htl3',
    name: 'JavaScript for Beginners Specialization',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
    link: 'https://in.coursera.org/specializations/javascript-beginner',
    platform: 'Coursera',
    created_at: '2020-10-10',
    description:
      'Lorem ipsum doler set amet lorem ipsum doler set amet lorem ipsum doler set amet lorem ipsum doler set amet lorem ipsum doler set amet',
  },
  {
    skill_id: 'd1rs2',
    id: 'd1rs2htl4',
    name: 'JavaScript Tutorials and Courses',
    image: 'https://www.w3schools.com/whatis/img_js.png',
    link: 'https://www.edx.org/course/javascript-introduction',
    platform: 'edx',
    created_at: '2020-10-10',
    description:
      'Lorem ipsum doler set amet lorem ipsum doler set amet lorem ipsum doler set amet lorem ipsum doler set amet lorem ipsum doler set amet',
  },
  {
    skill_id: 'd1rs2',
    id: 'd1rs2htl5',
    name: 'Learn JavaScript',
    image:
      'https://blog.logrocket.com/wp-content/uploads/2020/12/javascript-custom-events.png',
    link: 'https://www.codecademy.com/learn/introduction-to-javascript',
    platform: 'edx',
    created_at: '2020-10-10',
    description:
      'Lorem ipsum doler set amet lorem ipsum doler set amet lorem ipsum doler set amet lorem ipsum doler set amet lorem ipsum doler set amet',
  },
  {
    skill_id: 'd1rs3',
    id: 'd1rs3htl1',
    name: 'CSS Tutorial',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpngGRjYX1ca7qAADU3K6eGLj7ShQE3L2otdzfryl_Y9Ht2QRoQKYQbsXd36XIxMbYOw0&usqp=CAU',
    link: 'https://www.w3schools.com/css/',
    platform: 'w3schools',
    created_at: '2020-10-10',
    description:
      'Lorem ipsum doler set amet lorem ipsum doler set amet lorem ipsum doler set amet lorem ipsum doler set amet lorem ipsum doler set amet',
  },
  {
    skill_id: 'd1rs3',
    id: 'd1rs3htl2',
    name: 'Introduction to CSS3',
    image:
      'https://play-lh.googleusercontent.com/RslBy1o2NEBYUdRjQtUqLbN-ZM2hpks1mHPMiHMrpAuLqxeBPcFSAjo65nQHbTA53YYn',
    link: 'https://www.coursera.org/learn/introcss?utm_medium=institutions&utm_source=umich&utm_campaign=adwords-web-design-for-everybody-introduction-to-CSS3&utm_term=%2Bcss%20%2Bonline%20%2Bcourse&gclid=CjwKCAiA0JKfBhBIEiwAPhZXDz5O-YbEuC0FmvbHgFCl0fv0o-pqaDjVUtIwX603fTYmvvyHVly--hoCQEAQAvD_BwE',
    platform: 'coursera',
    created_at: '2020-10-10',
    description:
      'Lorem ipsum doler set amet lorem ipsum doler set amet lorem ipsum doler set amet lorem ipsum doler set amet lorem ipsum doler set amet',
  },
  {
    skill_id: 'd1rs3',
    id: 'd1rs3htl3',
    name: 'HTML, CSS, and Javascript for Web Developers',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png',
    link: 'https://www.youtube.com/watch?v=ToFbsYtf0Yc',
    platform: 'The Brainstormer',
    created_at: '2020-10-10',
    description:
      'Lorem ipsum doler set amet lorem ipsum doler set amet lorem ipsum doler set amet lorem ipsum doler set amet lorem ipsum doler set amet',
  },
  {
    skill_id: 'd1rs3',
    id: 'd1rs3htl4',
    name: 'CSS Basics',
    image:
      'https://www.oxfordwebstudio.com/user/pages/06.da-li-znate/sta-je-css/sta-je-css.png',
    link: 'https://www.edx.org/course/css-basics',
    platform: 'Edx',
    created_at: '2020-10-10',
    description:
      'Lorem ipsum doler set amet lorem ipsum doler set amet lorem ipsum doler set amet lorem ipsum doler set amet lorem ipsum doler set amet',
  },
  {
    skill_id: 'd1rs3',
    id: 'd1rs3htl5',
    name: 'CSS, Sass, Bootstrap - Beginner to Expert + Bootcamp',
    image:
      'https://camo.githubusercontent.com/edc736634dd35b0f4008e2f7db456136b9fc0e1e7a4078bb72c7352b1bdf8a7e/68747470733a2f2f776f726c64766563746f726c6f676f2e636f6d2f6c6f676f732f6373732d332e737667',
    link: 'https://www.udemy.com/course/html-css-sass-bootstrap-beginner-to-expert-bootcamp/?referralCode=1196FB265EFCA92A22C3&gclid=CjwKCAiA0JKfBhBIEiwAPhZXD0uDTCkq8ejk2kLZJYVhqqtOUYBzAp8hz-3-_TfzHWJRE8jFn7dC7hoCeDUQAvD_BwE',
    platform: 'udemy',
    created_at: '2020-10-10',
    description:
      'Lorem ipsum doler set amet lorem ipsum doler set amet lorem ipsum doler set amet lorem ipsum doler set amet lorem ipsum doler set amet',
  },
  {
    skill_id: 'd3rs1',
    id: 'd3rs1htl1',
    name: 'Ethical Hacking Tutorial',
    image:
      'https://cdn-images-1.medium.com/max/2600/1*92D2e9qYmbJ_3bFabHL7cg.png',
    link: '',
    platform: 'udemy',
    created_at: '2020-10-10',
    description:
      'Lorem ipsum doler set amet lorem ipsum doler set amet lorem ipsum doler set amet lorem ipsum doler set amet lorem ipsum doler set amet',
  },
  {
    skill_id: 'd3rs1',
    id: 'd3rs1htl2',
    name: 'Ethical Hacking Tutorial',
    image:
      'https://4.bp.blogspot.com/-HiRSrmQuVTI/XA9a0uU5fzI/AAAAAAAA6_0/RIq3W2EeRxY_OXWF0Pg2Bk8oao_pNa38QCLcBGAs/s1600/what-you-need-to-know-about-ethical-hacking-simplilearn-cover-image.jpg',
    link: 'https://alison.com/course/ethical-hacker?utm_source=bing&utm_medium=cpc&utm_campaign=436347242&utm_content=1364495706300223&utm_term=kwd-85282119770410:loc-90&msclkid=8e8cfe8d1dc1132737509d68395bed71',
    platform: 'Alison',
    created_at: '2020-10-10',
    description:
      'Lorem ipsum doler set amet lorem ipsum doler set amet lorem ipsum doler set amet lorem ipsum doler set amet lorem ipsum doler set amet',
  },
  {
    skill_id: 'd3rs1',
    id: 'd3rs1htl3',
    name: 'Ethical Hacking Tutorial',
    image:
      'https://img.sheroes.in/tr:w-790/img/uploads/article/high_res/15495365261549536526.png',
    link: 'https://www.theknowledgeacademy.com/in/offers/ethical-hacking-professional-certification-training-courses/?utm_term=Ethical%20Hacking%20Professional%20Course&utm_campaign=%5BHacking+Professional%5D%5BIN%5D&utm_source=adwords&utm_medium=ppc&hsa_acc=9865744776&hsa_cam=16008741256&hsa_grp=1306220177402330&hsa_ad=&hsa_src=o&hsa_tgt=kwd-81638950987024:loc-90&hsa_kw=Ethical%20Hacking%20Professional%20Course&hsa_mt=p&hsa_net=adwords&hsa_ver=3&utm_content=%5BHacking%20Professional%5D%5BCourse%5D',
    platform: 'theknowledgeacademy',
    created_at: '2020-10-10',
    description:
      'Lorem ipsum doler set amet lorem ipsum doler set amet lorem ipsum doler set amet lorem ipsum doler set amet lorem ipsum doler set amet',
  },
  {
    skill_id: 'd3rs1',
    id: 'd3rs1htl4',
    name: 'Ethical Hacking Tutorial',
    image:
      'https://th.bing.com/th/id/OIP.-jiCm5IczhE4xYNnbTd-uAHaEi?pid=ImgDet&rs=1',
    link: 'https://www.eccouncil.org/certified-ethical-hacker-course/',
    platform: 'eccouncil',
    created_at: '2020-10-10',
    description:
      'Lorem ipsum doler set amet lorem ipsum doler set amet lorem ipsum doler set amet lorem ipsum doler set amet lorem ipsum doler set amet',
  },
  {
    skill_id: 'd3rs1',
    id: 'd3rs1htl5',
    name: 'Ethical Hacking Tutorial',
    image:
      'https://dwnk32xmy75f1.cloudfront.net/wp-content/uploads/20190902065731/5.jpg',
    link: 'https://www.coursera.org/learn/hacking-patching?irclickid=TgISrb1yoxyNTC4xfs2CWyM-UkA3IY2hqRKmWw0&irgwc=1&utm_medium=partners&utm_source=impact&utm_campaign=2890636&utm_content=b2c',
    platform: 'coursera',
    created_at: '2020-10-10',
    description:
      'Lorem ipsum doler set amet lorem ipsum doler set amet lorem ipsum doler set amet lorem ipsum doler set amet lorem ipsum doler set amet',
  },
  {
    skill_id: 'd3rs2',
    id: 'd3rs2htl1',
    name: 'Recon for bug bounty, penetration testers & ethical hackers',
    image:
      'https://th.bing.com/th/id/OIP.e1CAN9QpQcsktY-n2vhNHAHaD4?pid=ImgDet&rs=1',
    link: 'https://www.udemy.com/course/recon-for-bug-bounty-penetration-testers-ethical-hackers/',
    platform: 'udemy',
    created_at: '2020-10-10',
    description:
      'Lorem ipsum doler set amet lorem ipsum doler set amet lorem ipsum doler set amet lorem ipsum doler set amet lorem ipsum doler set amet',
  },
  {
    skill_id: 'd3rs2',
    id: 'd3rs2htl1',
    name: 'Learn Bug Bounty Hunting & Web Security Testing From Scratch',
    image:
      'https://th.bing.com/th/id/OIP.IsX25RGEfXUlvnwCwLmsCQHaE8?pid=ImgDet&rs=1',
    link: 'https://www.udemy.com/course/learn-bug-bounty-hunting-web-security-testing-from-scratch/',
    platform: 'udemy',
    created_at: '2020-10-10',
    description:
      'Lorem ipsum doler set amet lorem ipsum doler set amet lorem ipsum doler set amet lorem ipsum doler set amet lorem ipsum doler set amet',
  },
  {
    skill_id: 'd3rs2',
    id: 'd3rs2htl1',
    name: 'BUG BOUNTY TRAINING IN HYDERABAD',
    image:
      'https://th.bing.com/th/id/OIP.nZPc4iFnkoNXHs64mzAgFgHaEH?pid=ImgDet&w=800&h=445&rs=1',
    link: 'https://www.nexsonit.com/trainings/bug-bounty-training/',
    platform: 'nexsonit',
    created_at: '2020-10-10',
    description:
      'Lorem ipsum doler set amet lorem ipsum doler set amet lorem ipsum doler set amet lorem ipsum doler set amet lorem ipsum doler set amet',
  },
  {
    skill_id: 'd3rs2',
    id: 'd3rs2htl1',
    name: 'Bug Bounty Hunter',
    image:
      'https://1.bp.blogspot.com/-FFeVPweevLY/X2LfKVOPS9I/AAAAAAAAAXA/u0QArT4cpfkTdenQSUTyPsK0hjB-ovklwCLcBGAsYHQ/w1200-h630-p-k-no-nu/bug.png',
    link: 'https://www.classcentral.com/course/independent-bugbountyhunter-102529',
    platform: 'classcentral',
    created_at: '2020-10-10',
    description:
      'Lorem ipsum doler set amet lorem ipsum doler set amet lorem ipsum doler set amet lorem ipsum doler set amet lorem ipsum doler set amet',
  },
  {
    skill_id: 'd3rs2',
    id: 'd3rs2htl1',
    name: 'The Bug Hunters Methodology',
    image:
      'https://ncybersecurity.com/wp-content/uploads/2020/06/bug-bounty-course.png',
    link: 'https://www.classcentral.com/course/youtube-the-bug-hunter-s-methodology-102530',
    platform: 'classcentral',
    created_at: '2020-10-10',
    description:
      'Lorem ipsum doler set amet lorem ipsum doler set amet lorem ipsum doler set amet lorem ipsum doler set amet lorem ipsum doler set amet',
  },
  {
    skill_id: 'd3rs3',
    id: 'd3rs2htl1',
    name: 'Certificate in Digital Forensics with Kali Linux',
    image:
      'https://empmonitor.com/blog/wp-content/uploads/2020/04/digital-forensics-2.jpg',
    link: 'https://www.careers360.com/courses-certifications/vskills-certificate-in-digital-forensics-kali-linux-course',
    platform: 'careers360',
    created_at: '2020-10-10',
    description:
      'Lorem ipsum doler set amet lorem ipsum doler set amet lorem ipsum doler set amet lorem ipsum doler set amet lorem ipsum doler set amet',
  },
  {
    skill_id: 'd3rs3',
    id: 'd3rs2htl1',
    name: 'Computer Forensics at RIT',
    image:
      'https://th.bing.com/th/id/OIP.1XnidoPnqpFYJ99MFwVzUgHaEK?pid=ImgDet&w=980&h=551&rs=1',
    link: 'https://www.careers360.com/university/rochester-institute-of-technology-rochester/computer-forensics-certification-course',
    platform: 'careers360',
    created_at: '2020-10-10',
    description:
      'Lorem ipsum doler set amet lorem ipsum doler set amet lorem ipsum doler set amet lorem ipsum doler set amet lorem ipsum doler set amet',
  },
  {
    skill_id: 'd3rs3',
    id: 'd3rs2htl1',
    name: 'IFCI Expert Cybercrime Investigators Course',
    image:
      'https://interworks.com/wp-content/uploads/sites/default/files/blog-content/forensics.jpg',
    link: 'https://www.udemy.com/course/ifci-expert-cybercrime-investigators-course/?matchtype=e&msclkid=581ffe23345c1a43e5e99dc606872286&utm_campaign=BG-LongTail_la.EN_cc.INDIA&utm_content=deal4584&utm_medium=udemyads&utm_source=bing&utm_term=._ag_1214960761641383.ad._kw_Digital+Forensics+Course.de_c.dm._pl._ti_kwd-75935386650777%3Aloc-90.li_158046.pd_._',
    platform: 'udemy',
    created_at: '2020-10-10',
    description:
      'Lorem ipsum doler set amet lorem ipsum doler set amet lorem ipsum doler set amet lorem ipsum doler set amet lorem ipsum doler set amet',
  },
  {
    skill_id: 'd3rs3',
    id: 'd3rs2htl1',
    name: 'Free Online Computer Forensics Courses',
    image:
      'https://th.bing.com/th/id/OIP.UNSfR0qWxSY7J9m5IuB7DAHaE8?pid=ImgDet&rs=1',
    link: 'https://alison.com/tag/computer-forensics',
    platform: 'alison',
    created_at: '2020-10-10',
    description:
      'Lorem ipsum doler set amet lorem ipsum doler set amet lorem ipsum doler set amet lorem ipsum doler set amet lorem ipsum doler set amet',
  },
  {
    skill_id: 'd3rs3',
    id: 'd3rs2htl1',
    name: 'Digital Forensics Essentials',
    image: 'https://i.ytimg.com/vi/ZUqzcQc_syE/maxresdefault.jpg',
    link: 'https://www.sans.org/cyber-security-courses/digital-forensics-essentials/',
    platform: 'classcentral',
    created_at: '2020-10-10',
    description:
      'Lorem ipsum doler set amet lorem ipsum doler set amet lorem ipsum doler set amet lorem ipsum doler set amet lorem ipsum doler set amet',
  },
  {
    skill_id: 'd3rs4',
    id: 'd3rs2htl1',
    name: 'Eclipse Debugging Techniques And Tricks',
    image:
      'https://th.bing.com/th/id/OIP.SVFH5MzPh_136Hj_6_13pgHaEy?pid=ImgDet&rs=1',
    link: 'https://www.udemy.com/course/eclipse-debugging-techniques-and-tricks/?matchtype=e&msclkid=13807a7bf203141bbb37199ec45fd0b2&utm_campaign=BG-LongTail_la.EN_cc.INDIA&utm_content=deal4584&utm_medium=udemyads&utm_source=bing&utm_term=._ag_1221557831786173.ad._kw_Debugging+Course.de_c.dm._pl._ti_kwd-76347700899011%3Aloc-90.li_158046.pd_._',
    platform: 'udemy',
    created_at: '2020-10-10',
    description:
      'Lorem ipsum doler set amet lorem ipsum doler set amet lorem ipsum doler set amet lorem ipsum doler set amet lorem ipsum doler set amet',
  },
  {
    skill_id: 'd3rs4',
    id: 'd3rs2htl1',
    name: 'SAP Debugging for Functional Consultants',
    image:
      'https://www.pixafy.com/wp-content/uploads/2013/02/top-debugging-tips.jpg',
    link: 'https://www.udemy.com/course/sap-abap-debugging-for-functional-consultants/?ranMID=39197&ranEAID=k*VTdGlCbXg&ranSiteID=k.VTdGlCbXg-dD7knG.McsSTzKxvXoCLgA&LSNPUBID=k*VTdGlCbXg&utm_source=aff-campaign&utm_medium=udemyads',
    platform: 'udemy',
    created_at: '2020-10-10',
    description:
      'Lorem ipsum doler set amet lorem ipsum doler set amet lorem ipsum doler set amet lorem ipsum doler set amet lorem ipsum doler set amet',
  },
  {
    skill_id: 'd3rs4',
    id: 'd3rs2htl1',
    name: 'Ultimate Guide to Debugging in Unity',
    image:
      'https://www.technokids.com/blog/wp-content/uploads/2020/01/teach-debugging.png',
    link: 'https://www.udemy.com/course/ultimate-guide-to-debugging-in-unity/?ranMID=39197&ranEAID=k*VTdGlCbXg&ranSiteID=k.VTdGlCbXg-Q_s.FBRGkwybEK0jWUm6jQ&LSNPUBID=k*VTdGlCbXg&utm_source=aff-campaign&utm_medium=udemyads',
    platform: 'udemy',
    created_at: '2020-10-10',
    description:
      'Lorem ipsum doler set amet lorem ipsum doler set amet lorem ipsum doler set amet lorem ipsum doler set amet lorem ipsum doler set amet',
  },
  {
    skill_id: 'd3rs4',
    id: 'd3rs2htl1',
    name: 'OllyDBG for Beginners (olly debug)',
    image:
      'https://th.bing.com/th/id/OIP.jOF5I3nVvvx0ig1InS49kAHaEr?pid=ImgDet&rs=1',
    link: 'https://www.udemy.com/course/ollydbg-for-beginners/?ranMID=39197&ranEAID=k*VTdGlCbXg&ranSiteID=k.VTdGlCbXg-VPgp4NLVqPEHksQxtFwMFA&LSNPUBID=k*VTdGlCbXg&utm_source=aff-campaign&utm_medium=udemyads',
    platform: 'udemy',
    created_at: '2020-10-10',
    description:
      'Lorem ipsum doler set amet lorem ipsum doler set amet lorem ipsum doler set amet lorem ipsum doler set amet lorem ipsum doler set amet',
  },
  {
    skill_id: 'd3rs4',
    id: 'd3rs2htl1',
    name: 'Troubleshooting and Debugging Techniques',
    image:
      'https://www.expertappdevs.com/sitebucket/blog/20210105120407_11_Debugging_react_native.jpg',
    link: 'https://www.coursera.org/learn/troubleshooting-debugging-techniques',
    platform: 'coursera',
    created_at: '2020-10-10',
    description:
      'Lorem ipsum doler set amet lorem ipsum doler set amet lorem ipsum doler set amet lorem ipsum doler set amet lorem ipsum doler set amet',
  },
  {
    skill_id: 'd6rs1',
    id: 'd6rs1htl1',
    name: 'Learn React Native',
    image:
      'https://www.appcoda.com/wp-content/uploads/2015/04/react-native.png',
    link: 'https://www.codecademy.com/learn/learn-react-native',
    platform: 'cODECademy',
    created_at: '2020-10-10',
    description:
      'Lorem ipsum doler set amet lorem ipsum doler set amet lorem ipsum doler set amet lorem ipsum doler set amet lorem ipsum doler set amet',
  },
  {
    skill_id: 'd6rs1',
    id: 'd6rs1htl2',
    name: 'Create your first React Native App',
    image:
      'https://play-lh.googleusercontent.com/RslBy1o2NEBYUdRjQtUqLbN-ZM2hpks1mHPMiHMrpAuLqxeBPcFSAjo65nQHbTA53YYn',
    link: 'https://www.udemy.com/course/create-your-first-react-native-app/',
    platform: 'Udemy',
    created_at: '2020-10-10',
    description:
      'Lorem ipsum doler set amet lorem ipsum doler set amet lorem ipsum doler set amet lorem ipsum doler set amet lorem ipsum doler set amet',
  },
  {
    skill_id: 'd6rs1',
    id: 'd6rs1htl3',
    name: ' React native complete guide 2023',
    image:
      'https://openwebsolutions.in/blog/wp-content/uploads/2019/07/React-Native-Titre.png',
    link: 'https://www.udemy.com/course/react-native-full-guide/',
    platform: 'Udemy',
    created_at: '2020-10-10',
    description:
      'Lorem ipsum doler set amet lorem ipsum doler set amet lorem ipsum doler set amet lorem ipsum doler set amet lorem ipsum doler set amet',
  },
  {
    skill_id: 'd6rs1',
    id: 'd6rs1htl4',
    name: 'React Native',
    image:
      'https://www.devteam.space/wp-content/uploads/2021/11/How-to-Build-a-Mobile-App-With-React-Native.jpg',
    link: 'https://in.coursera.org/learn/react-native-course',
    platform: 'Coursera',
    created_at: '2020-10-10',
    description:
      'Lorem ipsum doler set amet lorem ipsum doler set amet lorem ipsum doler set amet lorem ipsum doler set amet lorem ipsum doler set amet',
  },
  {
    skill_id: 'd6rs2',
    id: 'd6rs2htl1',
    name: 'flutter&dart',
    image:
      'https://storage.googleapis.com/cms-storage-bucket/70760bf1e88b184bb1bc.png',
    link: 'https://www.udemy.com/course/flutter-dart-the-complete-flutter-app-development-course/',
    platform: 'Udemy',
    created_at: '2020-10-10',
    description:
      'Lorem ipsum doler set amet lorem ipsum doler set amet lorem ipsum doler set amet lorem ipsum doler set amet lorem ipsum doler set amet',
  },
  {
    skill_id: 'd6rs2',
    id: 'd6rs2htl2',
    name: 'Introduction to flutter course online',
    image:
      'https://play-lh.googleusercontent.com/5e7z5YCt7fplN4qndpYzpJjYmuzM2WSrfs35KxnEw-Ku1sClHRWHoIDSw3a3YS5WpGcI',
    link: 'https://www.simplilearn.com/free-flutter-foundation-course-skillup',
    platform: 'skillup',
    created_at: '2020-10-10',
    description:
      'Lorem ipsum doler set amet lorem ipsum doler set amet lorem ipsum doler set amet lorem ipsum doler set amet lorem ipsum doler set amet',
  },
  {
    skill_id: 'd6rs2',
    id: 'd6rs2htl3',
    name: 'Become Flutter deveoper ',
    image:
      'https://blog.logrocket.com/wp-content/uploads/2022/02/Best-IDEs-Flutter-2022.png',
    link: 'https://fluttercrashcourse.com/',
    platform: 'Flutter crash course',
    created_at: '2020-10-10',
    description:
      'Lorem ipsum doler set amet lorem ipsum doler set amet lorem ipsum doler set amet lorem ipsum doler set amet lorem ipsum doler set amet',
  },
  {
    skill_id: 'd2rs1',
    id: 'd2rs1htl1',
    name: 'C Programming Language Tutorial',
    image:
      'https://raw.githubusercontent.com/github/explore/f3e22f0dca2be955676bc70d6214b95b13354ee8/topics/c/c.png',
    link: 'https://www.javatpoint.com/c-programming-language-tutorial',
    platform: 'Javatpoint',
    created_at: '2020-10-10',
    description:
      'Lorem ipsum doler set amet lorem ipsum doler set amet lorem ipsum doler set amet lorem ipsum doler set amet lorem ipsum doler set amet',
  },
  {
    skill_id: 'd2rs1',
    id: 'd2rs1htl2',
    name: 'Learn C Programming Basic',
    image:
      'https://www.pragimtech.com/wp-content/uploads/2020/03/c-tutorial-for-beginners.png',
    link: 'https://www.programiz.com/c-programming',
    platform: 'Programiz',
    created_at: '2020-10-10',
    description:
      'Lorem ipsum doler set amet lorem ipsum doler set amet lorem ipsum doler set amet lorem ipsum doler set amet lorem ipsum doler set amet',
  },
  {
    skill_id: 'd2rs1',
    id: 'd2rs1htl3',
    name: 'C Tutorial',
    image: 'https://contentstatic.techgig.com/photo/90325682.cms',
    link: 'https://www.tutorialspoint.com/cprogramming/index.htm',
    platform: 'Tutorialspoint',
    created_at: '2020-10-10',
    description:
      'Lorem ipsum doler set amet lorem ipsum doler set amet lorem ipsum doler set amet lorem ipsum doler set amet lorem ipsum doler set amet',
  },
  {
    skill_id: 'd2rs2',
    id: 'd2rs2htl1',
    name: 'C++ Tutorial',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1822px-ISO_C%2B%2B_Logo.svg.png',
    link: 'https://www.w3schools.com/cpp/cpp_intro.asp',
    platform: 'w3schools',
    created_at: '2020-10-10',
    description:
      'Lorem ipsum doler set amet lorem ipsum doler set amet lorem ipsum doler set amet lorem ipsum doler set amet lorem ipsum doler set amet',
  },
  {
    skill_id: 'd2rs2',
    id: 'd2rs2htl1',
    name: 'C++ Programming Language',
    image:
      'https://www.simplilearn.com/ice9/free_resources_article_thumb/C%2B%2B-vs-Java-C%2B%2B.png',
    link: 'https://www.geeksforgeeks.org/c-plus-plus/',
    platform: 'geeksforgeeks',
    created_at: '2020-10-10',
    description:
      'Lorem ipsum doler set amet lorem ipsum doler set amet lorem ipsum doler set amet lorem ipsum doler set amet lorem ipsum doler set amet',
  },
  {
    skill_id: 'd2rs2',
    id: 'd2rs2htl1',
    name: 'C++ Programming Language',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrysoq6-N41zWJZZMSvYEvlVhnjsImArdYEg&usqp=CAU',
    link: 'https://www.youtube.com/watch?v=30FUY4aRk4k',
    platform: 'YouTube',
    created_at: '2020-10-10',
    description:
      'Lorem ipsum doler set amet lorem ipsum doler set amet lorem ipsum doler set amet lorem ipsum doler set amet lorem ipsum doler set amet',
  },
  {
    skill_id: 'd2rs3',
    id: 'd2rs2htl1',
    name: 'Java Tutorial',
    image:
      'https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg',
    link: 'https://www.w3schools.com/java/',
    platform: 'w3schools',
    created_at: '2020-10-10',
    description:
      'Lorem ipsum doler set amet lorem ipsum doler set amet lorem ipsum doler set amet lorem ipsum doler set amet lorem ipsum doler set amet',
  },
  {
    skill_id: 'd2rs3',
    id: 'd2rs2htl1',
    name: 'Basic Java',
    image:
      'https://www.simplilearn.com/ice9/free_resources_article_thumb/C%2B%2B-vs-Java-C%2B%2B.png',
    link: 'https://www.javatpoint.com/java-tutorial',
    platform: 'javatpoint',
    created_at: '2020-10-10',
    description:
      'Lorem ipsum doler set amet lorem ipsum doler set amet lorem ipsum doler set amet lorem ipsum doler set amet lorem ipsum doler set amet',
  },
  {
    skill_id: 'd2rs3',
    id: 'd2rs2htl1',
    name: 'Java Video Tutorial',
    image:
      'https://www.oracle.com/oce/press/assets/CONT6C95347B9ECC40CF8E7272A74FD80BDE/native/rc24-java-logo.gif',
    link: 'https://www.youtube.com/playlist?list=PLE7E8B7F4856C9B19',
    platform: 'YouTube',
    created_at: '2020-10-10',
    description:
      'Lorem ipsum doler set amet lorem ipsum doler set amet lorem ipsum doler set amet lorem ipsum doler set amet lorem ipsum doler set amet',
  },
  {
    skill_id: 'd2rs4',
    id: 'd2rs2htl1',
    name: 'Python Tutorial',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png',
    link: 'https://www.w3schools.com/python/',
    platform: 'w3schools',
    created_at: '2020-10-10',
    description:
      'Lorem ipsum doler set amet lorem ipsum doler set amet lorem ipsum doler set amet lorem ipsum doler set amet lorem ipsum doler set amet',
  },
  {
    skill_id: 'd2rs4',
    id: 'd2rs2htl1',
    name: 'Basic Python',
    image:
      'https://cdn.rebrickable.com/media/thumbs/mocs/moc-91667.jpg/1000x800.jpg',
    link: 'https://www.javatpoint.com/java-tutorial',
    platform: 'Tutorialspoint',
    created_at: '2020-10-10',
    description:
      'Lorem ipsum doler set amet lorem ipsum doler set amet lorem ipsum doler set amet lorem ipsum doler set amet lorem ipsum doler set amet',
  },
  {
    skill_id: 'd2rs4',
    id: 'd2rs2htl1',
    name: 'Python Video Tutorial',
    image:
      'https://cdn.rebrickable.com/media/thumbs/mocs/moc-91667.jpg/1000x800.jpg',
    link: 'https://www.youtube.com/playlist?list=PLWKjhJtqVAbnqBxcdjVGgT3uVR10bzTEB',
    platform: 'YouTube',
    created_at: '2020-10-10',
    description:
      'Lorem ipsum doler set amet lorem ipsum doler set amet lorem ipsum doler set amet lorem ipsum doler set amet lorem ipsum doler set amet',
  },
  {
    skill_id: 'd13rs1',
    id: 'd13rs1htl1',
    name: 'Introduction to Artificial Intelligence (AI)',
    image:
      'https://www.simplilearn.com/ice9/free_resources_article_thumb/Why-get-certified-in-Artificial-Intelligence.jpg',
    link: 'https://in.coursera.org/learn/introduction-to-ai',
    platform: 'coursera',
    created_at: '2020-10-10',
    description:
      'Lorem ipsum doler set amet lorem ipsum doler set amet lorem ipsum doler set amet lorem ipsum doler set amet lorem ipsum doler set amet',
  },
  {
    skill_id: 'd13rs1',
    id: 'd13rs1htl2',
    name: 'Artificial Intelligence',
    image:
      'https://i0.wp.com/bdtechtalks.com/wp-content/uploads/2020/05/robot-thinking.jpg?fit=3558%2C2092&ssl=1',
    link: 'https://www.classcentral.com/report/best-ai-courses/',
    platform: 'classcentral',
    created_at: '2020-10-10',
    description:
      'Lorem ipsum doler set amet lorem ipsum doler set amet lorem ipsum doler set amet lorem ipsum doler set amet lorem ipsum doler set amet',
  },
  {
    skill_id: 'd13rs1',
    id: 'd13rs1htl3',
    name: 'Artificial Intelligence I: Meta-Heuristics',
    image:
      'https://www.srimax.com/wp-content/uploads/2020/01/Importance-of-Artificial-Intelligence.jpeg',
    link: 'https://www.udemy.com/course/artificial-intelligence-games-in-java/',
    platform: 'Udemy',
    created_at: '2020-10-10',
    description:
      'Lorem ipsum doler set amet lorem ipsum doler set amet lorem ipsum doler set amet lorem ipsum doler set amet lorem ipsum doler set amet',
  },
  {
    skill_id: 'd13rs2',
    id: 'd13rs2htl1',
    name: 'Machine Learning Specialization',
    image:
      'https://innovationatwork.ieee.org/wp-content/uploads/2021/02/bigstock-Human-Brain-d-Illustration-D-288314977_1024X684.png',
    link: 'https://www.coursera.org/specializations/machine-learning-introduction',
    platform: 'Coursera',
    created_at: '2020-10-10',
    description:
      'Lorem ipsum doler set amet lorem ipsum doler set amet lorem ipsum doler set amet lorem ipsum doler set amet lorem ipsum doler set amet',
  },
  {
    skill_id: 'd13rs2',
    id: 'd13rs2htl2',
    name: 'Machine Learning Basics',
    image: 'https://miro.medium.com/max/1400/1*c_fiB-YgbnMl6nntYGBMHQ.jpeg',
    link: 'https://youtu.be/ukzFI9rgwfU',
    platform: 'Simlilearn',
    created_at: '2020-10-10',
    description:
      'Lorem ipsum doler set amet lorem ipsum doler set amet lorem ipsum doler set amet lorem ipsum doler set amet lorem ipsum doler set amet',
  },
  {
    skill_id: 'd13rs2',
    id: 'd13rs2htl3',
    name: 'machine learning roadmap',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
    link: 'https://youtu.be/pHiMN_gy9mk',
    platform: 'Daniel Bourke',
    created_at: '2020-10-10',
    description:
      'Lorem ipsum doler set amet lorem ipsum doler set amet lorem ipsum doler set amet lorem ipsum doler set amet lorem ipsum doler set amet',
  },
  {
    skill_id: 'd13rs2',
    id: 'd13rs2htl4',
    name: 'Machine Learning',
    image:
      'https://blog.integral-system.fr/wp-content/uploads/2020/02/33797061.jpg',
    link: 'https://youtu.be/GwIo3gDZCVQ',
    platform: 'edureka',
    created_at: '2020-10-10',
    description:
      'Lorem ipsum doler set amet lorem ipsum doler set amet lorem ipsum doler set amet lorem ipsum doler set amet lorem ipsum doler set amet',
  },
  {
    skill_id: 'd11rs1',
    id: 'd11rs1htl1',
    name: 'Introduction to Unity',
    image: 'https://unity3d.com/files/images/ogimg.jpg',
    link: 'https://in.coursera.org/learn/introduction-to-ai',
    platform: 'coursera',
    created_at: '2020-10-10',
    description:
      'Lorem ipsum doler set amet lorem ipsum doler set amet lorem ipsum doler set amet lorem ipsum doler set amet lorem ipsum doler set amet',
  },
  {
    skill_id: 'd11rs2',
    id: 'd11rs1htl1',
    name: 'Introduction to Unreal Engine',
    image: 'https://unity3d.com/files/images/ogimg.jpg',
    link: 'https://in.coursera.org/learn/introduction-to-ai',
    platform: 'coursera',
    created_at: '2020-10-10',
    description:
      'Lorem ipsum doler set amet lorem ipsum doler set amet lorem ipsum doler set amet lorem ipsum doler set amet lorem ipsum doler set amet',
  },
];

export const TRENDING_TOPICS = [
  {
    id: '1',
    name: 'Artificial Intelligence',
    description:
      'Artificial Intelligence involves creating machines that can think and work like humans. It includes techniques such as machine learning, deep learning, natural language processing, and computer vision.',
    image:
      'https://assets.spe.org/dims4/default/eb14dec/2147483647/strip/true/crop/1024x757+0+0/resize/800x591!/quality/90/?url=http%3A%2F%2Fspe-brightspot.s3.amazonaws.com%2Ff4%2Fad%2F61fb2ee84edb8b836770aa794b5c%2Ftwa-2021-12-ai-basics.jpg',
  },
  {
    id: '2',
    name: 'Web Development',
    description:
      'Web Development involves creating and maintaining websites. It covers technologies such as HTML, CSS, JavaScript, React, Node.js, and more.',
    image:
      'http://www.agileacademy.co.in/wp-content/uploads/2021/01/Web-Design-Logo.png',
  },
  {
    id: '3',
    name: 'Data Science',
    description:
      'Data Science involves the extraction of insights and knowledge from data. It covers technologies such as Python, R, SQL, machine learning, and data visualization.',
    image:
      'https://imageio.forbes.com/specials-images/imageserve/615a844b0e678d9d11c5fc26/0x0.jpg?format=jpg&width=1200',
  },
  {
    id: '4',
    name: 'Cybersecurity',
    description:
      'Cybersecurity involves the protection of computer systems and networks from theft and damage to their hardware, software or information, as well as from disruption or misdirection of the services they provide.',
    image:
      'https://onlinedegrees.sandiego.edu/wp-content/uploads/2020/01/USD-Cyber-Cybersecurity-vs-Information-Security-vs-Network-Security-_2.jpeg',
  },
  {
    id: '5',
    name: 'Cloud Computing',
    description:
      'Cloud Computing refers to the delivery of computing services—including servers, storage, databases, networking, software, analytics, and intelligence—over the Internet to offer faster innovation, flexible resources, and economies of scale.',
    image:
      'https://imageio.forbes.com/specials-images/imageserve/5f9fa9e815da35da1356a28b/The-5-Biggest-Cloud-Computing-Trends-In-2021/960x0.jpg?format=jpg&width=960',
  },
  {
    id: '6',
    name: 'Mobile Development',
    description:
      'Mobile Development involves creating apps for mobile devices. It covers platforms such as Android, iOS, React Native, and more.',
    image:
      'https://images.idgesg.net/images/article/2017/11/computerworld_mobile_application_madness_development_2017_thinkstock_teaser-100743242-large.jpg?auto=webp&quality=85,70',
  },
  {
    id: '7',
    name: 'Game Development',
    description:
      'Game Development involves creating video games. It covers game engines such as Unity, Unreal Engine, and more.',
    image:
      'https://r2j4y6x9.map2.ssl.hwcdn.net/wp-content/uploads/2018/06/Adding-Polish-to-Games.jpg',
  },
  {
    id: '8',
    name: 'Digital Marketing',
    description:
      'Digital Marketing involves promoting products and services using digital technologies. It covers tactics such as SEO, PPC advertising, social media marketing, and more.',
    image:
      'https://www.simplilearn.com/ice9/free_resources_article_thumb/history_and_evolution_of_digital_marketing.jpg',
  },
  {
    id: '9',
    name: 'Design',
    description:
      'Design involves creating visual and graphical elements for products, interfaces, and more. It covers areas such as graphic design, UX design, UI design, branding, and more.',
    image:
      'https://www.incimages.com/uploaded_files/image/1920x1080/getty_537311951_100178.jpg',
  },
  {
    id: '10',
    name: 'Project Management',
    description:
      'Project Management involves planning and organizing a project to meet its goals and objectives. It covers methodologies such as Agile, Scrum, Kanban, and more.',
    image:
      'https://www.herzing.edu/sites/default/files/styles/fp_960_480/public/2020-09/project-management-skills.jpg.webp?itok=rN-QQPq6',
  },
];
