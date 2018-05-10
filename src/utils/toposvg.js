const SWITCH = `<path d="M984.064 637.44c0-2.048 0-4.096-.496-5.632l-81.424-498.176c-3.072-18.944-11.76-37.376-24.064-49.664a73.328 73.328 0 0 0-53.248-22.016H199.68a79.52 79.52 0 0 0-55.296 22.528 78.4 78.4 0 0 0-22.016 52.736L40.96 628.736c-.512 3.584-1.024 6.144-1.024 9.216v209.92c2.56 37.872 26.624 70.656 66.048 80.896l.512.512h2.048l1.024.496 1.024.528h1.024l.512.496h1.536l5.632.512 2.56.512h1.024l1.024.496h773.12c48.128 0 87.024-39.408 87.024-87.552V637.44h.016zm-806.4-512c.512-2.048.512-4.096.512-6.144 0-1.536.512-2.56 1.536-3.584s2.56-2.048 4.096-2.048H844.8c.512 0 1.008 0 1.552 1.024 2.56 2.56 4.096 6.144 4.592 10.752l67.6 447.744c-2.56-.512-4.608-.512-6.656-.512h-789.52c-2.048 0-4.608 0-6.656.512l61.952-447.744zm754.672 728.576a14.864 14.864 0 0 1-14.848 14.864H105.984c-7.168-.528-13.312-5.12-14.336-12.816v-.496h-.512v-215.04a15.2 15.2 0 0 1 15.36-14.336h810.496a12.96 12.96 0 0 1 10.24 4.608c2.544 2.56 4.608 6.16 4.608 9.728v213.504h.496z"/>
<path d="M783.232 760.832h95.104v48.64h-95.104zm0-75.264h95.104v48.656h-95.104zm-159.104 75.264h95.104v48.64h-95.104zm0-75.264h95.104v48.656h-95.104zm-165.696 75.264h95.12v48.64h-95.12zm0-75.264h95.12v48.656h-95.12zm-159.104 75.264h95.104v48.64h-95.104zm0-75.264h95.104v48.656h-95.104zm131.264-195.584c8.192 0 16.384-14.848 21.504-21.504l43.52-65.024-43.52-43.52-43.008 65.024H322.56c-15.36 0-21.504 14.848-21.504 30.72s6.144 34.304 21.504 34.304h108.032z"/>
<path d="M712.192 424.96H604.16L452.608 208.384c-5.12-.512-13.312 0-21.504 0h-87.04v-43.52l-86.528 87.04 86.528 65.024v-43.52h84.992L560.64 468.48c5.104 6.656 13.312 21.504 21.504 21.504h123.392c15.376 0 28.16-13.312 28.16-29.696.528-16.384-5.632-35.328-21.504-35.328z"/>
<path d="M690.688 208.384H604.16c-8.704 0-28.16 9.216-33.776 15.872l-53.264 49.152 43.52 43.52 43.52-43.52h86.528v43.52l86.528-65.024-86.528-86.528v43.008zM166 741.888a32 32 0 1 0 64 0 32 32 0 1 0-64 0z"/>
`
const ROUTER = `<path d="M247.467 76.8h25.6l51.2 307.2h-25.6l-51.2-307.2zm514.986 0h25.6L742.4 385.707h-25.6L762.453 76.8z" />
<path d="M275.2 409.6h49.067L256.939 51.2H230.4zm-44.8-384h26.539a25.6 25.6 0 0 1 25.173 20.907l67.243 358.4a25.6 25.6 0 0 1-25.088 30.293H275.2a25.6 25.6 0 0 1-25.6-22.443l-44.8-358.4A25.6 25.6 0 0 1 227.243 25.6zm554.667 25.6L740.18 409.6H691.2l67.243-358.4zm0-25.6h-26.624a25.6 25.6 0 0 0-25.174 20.907l-67.157 358.4A25.6 25.6 0 0 0 691.2 435.2h48.981a25.6 25.6 0 0 0 25.6-22.443l44.886-358.4A25.6 25.6 0 0 0 788.139 25.6z" />
<path d="M59.733 665.6h930.134a8.533 8.533 0 0 1 8.533 8.533v162.134a8.533 8.533 0 0 1-8.533 8.533H59.733a8.533 8.533 0 0 1-8.533-8.533V674.133a8.533 8.533 0 0 1 8.533-8.533z" />
<path d="M460.8 768h25.6v-25.6h-25.6zm-25.6-51.2H512v76.8h-76.8zM716.8 768h25.6v-25.6h-25.6zm-25.6-51.2H768v76.8h-76.8zM588.8 768h25.6v-25.6h-25.6zm-25.6-51.2H640v76.8h-76.8zM844.8 768h25.6v-25.6h-25.6zm-25.6-51.2H896v76.8h-76.8z" />
<path d="M153.6 844.8h68.693l-25.6 76.8H179.2l-25.6-76.8z" />
<path d="M203.435 844.8h8.533l12.63 17.493-2.731 8.107H194.9zm-74.07 0h-8.533l-12.63 17.493 2.731 8.107H137.9zm17.067 51.2h39.936l8.533-25.6H137.9zM102.4 844.8h128l-25.6 76.8H128z" />
<path d="M844.8 844.8h68.693l-25.6 76.8H870.4l-25.6-76.8z" />
<path d="M913.067 870.4l2.73-8.107-12.629-17.493h-8.533l-8.534 25.6zm-92.502-25.6h-8.533l-12.63 17.493 2.731 8.107H829.1zm17.067 51.2h39.936l8.533-25.6H829.1zM793.6 844.8h128L896 921.6h-76.8zM204.8 768h25.6v25.6h-25.6zm76.8 0h25.6v25.6h-25.6zM128 768h25.6v25.6H128zm230.4 0H384v25.6h-25.6zm-153.6-51.2h25.6v25.6h-25.6zm76.8 0h25.6v25.6h-25.6zm-153.6 0h25.6v25.6H128zm230.4 0H384v25.6h-25.6z" />
<path d="M69.12 640l176.128-249.941A76.8 76.8 0 0 1 307.2 358.4h441.6a76.8 76.8 0 0 1 61.867 31.659L986.027 640" />
<path d="M742.4 358.4l187.05 256.597h57.942L805.291 358.4H742.4z" />
<path d="M51.2 640a25.6 25.6 0 0 0-25.6 25.6v153.6a25.6 25.6 0 0 0 25.6 25.6h921.6a25.6 25.6 0 0 0 25.6-25.6V665.6a25.6 25.6 0 0 0-25.6-25.6zm0-25.6h921.6a51.2 51.2 0 0 1 51.2 51.2v153.6a51.2 51.2 0 0 1-51.2 51.2H51.2A51.2 51.2 0 0 1 0 819.2V665.6a51.2 51.2 0 0 1 51.2-51.2z" />
<path d="M167.936 451.84l18.261-25.173 15.787-21.675A51.2 51.2 0 0 1 243.371 384H779.52a51.2 51.2 0 0 1 41.387 21.077L985.429 640h31.232L841.643 390.059A76.8 76.8 0 0 0 779.52 358.4H243.37a76.8 76.8 0 0 0-62.122 31.659l-34.133 47.104L5.12 640h31.232z" />
`

export default {
  SWITCH,
  ROUTER
}