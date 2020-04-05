export default () => {}

// Response from:
// https://spreadsheets.google.com/feeds/list/1iCpYHV3MeGKyOlSjih4wFuhysAbEfgENLPpkJCO5jIs/onum09q/public/values?alt=json
// https://spreadsheets.google.com/feeds/worksheets/1iCpYHV3MeGKyOlSjih4wFuhysAbEfgENLPpkJCO5jIs/public/basic?alt=json

// export const rawResult: RawResult = {
//   version: '1.0',
//   encoding: 'UTF-8',
//   feed: {
//     xmlns: 'http://www.w3.org/2005/Atom',
//     xmlns$openSearch: 'http://a9.com/-/spec/opensearchrss/1.0/',
//     xmlns$gsx: 'http://schemas.google.com/spreadsheets/2006/extended',
//     id: {
//       $t:
//         'https://spreadsheets.google.com/feeds/list/1iCpYHV3MeGKyOlSjih4wFuhysAbEfgENLPpkJCO5jIs/onum09q/public/values',
//     },
//     updated: { $t: '2020-04-04T22:59:59.486Z' },
//     category: [
//       {
//         scheme: 'http://schemas.google.com/spreadsheets/2006',
//         term: 'http://schemas.google.com/spreadsheets/2006#list',
//       },
//     ],
//     title: { type: 'text', $t: 'jobs' },
//     link: [
//       {
//         rel: 'alternate',
//         type: 'application/atom+xml',
//         href:
//           'https://docs.google.com/spreadsheets/u/0/d/1iCpYHV3MeGKyOlSjih4wFuhysAbEfgENLPpkJCO5jIs/pubhtml',
//       },
//       {
//         rel: 'http://schemas.google.com/g/2005#feed',
//         type: 'application/atom+xml',
//         href:
//           'https://spreadsheets.google.com/feeds/list/1iCpYHV3MeGKyOlSjih4wFuhysAbEfgENLPpkJCO5jIs/onum09q/public/values',
//       },
//       {
//         rel: 'http://schemas.google.com/g/2005#post',
//         type: 'application/atom+xml',
//         href:
//           'https://spreadsheets.google.com/feeds/list/1iCpYHV3MeGKyOlSjih4wFuhysAbEfgENLPpkJCO5jIs/onum09q/public/values',
//       },
//       {
//         rel: 'self',
//         type: 'application/atom+xml',
//         href:
//           'https://spreadsheets.google.com/feeds/list/1iCpYHV3MeGKyOlSjih4wFuhysAbEfgENLPpkJCO5jIs/onum09q/public/values?alt\u003djson',
//       },
//     ],
//     author: [{ name: { $t: 'heather' }, email: { $t: 'heather@stokedenton.com' } }],
//     openSearch$totalResults: { $t: '4' },
//     openSearch$startIndex: { $t: '1' },
//     entry: [
//       {
//         gsx$timestamp: { $t: '4/3/2020 20:30:58' },
//         gsx$companyname: { $t: 'Mr. Chopsticks' },
//         gsx$address: { $t: '1633 Scripture St, Denton, TX 76201' },
//         gsx$websiteurl: { $t: 'https://www.mrchopsticks.com/' },
//         gsx$dentonchamberofcommercemember: { $t: '' },
//         gsx$primarycontact: { $t: 'John Chopsticks' },
//         gsx$emailaddress: { $t: 'john@mrchopsticks.com' },
//         gsx$phonenumber: { $t: '(940) 382-5437' },
//         gsx$jobtitle: { $t: 'To-go attendant' },
//         gsx$jobdescription: {
//           $t: 'Take orders over the phone or....',
//         },
//         gsx$typeofwork: { $t: 'Part Time' },
//         gsx$jobcategory: { $t: 'Food Service / Restaurant' },
//         gsx$jobrate: { $t: '$12/hr' },
//         gsx$jobpostlink: { $t: '' },
//         id: {
//           $t:
//             'https://spreadsheets.google.com/feeds/list/1iCpYHV3MeGKyOlSjih4wFuhysAbEfgENLPpkJCO5jIs/onum09q/public/values/cokwr',
//         },
//         updated: { $t: '2020-04-04T22:59:59.486Z' },
//         category: [
//           {
//             scheme: 'http://schemas.google.com/spreadsheets/2006',
//             term: 'http://schemas.google.com/spreadsheets/2006#list',
//           },
//         ],
//         title: { type: 'text', $t: '4/3/2020 20:30:58' },
//         content: {
//           type: 'text',
//           $t:
//             'companyname: Mr. Chopsticks, address: 1633 Scripture St, Denton, TX 76201, websiteurl: https://www.mrchopsticks.com/, primarycontact: John Chopsticks, emailaddress: john@mrchopsticks.com, phonenumber: (940) 382-5437, jobtitle: To-go attendant, jobdescription: Take orders over the phone or online, work takeout window to serve customers their orders, work register., typeofwork: Part Time, jobcategory: Food Service / Restaurant, jobrate: $12/hr',
//         },
//         link: [
//           {
//             rel: 'self',
//             type: 'application/atom+xml',
//             href:
//               'https://spreadsheets.google.com/feeds/list/1iCpYHV3MeGKyOlSjih4wFuhysAbEfgENLPpkJCO5jIs/onum09q/public/values/cokwr',
//           },
//         ],
//       },
//     ],
//   },
// }

