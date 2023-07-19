//before
//var _ = require('lodash')

//after

import _ from 'lodash'

//_. //Not helping!

// we can install the typing we need

const data = [
    {
        username: 'agus',
        role: 'admin'
    },
    {
        username: 'valen',
        role: 'ventas'
    },
    {
        username: 'valeria',
        role: 'ventas'
    },
    {
        username: 'nico',
        role: 'customer'
    }
]

//tenemos  tipado!

const rta = _.groupBy(data, (item)=> item.role);

console.log(rta);
