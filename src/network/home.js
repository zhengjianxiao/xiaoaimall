import {inter1} from './index'

export function gethomemultildata () {
  return inter1({
    url : 'home/multidata'
  })
}

export function gethomegoods (type , page) {
  return inter1({
    url : '/home/data',
    params : {
      type, 
      page
    }
  })
}