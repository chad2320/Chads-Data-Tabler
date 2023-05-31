
const filterObject = {
        body_type:{
            title:'Body Type',
            type:'dropdown',
            data:null,
            visible:false,
            columnable:true,
            isColumn:true,
            sortable:true,
            options:[
                {data:'null',display:'Any'},
                {data:'Muscular',display:'Muscular'},
                {data:'Athletic',display:'Athletic'},
                {data:'Slim',display:'Slim'},
                {data:'Thin',display:'Thin'},
                {data:'Average',display:'Average'},
                {data:'Curvy',display:'Curvy'},
                {data:'Chubby',display:'Chubby'},
                {data:'BBW',display:'BBW'},
                {data:'SSBBW',display:'SSBBW'},
            ],
            path:'body_type'
        },
        eye_color:{
            title:'Eye Color',
            type:'dropdown',
            data:null,
            visible:false,
            columnable:true,
            isColumn:false,
            sortable:true,
            options:[
                {data:'null',display:'Any'},
                {data:'Blue',display:'Blue'},
                {data:'Green',display:'Green'},
                {data:'Gray',display:'Gray'},
                {data:'Hazel',display:'Hazel'},
                {data:'Brown',display:'Brown'},
                {data:'Heterochromia',display:'Heterochromia'},
            ],
            path:'eye_color'
        },
        hair_color:{
            title:'Hair Color',
            type:'dropdown',
            data:null,
            visible:false,
            columnable:true,
            isColumn:false,
            sortable:true,
            options:[
                {data:'null',display:'Any'},
                {data:'Blonde',display:'Blonde'},
                {data:'Red',display:'Red'},
                {data:'Brown',display:'Brown'},
                {data:'Black',display:'Black'},
                {data:'Colored',display:'Colored'},
            ],
            path:'hair_color'
        },
        hair_length:{
            title:'Hair Length',
            type:'dropdown',
            data:null,
            visible:false,
            columnable:true,
            isColumn:false,
            sortable:true,
            options:[
                {data:'null',display:'Any'},
                {data:'Very Short',display:'Very Short'},
                {data:'Short',display:'Short'},
                {data:'Medium',display:'Medium'},
                {data:'Long',display:'Long'},
                {data:'Very Long',display:'Very Long'},
            ],
            path:'hair_length'
        },
        hair_shape:{
            title:'Hair Shape',
            type:'dropdown',
            data:null,
            visible:false,
            columnable:true,
            isColumn:false,
            sortable:true,
            options:[
                {data:'null',display:'Any'},
                {data:'Straight',display:'Blonde'},
                {data:'Wavy',display:'Red'},
                {data:'Curly',display:'Brown'},
                {data:'Afro',display:'Black'},
            ],
            path:'hair_shape'
        },
        'ethnicity.ethnicity1':{
            title:'Ethnicity',
            type:'dropdown',
            data:null,
            visible:false,
            columnable:true,
            isColumn:true,
            sortable:true,
            options:[
                {data:'null',display:'Any'},
                {data:'Asian',display:'Asian'},
                {data:'Black',display:'Black'},
                {data:'Caucasian',display:'Caucasian'},
                {data:'Latina',display:'Latina'},
                {data:'Mixed Race',display:'Mixed Race'},
                {data:'Native American',display:'Native American'},
                {data:'Pacific Islander',display:'Pacific Islander'},
            ],
            path:'ethnicity.ethnicity1'
        },
        'birth_date.birth_year':{
            title:'Age',
            type:'range',
            data:[18,70],
            visible:false,
            columnable:true,
            isColumn:false,
            sortable:true,
            limits:[18,70],
            step:1,
            path:'birth_date.birth_year'
        },
        'weight.weight':{
            title:'Weight',
            type:'range',
            data:[79,397],
            visible:false,
            columnable:true,
            isColumn:true,
            sortable:true,
            limits:[79,397],
            step:1,
            path:'weight.weight'
        },
        'height.pure_inches':{
            title:'Height',
            type:'range',
            data:[43,80],
            visible:false,
            columnable:true,
            isColumn:true,
            sortable:true,
            limits:[43,80],
            step:1,
            path:'height.pure_inches',
        },
        'measurements_calc.hip_height_ratio':{
            title:'HH Ratio',
            type:'range',
            data:[0.03,0.43],
            visible:false,
            columnable:true,
            isColumn:false,
            sortable:true,
            limits:[0.03,0.43],
            step:0.01,
            path:'measurements_calc.hip_height_ratio'
        },
        'measurements_calc.bust_height_ratio':{
            title:'BH Ratio',
            type:'range',
            data:[0.4,1.2],
            visible:false,
            columnable:true,
            isColumn:false,
            sortable:true,
            limits:[0.4,1.2],
            step:0.01,
            path:'measurements_calc.bust_height_ratio'
        },
        'measurements_calc.waist_height_ratio':{
            title:'WH Ratio',
            type:'range',
            data:[0.26,0.83],
            visible:false,
            columnable:true,
            isColumn:false,
            sortable:true,
            limits:[0.26,0.83],
            step:0.01,
            path:'measurements_calc.waist_height_ratio'
        },
        'measurements_calc.hip_height_ratio':{
            title:'HH Ratio',
            type:'range',
            data:[0.32,0.94],
            visible:false,
            columnable:true,
            isColumn:false,
            sortable:true,
            limits:[0.32,0.94],
            step:0.01,
            path:'measurements_calc.hip_height_ratio'
        },
        natural_boobs: {
            title: 'Natural Boobs',
            type: 'boolean',
            data: null,
            visible: false,
            columnable:true,
            isColumn:false,
            sortable:false,
            path:'natural_boobs'
        },
        pierced_nipples: {
            title: 'Pierced Nipples',
            type: 'boolean',
            data: null,
            visible: false,
            columnable:true,
            isColumn:false,
            sortable:false,
            path:'pierced_nipples'
        },
        underarm_hair: {
            title: 'Underarm Hair',
            type: 'boolean',
            data: null,
            visible: false,
            columnable:true,
            isColumn:false,
            sortable:false,
            path: 'underarm_hair'
        },
        topless: {
            title: 'Topless',
            type: 'boolean',
            data: null,
            visible: false,
            columnable:true,
            isColumn:false,
            sortable:false,
            path:'topless'
        },
        bush:{
            title: 'Bush',
            type: 'boolean',
            data: null,
            visible: false,
            columnable:true,
            isColumn:false,
            sortable:false,
            path:'bush',
        },
        frontal:{
            title: 'Frontal',
            type: 'boolean',
            data: null,
            visible: false,
            columnable:true,
            isColumn:false,
            sortable:false,
            path:'frontal',
        },
        pink:{
            title: 'Pink',
            type: 'boolean',
            data: null,
            visible: false,
            columnable:true,
            isColumn:false,
            sortable:false,
            path:'pink',
        },
        solo:{
            title: 'Solo',
            type: 'boolean',
            data: null,
            visible: false,
            columnable:true,
            isColumn:false,
            sortable:false,
            path:'solo',
        },
        solo_dildo:{
            title: 'Solo Dildo',
            type: 'boolean',
            data: null,
            visible: false,
            columnable:true,
            isColumn:false,
            sortable:false,
            path:'solo_dildo',
        },
        solo_fisting:{
            title: 'Solo Fisting',
            type: 'boolean',
            data: null,
            visible: false,
            columnable:true,
            isColumn:false,
            sortable:false,
            path:'solo_fisting',
        },
        lesbian:{
            title: 'Lesbian',
            type: 'boolean',
            data: null,
            visible: false,
            columnable:true,
            isColumn:false,
            sortable:false,
            path:'lesbian',
        },
        blowjob:{
            title: 'Blowjob',
            type: 'boolean',
            data: null,
            visible: false,
            columnable:true,
            isColumn:false,
            sortable:false,
            path:'blowjob',
        },
        hardcore:{
            title: 'Hardcore',
            type: 'boolean',
            data: null,
            visible: false,
            columnable:true,
            isColumn:false,
            sortable:false,
            path:'hardcore',
        },
        anal:{
            title: 'Anal',
            type: 'boolean',
            data: null,
            visible: false,
            columnable:true,
            isColumn:false,
            sortable:false,
            path:'anal',
        },
        dp:{
            title: 'Double Penetration',
            type: 'boolean',
            data: null,
            visible: false,
            columnable:true,
            isColumn:false,
            sortable:false,
            path:'dp',
        },
        fisting: {
            title: 'Fisting',
            type: 'boolean',
            data: null,
            visible: false,
            columnable:true,
            isColumn:false,
            sortable:false,
            path:'fisting',
        },
        creampie:{
            title: 'Creampie',
            type: 'boolean',
            data: null,
            visible: false,
            columnable:true,
            isColumn:false,
            sortable:false,
            path:'creampie',
        },
        bondage:{
            title: 'Bondage',
            type: 'boolean',
            data: null,
            visible: false,
            columnable:true,
            isColumn:false,
            sortable:false,
            path:'bondage',
        },
        bukkake:{
            title: 'Water Sports',
            type: 'boolean',
            data: null,
            visible: false,
            columnable:true,
            isColumn:false,
            sortable:false,
            path:'bukkake',
        },
        watersports: {
            title: 'Water Sports',
            type: 'boolean',
            data: null,
            visible: false,
            columnable:true,
            isColumn:false,
            sortable:false,
            path:'watersports',
        },
        fisting_men: {
            title: 'Fisting Men',
            type: 'boolean',
            data: null,
            visible: false,
            columnable:true,
            isColumn:false,
            sortable:false,
            path:'fisting_men',
        }
    }


module.exports = filterObject