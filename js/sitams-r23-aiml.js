/* Single source of truth: uploaded official SITAMS CSE (AI & ML) B.Tech R23 syllabus.
   Source file: R23-CSE-AIML.pdf, pp. 1-9 for course structure and elective pools. */
window.SITAMS_R23_AIML = {
  program:'B.Tech Computer Science & Engineering (Artificial Intelligence & Machine Learning)',
  regulation:'R23',
  source:'Official SITAMS R23 CSE (AI & ML) Course Structures and Syllabi',
  sourceFile:'R23-CSE-AIML.pdf',
  sourcePages:'Pages 1-9: semester course structure; pages 6-8: elective pools',
  semesters:[
    {year:1,yearLabel:'I Year',id:'I',label:'I Year • I Semester',subjects:[
      ['23BSC111T','Applied Chemistry','🧪','theory'],
      ['23BSC113T','Engineering Physics','⚛️','theory'],
      ['23BSC114T','Linear Algebra and Calculus','📐','theory'],
      ['23ESC114T','Introduction to Programming','💻','theory'],
      ['23ESC111T','Basic Civil and Mechanical Engineering','🏗️','theory'],
      ['23BSC115L','Applied Chemistry Lab','🧪','lab'],
      ['23BSC117L','Engineering Physics Lab','🔬','lab'],
      ['23ESC115L','Computer Programming Lab','💻','lab'],
      ['23ESC117L','Engineering Workshop','🔧','lab'],
      ['23HSM113L','Health and wellness, Yoga and Sports','🏃','mandatory']
    ]},
    {year:1,yearLabel:'I Year',id:'II',label:'I Year • II Semester',subjects:[
      ['23HSM111T','Communicative English','🗣️','theory'],
      ['23BSC121T','Differential Equations and Vector Calculus','∫','theory'],
      ['23ESC112T','Basic Electrical and Electronics Engineering','⚡','theory'],
      ['23CSE121T','Data Structures','🌳','theory'],
      ['23ESC113T','Engineering Graphics','📐','theory'],
      ['23HSM112L','Communicative English Lab','🗣️','lab'],
      ['23ESC116L','Electrical and Electronics Engineering Workshop','🔌','lab'],
      ['23CSE122L','Data Structures Lab','🧪','lab'],
      ['23ESC118L','IT Workshop','🖥️','lab'],
      ['23HSM114L','NSS/NCC/Scouts & Guides/Community Service','🤝','mandatory']
    ]},
    {year:2,yearLabel:'II Year',id:'III',label:'II Year • III Semester',subjects:[
      ['23BSC232T','Discrete Mathematics and Graph Theory','🔢','theory'],
      ['23HSM234T','Universal Human Values – Understanding Harmony and Ethical Human Conduct','🧭','theory'],
      ['23CAI231T','Artificial Intelligence','🤖','theory'],
      ['23CSE231T','Advanced Data Structures and Algorithm Analysis','🌳','theory'],
      ['23CSE232T','Object Oriented Programming Through Java','☕','theory'],
      ['23CSE233L','Advanced Data Structures and Algorithm Analysis Lab','🧪','lab'],
      ['23CSE234L','Object Oriented Programming Through Java Lab','💻','lab'],
      ['23CSE235L','Python Programming (Skill Enhancement Course)','🐍','lab'],
      ['23MAC231U','Environmental Science','🌱','mandatory']
    ]},
    {year:2,yearLabel:'II Year',id:'IV',label:'II Year • IV Semester',subjects:[
      ['23BSC242T','Optimization Techniques','📐','theory'],
      ['23BSC243T','Probability and Statistics','📊','theory'],
      ['23ESC232T','Digital Logic and Computer Organization','🔌','theory'],
      ['23CSE241T','Database Management Systems','🗄️','theory'],
      ['23CSM241T','Machine Learning','🧠','theory'],
      ['23CSE245L','Database Management Systems Lab','🧪','lab'],
      ['23CSE246L','Full Stack Development – I (Skill Enhancement Course)','🌐','lab'],
      ['23CSM243L','Machine Learning Lab','🤖','lab'],
      ['23ESC241I','Design Thinking and Innovation','💡','theory']
    ]},
    {year:3,yearLabel:'III Year',id:'V',label:'III Year • V Semester',subjects:[
      ['23CAI351T','Cloud Computing for AI','☁️','theory'],
      ['23CAI352T','Computer Vision & Image Processing','👁️','theory'],
      ['23CSM351T','Big Data Analytics & AI Applications','📈','theory'],
      ['PE-I','Professional Elective – I','🎯','elective'],
      ['OE-I','Open Elective – I','🌐','elective'],
      ['23ESC351T','Introduction to Quantum Technologies and Applications','⚛️','theory'],
      ['23CAI356L','Computer Vision and Image Processing Lab','🧪','lab'],
      ['23CSM352L','Big Data & Cloud Computing Lab','☁️','lab'],
      ['23CSE356L','Full Stack Development - II (Skill Enhancement Course)','🌐','lab'],
      ['23CSM351P','Evaluation of Community Service Project','📋','project'],
      ['23MAC351U','Technical Paper Writing & IPR','📄','mandatory']
    ]},
    {year:3,yearLabel:'III Year',id:'VI',label:'III Year • VI Semester',subjects:[
      ['23CSM361T','Deep Learning','🧠','theory'],
      ['23CAI353T','Natural Language Processing','💬','theory'],
      ['23CSE353T','Operating Systems & Systems Programming','⚙️','theory'],
      ['PE-II','Professional Elective – II','🎯','elective'],
      ['PE-III','Professional Elective – III','🎯','elective'],
      ['OE-II','Open Elective – II','🌐','elective'],
      ['23CSM365L','Deep Learning Lab','🧪','lab'],
      ['23CSE357L','Operating Systems & Systems Programming Lab','💻','lab'],
      ['23HSM241L','Soft Skills (Skill Enhancement Course)','🎯','lab'],
      ['23ESC352L','Tinkering Lab','🔧','lab'],
      ['23CSM361P','Domain Specific Workshop','🛠️','project']
    ]},
    {year:4,yearLabel:'IV Year',id:'VII',label:'IV Year • VII Semester',subjects:[
      ['23CAI471T','Generative AI and Prompt Engineering','✨','theory'],
      ['MSE','Management Science Elective','📚','elective'],
      ['PE-IV','Professional Elective – IV','🎯','elective'],
      ['PE-V','Professional Elective – V','🎯','elective'],
      ['OE-III','Open Elective – III','🌐','elective'],
      ['OE-IV','Open Elective – IV','🌐','elective'],
      ['23CAI474L','Prompt Engineering (Skill Enhancement Course)','✍️','lab'],
      ['23CSM471P','Evaluation Industry Internship','🏢','project'],
      ['23MAC471U','Gender Sensitization','🧩','mandatory']
    ]},
    {year:4,yearLabel:'IV Year',id:'VIII',label:'IV Year • VIII Semester',subjects:[
      ['23CSM481P','Internship','🏢','project'],
      ['23CSM482P','Project Work','🚀','project']
    ]}
  ],
  electivePools:{
    'PE-I':[
      ['23CAI355A','Computational Intelligence'],['23CSD351A','Data Visualization'],['23CSD351B','Exploratory Data Analysis'],['23CSE354D','Soft Computing']
    ],
    'PE-II':[
      ['23CAI363A','Blockchain for AI'],['23CAI363B','Graph Neural Networks'],['23CSD361T','Predictive Analytics'],['23CSM362A','Recommender Systems']
    ],
    'PE-III':[
      ['23CAI364A','AI for Finance'],['23CSD362A','Social Network Analysis'],['23CSM363B','Edge Computing'],['23CSM363C','Quantum Computing'],['23CSM363D','Reinforcement Learning']
    ],
    'PE-IV':[
      ['23CSM471A','AI & ML in Cyber Security & Threat Detection'],['23CAI472A','AI-driven Software Engineering & DevOps'],['23CAI472B','AI for Robotics'],['23CAI472D','Explainable AI & Model Interpretability']
    ],
    'PE-V':[
      ['23CAI473A','AI for Smart Cities & IoT Systems'],['23CSM472A','ML Ops & AI Model Deployment'],['23CSD473A','Data Wrangling'],['23CAI473B','AI in Healthcare']
    ],
    'MSE':[
      ['23HSM471A','Business Ethics and Corporate Governance'],['23HSM471B','E-Business'],['23HSM471C','Management Science']
    ],
    'OE-I':[
      ['23OCE351A','Green Buildings'],['23OCE351B','Construction Technology and Management'],['23OEE351A','Electrical Safety Practices and Standards'],['23OEC351A','Electronic Circuits'],['23OME351A','Sustainable Energy Technologies'],['23OSH351A','Mathematics for Machine Learning and AI'],['23OSH351B','Materials Characterization Techniques'],['23OSH351C','Chemistry of Energy Systems'],['23OSH351D','English for Competitive Examinations'],['23OSH351E','Entrepreneurship and New Venture Creation']
    ],
    'OE-II':[
      ['23OCE361A','Disaster Management'],['23OCE361B','Sustainability In Engineering Practices'],['23OEE361A','Renewable Energy Sources'],['23OEC361A','Digital Electronics'],['23OME361A','Principles of Automation and Robotics'],['23OSH361A','Optimization Techniques for Engineers'],['23OSH361B','Mathematical Foundation Of Quantum Technologies'],['23OSH361C','Physics of Electronic Materials And Devices'],['23OSH361D','Chemistry of Polymers and Applications'],['23OSH361E','Academic Writing and Public Speaking']
    ],
    'OE-III':[
      ['23OCE471A','Building Materials and Services'],['23OCE471B','Environmental Impact Assessment'],['23OEE471A','Smart Grid Technologies'],['23OEC471A','Fundamentals of Microprocessors and Controllers'],['23OME471A','3D Printing Technologies'],['23OSH471A','Wavelet transforms and its Applications'],['23OSH471B','Smart Materials and Devices'],['23OSH471C','Introduction to Quantum Mechanics'],['23OSH471D','Green Chemistry and Catalysis for Sustainable Environment'],['23OSH471E','Employability Skills']
    ],
    'OE-IV':[
      ['23OCE472A','Geo-Spatial Technologies'],['23OCE472B','Solid Waste Management'],['23OEE472A','Electric Vehicles'],['23OEC472A','Transducers and Sensors'],['23OME472A','Fundamentals of Quality Management'],['23OSH472A','Financial Mathematics'],['23OSH472B','Sensors And Actuators For Engineering Applications'],['23OSH472C','Chemistry Of Nanomaterial’s and Applications'],['23OSH472D','Literary Vibes'],['23OPEN472','Introduction to Quantum Computing']
    ]
  }
};

window.SITAMS_SUBJECTS = SITAMS_R23_AIML.semesters.flatMap(sem => sem.subjects.map(([code,name,icon,type], index)=>({id:code,code,name,icon,type,semester:sem.id,semesterLabel:sem.label,year:sem.year,yearLabel:sem.yearLabel,number:index+1})));
window.SITAMS_YEARS=[{id:1,label:'I Year',status:'published'},{id:2,label:'II Year',status:'published'},{id:3,label:'III Year',status:'published'},{id:4,label:'IV Year',status:'published'}];