// // const rawEntry = rawResult.feed.entry[0]

// // const allowedKeys: Array<string> = Object.keys(rawEntry).filter(e => GST_PREFIX.test(e)) //?

// // const strippedKeys = allowedKeys.map(k => k.replace(GST_PREFIX, ''))

// // const process = Object.keys(rawEntry)
// //   .filter(key => allowedKeys.includes(key))
// //   .map((key, i) => {
// //     return [strippedKeys[i], rawEntry[key].$t]
// //   }) //?

// type Entries = Array<{ [k: string]: { $t: string } }>

// type SheetV1 = {
//   data: {
//     feed: {
//       entry: RawResult['feed']['entry']
//     }
//   }
// }

// const getEntry = (sheet: SheetV1) => sheet.data.feed.entry

// const allowedKeys = (rawEntry: Entries) => Object.keys(rawEntry).filter(e => GST_PREFIX.test(e))

// const stripKeys = (keys: Array<string>) => keys.map(k => k.replace(GST_PREFIX, ''))

// const process = (entries: Entries, allowed: Array<string>, strippedKeys: Array<string>) =>
//   Object.keys(entries)
//     .filter(key => allowed.includes(key))
//     .map((key, i) => {
//       return [strippedKeys[i], entries[key].$t]
//     })

// const main = () => {
//   const e = getEntry({ data: { feed: { entry: rawResult.feed.entry } } }) //?
//   const a = allowedKeys(e[0]) //?
//   const s = stripKeys(a) //?
//   const p = process(e, a, s) //?
// }

// main()

// type RawResult = {
//   version: string
//   encoding: string
//   feed: {
//     xmlns: string
//     xmlns$openSearch: string
//     xmlns$gsx: string
//     id: {
//       $t: string
//     }
//     updated: {
//       $t: string
//     }
//     category: {
//       scheme: string
//       term: string
//     }[]
//     title: {
//       type: string
//       $t: string
//     }
//     link: {
//       rel: string
//       type: string
//       href: string
//     }[]
//     author: {
//       name: {
//         $t: string
//       }
//       email: {
//         $t: string
//       }
//     }[]
//     openSearch$totalResults: {
//       $t: string
//     }
//     openSearch$startIndex: {
//       $t: string
//     }
//     entry: Array<{
//       [k: string]: { $t: string }
//        | { scheme: string; term: string }[] | { type: string; $t: string  }
//       // gsx$timestamp: { $t: string }
//       // gsx$companyname: { $t: string }
//       // gsx$address: { $t: string }
//       // gsx$websiteurl: { $t: string }
//       // gsx$dentonchamberofcommercemember: { $t: string }
//       // gsx$primarycontact: { $t: string }
//       // gsx$emailaddress: { $t: string }
//       // gsx$phonenumber: { $t: string }
//       // gsx$jobtitle: { $t: string }
//       // gsx$jobdescription: { $t: string }
//       // gsx$typeofwork: { $t: string }
//       // gsx$jobcategory: { $t: string }
//       // gsx$jobrate: { $t: string }
//       // gsx$jobpostlink: { $t: string }
//       // id: {
//       //   $t: string
//       // }
//       // updated: { $t: '2020-04-04T22:59:59.486Z' }
//       // category: [
//       //   {
//       //     scheme: 'http://schemas.google.com/spreadsheets/2006'
//       //     term: 'http://schemas.google.com/spreadsheets/2006#list'
//       //   }
//       // ]
//       // title: { type: 'text'; $t: '4/3/2020 20:30:58' }
//       // content: {
//       //   type: 'text'
//       //   $t: string
//       // }
//       // link: [
//       //   {
//       //     rel: 'self'
//       //     type: 'application/atom+xml'
//       //     href: string // 'https://spreadsheets.google.com/feeds/list/1iCpYHV3MeGKyOlSjih4wFuhysAbEfgENLPpkJCO5jIs/onum09q/public/values/cokwr'
//       //   }
//       // ]
//     }>
//   }
// }

