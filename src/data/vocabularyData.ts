import { VocabularyWord } from '../types';

export const allVocabulary: VocabularyWord[] = [
  // سلام و احوال‌پرسی (Greetings)
  {
    id: 'w-1',
    word: 'Hello',
    phonetic: '[هـِلو / hel-oh]',
    partOfSpeech: 'اصطلاح',
    meaningFa: 'سلام',
    exampleEn: 'Hello! How are you?',
    exampleFa: 'سلام! حالت چطوره؟',
    category: 'سلام و احوال‌پرسی'
  },
  {
    id: 'w-2',
    word: 'Goodbye',
    phonetic: '[گودبای / gud-bay]',
    partOfSpeech: 'اصطلاح',
    meaningFa: 'خداحافظ',
    exampleEn: 'Goodbye, see you tomorrow!',
    exampleFa: 'خداحافظ، فردا می‌بینمت!',
    category: 'سلام و احوال‌پرسی'
  },
  {
    id: 'w-3',
    word: 'Please',
    phonetic: '[پلیز / pliiz]',
    partOfSpeech: 'قید/اصطلاح',
    meaningFa: 'لطفاً',
    exampleEn: 'Help me, please.',
    exampleFa: 'کمکم کن، لطفاً.',
    category: 'سلام و احوال‌پرسی'
  },
  {
    id: 'w-4',
    word: 'Thank you',
    phonetic: '[تـَنک یو / thenk yu]',
    partOfSpeech: 'عبارت',
    meaningFa: 'متشکرم',
    exampleEn: 'Thank you very much.',
    exampleFa: 'خیلی متشکرم.',
    category: 'سلام و احوال‌پرسی'
  },
  {
    id: 'w-5',
    word: 'Yes / No',
    phonetic: '[یـِس / نو]',
    partOfSpeech: 'پاسخ',
    meaningFa: 'بله / خیر',
    exampleEn: 'Yes, I do.',
    exampleFa: 'بله، انجام می‌دهم.',
    category: 'سلام و احوال‌پرسی'
  },

  // خانواده (Family)
  {
    id: 'w-6',
    word: 'Mother / Mom',
    phonetic: '[مادِر / ma-zer]',
    partOfSpeech: 'اسم',
    meaningFa: 'مادر',
    exampleEn: 'My mother is very kind.',
    exampleFa: 'مادرم خیلی مهربان است.',
    category: 'خانواده و افراد'
  },
  {
    id: 'w-7',
    word: 'Father / Dad',
    phonetic: '[فادِر / fa-zer]',
    partOfSpeech: 'اسم',
    meaningFa: 'پدر',
    exampleEn: 'My father is a teacher.',
    exampleFa: 'پدرم معلم است.',
    category: 'خانواده و افراد'
  },
  {
    id: 'w-8',
    word: 'Brother',
    phonetic: '[برادِر / bra-zer]',
    partOfSpeech: 'اسم',
    meaningFa: 'برادر',
    exampleEn: 'I have one brother.',
    exampleFa: 'من یک برادر دارم.',
    category: 'خانواده و افراد'
  },
  {
    id: 'w-9',
    word: 'Sister',
    phonetic: '[سیستِر / sis-ter]',
    partOfSpeech: 'اسم',
    meaningFa: 'خواهر',
    exampleEn: 'My sister is at home.',
    exampleFa: 'خواهرم در خانه است.',
    category: 'خانواده و افراد'
  },
  {
    id: 'w-10',
    word: 'Friend',
    phonetic: '[فرِند / frend]',
    partOfSpeech: 'اسم',
    meaningFa: 'دوست',
    exampleEn: 'Ali is my friend.',
    exampleFa: 'علی دوست من است.',
    category: 'خانواده و افراد'
  },

  // غذا و نوشیدنی (Food & Drink)
  {
    id: 'w-11',
    word: 'Water',
    phonetic: '[واتِر / wa-ter]',
    partOfSpeech: 'اسم',
    meaningFa: 'آب',
    exampleEn: 'I drink cold water.',
    exampleFa: 'من آب سرد می‌نوشم.',
    category: 'غذا و نوشیدنی'
  },
  {
    id: 'w-12',
    word: 'Bread',
    phonetic: '[برِد / bred]',
    partOfSpeech: 'اسم',
    meaningFa: 'نان',
    exampleEn: 'We eat fresh bread.',
    exampleFa: 'ما نان تازه می‌خوریم.',
    category: 'غذا و نوشیدنی'
  },
  {
    id: 'w-13',
    word: 'Milk',
    phonetic: '[میلـک / milk]',
    partOfSpeech: 'اسم',
    meaningFa: 'شیر (نوشیدنی)',
    exampleEn: 'The cat drinks milk.',
    exampleFa: 'گربه شیر می‌نوشد.',
    category: 'غذا و نوشیدنی'
  },
  {
    id: 'w-14',
    word: 'Tea',
    phonetic: '[تی / tii]',
    partOfSpeech: 'اسم',
    meaningFa: 'چای',
    exampleEn: 'She likes hot tea.',
    exampleFa: 'او چای داغ دوست دارد.',
    category: 'غذا و نوشیدنی'
  },
  {
    id: 'w-15',
    word: 'Apple',
    phonetic: '[اَپـِل / ap-pl]',
    partOfSpeech: 'اسم',
    meaningFa: 'سیب',
    exampleEn: 'I eat a red apple.',
    exampleFa: 'من یک سیب قرمز می‌خورم.',
    category: 'غذا و نوشیدنی'
  },
  {
    id: 'w-16',
    word: 'Food',
    phonetic: '[فود / fuud]',
    partOfSpeech: 'اسم',
    meaningFa: 'غذا / خوراک',
    exampleEn: 'This food is good.',
    exampleFa: 'این غذا خوب است.',
    category: 'غذا و نوشیدنی'
  },

  // کارهای روزانه و افعال بسیار پرکاربرد (Top Verbs)
  {
    id: 'w-17',
    word: 'Go',
    phonetic: '[گو / gou]',
    partOfSpeech: 'فعل',
    meaningFa: 'رفتن',
    exampleEn: 'I go to school.',
    exampleFa: 'من به مدرسه می‌رویم.',
    category: 'افعال پرکاربرد'
  },
  {
    id: 'w-18',
    word: 'Come',
    phonetic: '[کام / kam]',
    partOfSpeech: 'فعل',
    meaningFa: 'آمدن',
    exampleEn: 'Come here, please.',
    exampleFa: 'لطفاً بیا اینجا.',
    category: 'افعال پرکاربرد'
  },
  {
    id: 'w-19',
    word: 'Eat',
    phonetic: '[ایت / iit]',
    partOfSpeech: 'فعل',
    meaningFa: 'خوردن',
    exampleEn: 'We eat lunch at 1 PM.',
    exampleFa: 'ما ساعت یک ناهار می‌خوریم.',
    category: 'افعال پرکاربرد'
  },
  {
    id: 'w-20',
    word: 'Drink',
    phonetic: '[درینک / drink]',
    partOfSpeech: 'فعل',
    meaningFa: 'نوشیدن',
    exampleEn: 'He drinks water.',
    exampleFa: 'او آب می‌نوشد.',
    category: 'افعال پرکاربرد'
  },
  {
    id: 'w-21',
    word: 'Sleep',
    phonetic: '[سلیپ / sliip]',
    partOfSpeech: 'فعل',
    meaningFa: 'خوابیدن',
    exampleEn: 'I sleep at 10 PM.',
    exampleFa: 'من ساعت ۱۰ شب می‌خوابم.',
    category: 'افعال پرکاربرد'
  },
  {
    id: 'w-22',
    word: 'Read',
    phonetic: '[رید / riid]',
    partOfSpeech: 'فعل',
    meaningFa: 'خواندن',
    exampleEn: 'She reads a book.',
    exampleFa: 'او کتاب می‌خواند.',
    category: 'افعال پرکاربرد'
  },
  {
    id: 'w-23',
    word: 'Write',
    phonetic: '[رایت / rayt]',
    partOfSpeech: 'فعل',
    meaningFa: 'نوشتن',
    exampleEn: 'I write my name.',
    exampleFa: 'من اسمم را می‌نویسم.',
    category: 'افعال پرکاربرد'
  },
  {
    id: 'w-24',
    word: 'See',
    phonetic: '[سی / sii]',
    partOfSpeech: 'فعل',
    meaningFa: 'دیدن',
    exampleEn: 'I see a bird.',
    exampleFa: 'من یک پرنده می‌بینم.',
    category: 'افعال پرکاربرد'
  },
  {
    id: 'w-25',
    word: 'Like',
    phonetic: '[لایک / layk]',
    partOfSpeech: 'فعل',
    meaningFa: 'دوست داشتن',
    exampleEn: 'They like music.',
    exampleFa: 'آن‌ها موسیقی دوست دارند.',
    category: 'افعال پرکاربرد'
  },
  {
    id: 'w-26',
    word: 'Help',
    phonetic: '[هـِلپ / help]',
    partOfSpeech: 'فعل',
    meaningFa: 'کمک کردن',
    exampleEn: 'Can you help me?',
    exampleFa: 'می‌توانی کمکم کنی؟',
    category: 'افعال پرکاربرد'
  },
  {
    id: 'w-27',
    word: 'Play',
    phonetic: '[پلی / plei]',
    partOfSpeech: 'فعل',
    meaningFa: 'بازی کردن',
    exampleEn: 'Boys play football.',
    exampleFa: 'پسرها فوتبال بازی می‌کنند.',
    category: 'افعال پرکاربرد'
  },
  {
    id: 'w-28',
    word: 'Work',
    phonetic: '[وِرک / wark]',
    partOfSpeech: 'فعل/اسم',
    meaningFa: 'کار کردن / کار',
    exampleEn: 'He works hard.',
    exampleFa: 'او سخت کار می‌کند.',
    category: 'افعال پرکاربرد'
  },

  // زمان، روزها و اعداد (Time & Numbers)
  {
    id: 'w-29',
    word: 'Today',
    phonetic: '[تودِی / tu-dey]',
    partOfSpeech: 'قید زمان',
    meaningFa: 'امروز',
    exampleEn: 'Today is Sunday.',
    exampleFa: 'امروز یکشنبه است.',
    category: 'زمان و روزها'
  },
  {
    id: 'w-30',
    word: 'Yesterday',
    phonetic: '[یستردِی / yes-ter-dey]',
    partOfSpeech: 'قید زمان',
    meaningFa: 'دیروز',
    exampleEn: 'I saw Ali yesterday.',
    exampleFa: 'من دیروز علی را دیدم.',
    category: 'زمان و روزها'
  },
  {
    id: 'w-31',
    word: 'Tomorrow',
    phonetic: '[تومارو / tu-mo-ro]',
    partOfSpeech: 'قید زمان',
    meaningFa: 'فردا',
    exampleEn: 'We will go tomorrow.',
    exampleFa: 'ما فردا خواهیم رفت.',
    category: 'زمان و روزها'
  },
  {
    id: 'w-32',
    word: 'Morning',
    phonetic: '[مورنینگ / mor-ning]',
    partOfSpeech: 'اسم',
    meaningFa: 'صبح',
    exampleEn: 'Good morning!',
    exampleFa: 'صبح به‌خیر!',
    category: 'زمان و روزها'
  },
  {
    id: 'w-33',
    word: 'Night',
    phonetic: '[نایت / nayt]',
    partOfSpeech: 'اسم',
    meaningFa: 'شب',
    exampleEn: 'Good night, sleep well.',
    exampleFa: 'شب به‌خیر، خوب بخوابی.',
    category: 'زمان و روزها'
  },
  {
    id: 'w-34',
    word: 'One, Two, Three',
    phonetic: '[وان، تو، تری]',
    partOfSpeech: 'عدد',
    meaningFa: 'یک، دو، سه',
    exampleEn: 'I have two books.',
    exampleFa: 'من دو تا کتاب دارم.',
    category: 'زمان و روزها'
  },

  // صفت‌های عمومی (Essential Adjectives)
  {
    id: 'w-35',
    word: 'Good / Bad',
    phonetic: '[گود / بَد]',
    partOfSpeech: 'صفت',
    meaningFa: 'خوب / بد',
    exampleEn: 'Have a good day!',
    exampleFa: 'روز خوبی داشته باشی!',
    category: 'صفت‌های عمومی'
  },
  {
    id: 'w-36',
    word: 'Big / Small',
    phonetic: '[بیگ / اسمول]',
    partOfSpeech: 'صفت',
    meaningFa: 'بزرگ / کوچک',
    exampleEn: 'Our house is big.',
    exampleFa: 'خانه ما بزرگ است.',
    category: 'صفت‌های عمومی'
  },
  {
    id: 'w-37',
    word: 'Happy / Sad',
    phonetic: '[هـَپی / سَد]',
    partOfSpeech: 'صفت',
    meaningFa: 'شادمان / غمگین',
    exampleEn: 'She is happy today.',
    exampleFa: 'او امروز خوشحال است.',
    category: 'صفت‌های عمومی'
  },
  {
    id: 'w-38',
    word: 'Easy',
    phonetic: '[ایزی / ii-zi]',
    partOfSpeech: 'صفت',
    meaningFa: 'آسان / ساده',
    exampleEn: 'English is easy.',
    exampleFa: 'انگلیسی آسان است.',
    category: 'صفت‌های عمومی'
  },
  {
    id: 'w-39',
    word: 'New / Old',
    phonetic: '[نیو / اولد]',
    partOfSpeech: 'صفت',
    meaningFa: 'تازه، نو / قدیمی',
    exampleEn: 'I have a new bag.',
    exampleFa: 'من یک کیف نو دارم.',
    category: 'صفت‌های عمومی'
  },
  {
    id: 'w-40',
    word: 'Hot / Cold',
    phonetic: '[هات / کولد]',
    partOfSpeech: 'صفت',
    meaningFa: 'گرم / سرد',
    exampleEn: 'The tea is hot.',
    exampleFa: 'چای داغ است.',
    category: 'صفت‌های عمومی'
  },

  // خانه و مدرسه (Home & School)
  {
    id: 'w-41',
    word: 'House / Home',
    phonetic: '[هاوس / هوم]',
    partOfSpeech: 'اسم',
    meaningFa: 'خانه',
    exampleEn: 'I am at home.',
    exampleFa: 'من در خانه هستم.',
    category: 'خانه و مدرسه'
  },
  {
    id: 'w-42',
    word: 'School',
    phonetic: '[اسکول / skuul]',
    partOfSpeech: 'اسم',
    meaningFa: 'مدرسه',
    exampleEn: 'We go to school.',
    exampleFa: 'ما به مدرسه می‌رویم.',
    category: 'خانه و مدرسه'
  },
  {
    id: 'w-43',
    word: 'Book',
    phonetic: '[بوک / buk]',
    partOfSpeech: 'اسم',
    meaningFa: 'کتاب',
    exampleEn: 'Open your book.',
    exampleFa: 'کتابت را باز کن.',
    category: 'خانه و مدرسه'
  },
  {
    id: 'w-44',
    word: 'Pen / Pencil',
    phonetic: '[پـِن / پـِنسل]',
    partOfSpeech: 'اسم',
    meaningFa: 'خودکار / مداد',
    exampleEn: 'Give me a pen, please.',
    exampleFa: 'یک خودکار به من بده، لطفاً.',
    category: 'خانه و مدرسه'
  },
  {
    id: 'w-45',
    word: 'Car / Bus',
    phonetic: '[کار / باس]',
    partOfSpeech: 'اسم',
    meaningFa: 'ماشین / اتوبوس',
    exampleEn: 'He has a white car.',
    exampleFa: 'او یک ماشین سفید دارد.',
    category: 'خانه و مدرسه'
  }
];
