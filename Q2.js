const pageContent = document.getElementsByClassName('page_content')
const parent = pageContent[0].parentNode

parent.insertBefore(pageContent[2], pageContent[3])

const dl = document.getElementsByTagName('dl')[0]
const dt = dl.getElementsByTagName('dt')
const dd = dl.getElementsByTagName('dd')

const fragment = document.createDocumentFragment()

fragment.appendChild(dt[2])
fragment.appendChild(dd[2])

dl.insertBefore(fragment, dt[1])