// rawResult.feed

//////////////////////////////////////////////////

// type Jobs = Array<Array<[string, string]>>

// const a: A = [
//   [
//     ['timestamp', '4/3/2020 20:30:58'],
//     ['companyname', 'Mr. Chopsticks'],
//     ['address', '1633 Scripture St, Denton, TX 76201'],
//     ['websiteurl', 'https://www.mrchopsticks.com/'],
//     ['dentonchamberofcommercemember', ''],
//     ['primarycontact', 'John Chopsticks'],
//     ['emailaddress', 'john@mrchopsticks.com'],
//     ['phonenumber', '(940) 382-5437'],
//     ['jobtitle', 'To-go attendant'],
//     [
//       'jobdescription',
//       'Take orders over the phone or online, work takeout window to serve customers their orders, work register.',
//     ],
//     ['typeofwork', 'Part Time'],
//     ['jobcategory', 'Food Service / Restaurant'],
//     ['jobrate', '$12/hr'],
//     ['jobpostlink', ''],
//   ],
//   [
//     ['timestamp', '4/3/2020 20:33:51'],
//     ['companyname', 'Fastenal'],
//     ['address', '1026 Shady Oaks Dr, Denton, TX 76201'],
//     ['websiteurl', ''],
//     ['dentonchamberofcommercemember', 'Yes'],
//     ['primarycontact', 'Eric Smith'],
//     ['emailaddress', 'eric@fastenal.com'],
//     ['phonenumber', ''],
//     ['jobtitle', 'Warehouse worker'],
//     [
//       'jobdescription',
//       'Restocking inventory from incoming shipments, preparing orders for customers, general warehouse duties. Need to be able to move up to 45 lbs.',
//     ],
//     ['typeofwork', 'Part Time'],
//     ['jobcategory', 'Physical Labor (warehouse / moving / delivery)'],
//     ['jobrate', '$15 an hour'],
//     ['jobpostlink', ''],
//   ],
//   [
//     ['timestamp', '4/3/2020 20:37:21'],
//     ['companyname', 'Dan Minshew'],
//     ['address', '1007 Fulton St, Denton, TX 76201'],
//     ['websiteurl', ''],
//     ['dentonchamberofcommercemember', ''],
//     ['primarycontact', 'Dan Minshew'],
//     ['emailaddress', 'dantheman@gmail.com'],
//     ['phonenumber', ''],
//     ['jobtitle', 'Lawncare'],
//     ['jobdescription', 'Need someone to come mow my lawn and do some general yard work.'],
//     ['typeofwork', 'One Time (gig)'],
//     ['jobcategory', 'Remodeling (carpentry / painting / home repair)'],
//     ['jobrate', '$100'],
//     ['jobpostlink', ''],
//   ],
//   [
//     ['timestamp', '4/4/2020 17:59:59'],
//     ['companyname', 'Test'],
//     ['address', '123 Test st'],
//     ['websiteurl', 'http://www.google.com'],
//     ['dentonchamberofcommercemember', 'Yes'],
//     ['primarycontact', 'what is this supposed to be?'],
//     ['emailaddress', 'dasdasd@dasd.com'],
//     ['phonenumber', '1231231234'],
//     ['jobtitle', 'Head of account'],
//     ['jobdescription', 'Account fo rthings'],
//     ['typeofwork', 'One Time (gig)'],
//     ['jobcategory', 'Software Engineering / Web Development'],
//     ['jobrate', '100/hr'],
//     ['jobpostlink', ''],
//   ],
// ]
