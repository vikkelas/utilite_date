#!/usr/bin/env node
const moment = require('moment');
// moment.locale('ru');

const yargs = require('yargs/yargs');
const { hideBin} = require('yargs/helpers')

const argv = yargs(hideBin(process.argv))
    .options('year',{
        alias: 'y',
        type: "string",
        description: "вывести год"
    })
    .options('month',{
        alias: 'm',
        type: 'string',
        description: "вывести месяц"
    })
    .options('date',{
        alias: 'd',
        type: "string",
        description: "вывести день"
    })
    .options('add',{
        type: "boolean",
        description: "добавить к дате"
    })
    .options('sub',{
        type: "boolean",
        description: "добавить к дате"
    })
    .argv

if(typeof argv.year==='string'){
    if(argv._.includes('add')&&argv.year!==''){
        console.log(moment().add(Number(argv.year),'year').format())
    }else if(argv._.includes('sub')&&argv.year!==''){
        console.log(moment().subtract(Number(argv.year),'year').format())
    }else{
        console.log(moment().year());
    }
}else if(typeof argv.month==='string'){
    if(argv._.includes('add')&&argv.month!==''){
        console.log(moment().add(Number(argv.month),'months').format())
    }else if(argv._.includes('sub')&&argv.month!==''){
        console.log(moment().subtract(Number(argv.month),'months').format())
    }else{
        console.log(moment().format("MMMM").toUpperCase())
    }
}else if(typeof argv.date==='string'){
    if(argv._.includes('add')&&argv.month!==''){
        console.log(moment().add(Number(argv.month),'months').format())
    }else if(argv._.includes('sub')&&argv.month!==''){
        console.log(moment().subtract(Number(argv.month),'months').format())
    }else {
        console.log(moment().date())
    }
}else{
    console.log(moment().format())
}


