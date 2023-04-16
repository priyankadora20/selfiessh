import React from 'react'
import "./footer.css"

const Footer = () => {
    return (
      <>
    <div id='footercont'>

          <div className='footerbox'>
              <h3>STORE INFO</h3>
              <p>123 London street, United Kingdom </p>
              <p>(+012)3456 789</p>
              <p>hello@domain.com</p>

           <div id="socials">
                        <div>
                        <h3>SOCIALS:</h3>
                        </div>

                        <div id="social-icon">

                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/900px-Instagram_logo_2022.svg.png?20220518162235" alt="instagram" />
                        <img src="https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/twitter_circle-512.png" alt="" />
                        <img src="https://spng.pngfind.com/pngs/s/181-1815591_facebook-circle-icon-facebook-icon-png-brown-transparent.png" alt="" />
                        <img src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png" alt="" />
                        <img src="https://cdn-icons-png.flaticon.com/512/145/145808.png" alt="" />
             
                        </div>           
                        </div>

          </div>
          
          <div className='footerbox'>
              <h3 >COMPANY</h3>

              
                  <li>Careers</li>
                  <li>Business with us</li>
                  <li>Contact us</li>
                  <li>About us</li>
                  <li>FAQs</li>
              

          </div>

          <div className='footerbox'>
              <h3 >Account</h3>
              
                  <li>My account</li>
                  <li>My cart</li>
                  <li>Track my order</li>
                  <li>Checkout</li>
                  <li>Terms of use</li>
              
          </div>

          <div className='footerbox' id="contact">
              <h3>GET IN TOUCH</h3>
              <p>Sign up to receive amazing offers & deals</p>
             
                <div id="cont"> 
                        
              
                
                <input id="inpu" type="email" placeholder='Enter Your Email' /> 
                <button id="btnfoot" >SUBSCRIBE</button>   
                
               
                </div>     
             
          </div>



    </div>
            <div id='footerfinal'>
                <p>Copyright @ 2023 Selfieesh. All Right Reserved.</p>
                <div id='footercard'>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAYsAAACACAMAAADNjrXOAAAA8FBMVEX///8AV5/6phoAU50ARZcAVZ4ATJoAUp1WgbQATpsAUJwASZkAR5gAS5r6pA4ARJf7ul6uv9caYaQ9cqzt8vf6oADP2ujz9/rn7fTh6PH/qwDY4eyFocZ3l8DF0uOkuNNhiLgAUKW5yN1xk76QqcucstBLebCyw9o5b6suaaiBnsT/+PBmi7oVXqP93bf8xHz8z5b+7936rjnKk0lCZJD7vWj+6tL7s0n92az805/6qind1MrhmCH8xoEAP56RfW9zc34kXZjinTStiF5scYFVaYpIZY6XgGu9jlP94sL7u2NibYXVl0CceFb///cPUZCbZ+bsAAAR2ElEQVR4nO1dZ3dbxxEl/BpeAWB2QiRAgARAAiIluUi2ZEcuiR0ncZL//2+Czld2753ZpY99jnM/v7pl6p3Zg4M/Jc4vb64ng9FsfvTYaj0+Ht3PRoPJ9fDy/Pf+sD8X+oeL4zTM4zRLgiCKWitEURAkWdrJw2C2uOv/Xp/26lM93r5+8+ozx/dN2gTHJ+XLH/DFM91C7l+38yLOgs0MGBFkcZG3p5eOv7fEyXC6uB1ZvxjM9NvTrgtOT7uv37l8ab5cjQjprHJ5AS9PQsWbL68eizgB07BHFKRFdnvj8nsnk6Nevtxy1s/OD+03f7Uc1U+c0D39Sr85bjpkHPJh+fKLEF4cHEvfezFpFZlkHvbzkXTC0ZA/uILzQS8lL0luwf0vX73uLveG22y8Un7sQTtgY1C5fIinLhnI3nrWpmNkfHynp5KBZ2lGnxkdkYe8e/O52/Y4/VrzrcstjNd5q5VOKtdfx/Dq+Fry0uG8SBQzUB64XPNzNz3JfAum97P3n7vMxqlOTE3x2C6/tKK5DwZ4EDsCITKc52wvWhGJZeASZz3RM/MzycM+e/NBPR3dD4qvPTg4YtK0Xb3+GA9jeMFeeNEOnWei1cqEMnCF81z2zHQqfOC711pZpVIZl0xEFbWFXsCrow574TR0lE4byGTgBm3hm5IH+TO/1smq7ufyRx8siG6LHqvXn+C5COb4dRdzZrURSGTgFkO2zPb/2FIM2MG7t5rZOH0pfzIzM+r794yYUcg+XOpSH/G0RngCX1DGvdhOUzx0hZdvTk/FcyE3pYZMpNZtDGJGYdE7CB3M2AqiWPxrVPo+QbHZtnjfFc5G97X4mSMiUhuilMg0+FczT/m0RHAv/rVbuV7KJvxxdXwtmw25wjhnRl9RN/dmWMgUILYzT8WDYwWRgeVfk2+LVtDmz2vivUhSnUofd02Gp+mSEnnfs79r7mU/bSE2Pw+mipmPUulTq3gj0OJid++eDG1atyDJagPhhGeZCoVkb2lUE/eKzHj5ms6GVHn3qXNRjw6cYV1vt9RnPC4kQSEdNGqUVNBxigCv8M23L4jC+IvsQRMyQE3pfIjNKKsSXPir7TXEEXmi12pIr6TPbeDjdziK2/1K9hwmNopG/uYKS2Hb+rqRBYYomCu5x4XuhcGMP9KC2fjxC7g1ZMqb7WPDn5MAe25Ovp3nvn7FFmIzioUTalC4LXVM02j8/Sdga8iU9wP54LiZ8CL/VJhfNHsWvd1SmFEd5eQjWxzjcrmgsxbYGqLw4DkOLZlSBcQfqQevtrghL5JDakYRtdZEfCd7sAGraV9uDavWEClv9sGG8PQlHtV6fH0LRCzQQbp859qwV7aQPdiATegi/eFHy9YQKe9jMkS95o/fkGiU0Yyi2aoK1pycyPJpFhlYx5nC595AbBQ0sY3QReO/WiZDoLyZqWEK/RAj2LzTY9m2iJK0U4SdLNiwPsIij+vUBJqZ3oJF2QwAAQOCvZM2/tsLo5wSKG/mXHQMA0t+0mhGkcjuBlGWp6PpsP/kW55cDq8Xx3mRljg7wqQPjbIZ0DTfxdh/X/rDt6bJEChvEiQwxmhIQtaYxH/k2yKK44VlLPqHD2mxWzXCeOrEIQipyRfW8BQQTpJfDXKKK+8zYtxkJleU3JM4vGd1W45N1bOrKF//rzBU4ZKvkgeAGygpUaPS4Mqbhfd7hshPnyRYTd7rgHpdsYD2eXZbLNWOxZWsj41LvEWqigyosJrG3zUngyrvAosO47iSvzQahnQqOjJmx/n1Yy5TsISpYkHoTmivSO6lBtcq7zuyeIzigOQEUgMxlXgky5vkJIwbETeq7xb7kpGkjKgGXNKf6pPBlDeLY5pEPwuamH6HpXR0HAwJuFA0Qp6laqBGa82+rFlT3TfwdsbcNFsscyzXTHQKZuq7Zw5scIxDJiPnN9YTbPXJIMqbLdeekaVCknqmvURGwCNAaoHInTHC/Z31CEb2Q3UysPImRr85GX9BOIMGcc4YAG5Zf48/s8O8/ERouM21nQEJa0yj5sZ4KKH7m6iulyRFIi0REAO5MymkWuhJUk8vbfxl9nNZgZ/+A9xM9JtFoRLBZnJdyfSpqKwiAA5tlEOJ6UKS2qGpoyrWFFTeJFxnsSmIe2haWHdEelsyHs44AQZt9nDwAP7AR1wa0p3j758mo/up/VbmmVqKQwiDx0RsoZrUw6w3AQU8l2sF7ewoc3+t6TfHfy9Nhv1WQoa3mXdkN5k4GpQxJq/vEwHUna1MNkgpciVJHViCQ+Nf9pNhV94sptwgbm5AfBIj1ZWz9zoeYroBtOFXpgU063xcHePiHv+4s6bsypsIDpsMZ1WTpkinwNrvgZJeLZAUXa8wFPT3IEmZFVHU4sqbZINjSzTAhe4vIQH03KMPNSCa/2aFIfPDgyRlsVGSnWVrVd6sMMFW1kkMYaNPwmzazZ0j90GoAI30xmQ9RDJTmE03wVL1vo+g25T3FR5Ta1bFhe5PMh5bpI/PYk1BbbBhUkAn150kZXX3x190ofImcczQNi6kNt5ceC2jGEc997TaExDhZGdZoOnyIEnZiIpRBJU3YW5a2SmM7m++T5rYSRvlBXqgUNQuKIC0u6ZeuQ6bBZf96wVQ3iSKbU3Cu9H9GdvkCZ0j94DQGkMkf3ZpO0S09SBJ2f2ETQa8+0/jTURzWxUYMYnMPDWe13tCFB579CXCvOs9oxEGZTyUt33DZR/WUsp0DykLswdOicq3eUqa+qAgbLvPBuTe7b8OGhMeJCm7AEjWUsqovFlQyfo5jO5vMUJ0ZKWg13Y1ZlBpSImmjdJ+HiQpIMLHv3TNyptk5kHNLmPfWm7T1JOukLjOBoqWlbQyYhF7kKQAdyxqrebiffMOoktNxM0NmBllDX4vtCy+pDdyiNIdIq+yFGFDotaDJIXcr3Tp8XXfNu8gxE17axVG9x/ZbjwnTCzTw3oDNVsJBXbKCwVS5XWNwqoAYdDxtyblDe0+WIZAskIgKzZ14PFlhTJIBQM75VAZVN4dD/8fpJNX6rupvFFiq2UsudjBie6/AaHyGBF1jlRGDfyxCh8VlY95kKSgwhr/2j1t9OUkhFiQ2CH5J2QOKotKt4h6mrZdaFtUfwuF1TxIUtCJTn5+0VDexF9D2RTCdYF01Ds3WmX6KN4aMGdVrQGFGzyyvUAAFAMef3FaV96kLAxlfNlwws90LLWPxKkNW1HZGlV3Gib7lZ2kKkDdYpMvX3yQX92ylFxsQYhOjEQxcmTzCVMbMN5Zi5TBQfAgSeEQw3JjVJU38YFNJRc7MLo/y0+2HRsWZXOJmQlTK/UkF2pQ7EOSgi1Kk59qyhvLfJhjZGYUTVq3HXdGEnHHD/eYqdN8UTDHi1MK1+v4x4ryJuVaZuLmFsQYFtCcHhwr7oOYxkRgx4kGpQAtK9dOUmtAfk3yfUV5E94ftCFI1aSkqmciaqJs+K6U7QzYcSKsTyXMwXuQpIgjNa50u8OVCZYExO5eMlyST73RR0PWCCI809BSbyaIIM/Lqx4EdhFK//2f0lBg9Qs57y5Vk01cHLkpjQQn3OCeNcTBkaKnRggC3HHRf0vKG/M4LL08JG9RtNNYuMmpGAWzsRo0hPtQllnVL70B+CX5N/vrEAW7RTS3C93fjLOW09YIgeiACXzTEoM/ozpHoA7ItCglUfBwEvI9o/sr4ptXPZea39SqMvAaM8l/uMl98qx4jEvZEWwJkQgloX2qQgf9mUP75tQqpaADa6wHhLYn95QAsLjcG5skF0SMUlKpp7TKh4/6+JQ1nA9XiZnyhHxeH5IUMVX3Thhmw2a4VuvZDkna4TDQqg1bOBtbh2aJA8uTPEhSJLOw16qYgWkpudjhmQ5JKmOaKiNUlmgZVJcWLQgZ8+6dpNiTd9QGvHxY0p3R/Z24LMvZ0OgNc3kE5rVYtCCkQHpVrcHI2G6UcVqODeYzHJJkwjQV9lxbw9gWA4tei/8Ks4A+JCnC7dhsOVIW1uiVXQPJQYk7WzcwKeTdO4wLFhoV1nAAsim9SFLY+N/8ARYy9PVEmHjwUM8HYnfDlFvAjFQrIQKNmF+ZM6TLbLYc9g/sxM0NWNWkl+nRvxd2UzFZazgjY+dpoyn06CRFPM/1msfJFjqWjO7vWchyXci2RnNo8YfZvws6W155Vij+1sobc8Spq0m46V6sohVO7kX2bbOGC1sk9ePoSpAy2/SAea3VloNTwY/VZIck+feAGkiSfo0FS8KdQPAjr8SLJIVdsaXyxmVh3Ov3OCRJiqmAjt7YvzgJHx0dWwGDcz4kKWov47KwRhKyASLOfcp59pjyndEQHuycRvsx41Dl+5CkcIHLUoPBNcezJ6y7vw9T/gm88XXdqGX9K13hp7whtWGOO8LbSy52YGbUyOfTn0B98PpcqLv5C+FFksKjFcDDMAUd/1wPSVKClrzWZJTiYEkdPBvvQSmCk0g82U4OSYqfqZUm7ZFQixQpDpbUgR+2DEEKGwEEhCC3Q5L0YEKqakdpCwEV8DMMnTuBStg05BFeMYMyWAvNqk7VHXGigp/DpChpV7+Wnav0bJ2X2bdWk3SqgyV18CJJ8aPyrK/ljyZ0f0ys0kB1frXuYEkd/EhS9Hw2CyQ2EDskyW8RPYHv7fLV7hpSAC+SFG0+aoHExXSomuy7eK7sfMLKBnSrAZTCzxwhTA0LRPLF4ZCk6ceBOtVH1VLFvSB2tie8SFKOqgwTN7dwOCRpkGW9B+XaoodTVnKs2oMldfBs7e1y7IPs8AkiDUxRzVVIOgnvNaYhLa+shPbVB0vqYGlMJoXLKUGirIkL3X/jtQWdZCIVVbfULKqEvX6rUNQO4rOpjXBxQ0XBYYdDkp7y41l4fCdwBftzLv7LnpD+YEklPFt765eKLMDqcEhSOVQZxGH7EM95/1bABakEiUj1oD/8SFKKzn47yCbfoWqylh9fTsfR4sYS4zm/m4WSkS3vP5eDJXXwpFOQLEMTQiKQwyFJTU8hyuIiP76d3p31T/Yy6+TybjHvxbL9XOaZ8y7pvvA9C0IrQ229smsgVZOm9IclPx4kadzJw16eZkGwOv42jzOpYK14QrDjxPPAM+DJjmmrgxE3N3A4JIm1w2tFa6g+trwtbn7DUNQOfnlW7c4VHo/jQPf/DcR5pT5Eu+hc4Mn5YudE1WDtlV2FQ9WkWnNRROU97HiwpA6+SXxVOYOUveFA93eMUwLk5RmnMcRYCPhnxgoDOVTHuUstaIdDkp49bpdUfHsSikoGh0Is0Hj5kaQY7bUCTtzcAiehjWl60g5Pj0pBMUsny3tp4jaQfsobs8mrkJZrnpBolKm3sPwrZOhVNBsJG2vSjEiv+TKNFPqClVzscKY/JOm5CRq9ijQljZdUvAFkkPmc2LMC0bPlN9l7ZVfhcEiS0p5jKKoLlChF1WG7sAW6TyepA03cnBM3t2B0f4NUdYne21FU48DssGtVFgi3gfRjz5N6hCfImXEOdH99kBIgnOgergp2w8S0Lx1S2iFZ3GPIpWpSZVpjRL265c2eraudgG0gPfkt5LyQPUCv7CpYd3+Tw0gMHQWCRj6eyT+l9QPbQHqeTio6zk7zGpdDklwpjA3E84a/RQrNtUIeSjy/PKs0bi63+xwOSZIdqccR9JpCgtH8tdXNkHzoy9lm62YD+enIDockCfcmgbnPPzPatalRaJV5kqRkpxMphKrDIUnPknRLO6ZRpV6k+iwR9HueJCnqlW6+WM7pI08yidSR91xEWWi2YVgoSl9QBNtA+pGkRHw6hXfPqiZNWeGbeeg1G1GcTyzLmxZoqF0CuIl9lbcgRioibm7gdkhS/yrKVbmUJyy3xJFV5jOavzj2XHokrIz3VN6CAiWFO+R8SNLZ1WOIczWmD8vyeAD+n60zByINroz3VN79MCKIFe6QxyFJBxeHD1HYScVEj7RoLeCOpTR/0P/DCiT2fJX3weMRQaBIWM16IcJHtokvbq5mediJE3TgWpSknTB4OGRu2uAj/Jiw59J/oQ3+sOdJkvoD4mJ4PZi1ijDvpGmWJMG2NUSSZFncyYvO/GE69Eto/h9KnFwO764ni9tRuz2bzdqjh8HV9HB4+Yeehf8B4Q5fX9r2YukAAAAASUVORK5CYII=" alt="" />
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAR4AAACwCAMAAADudvHOAAAA21BMVEXrABv3nhv/////XwDqAAD3mAD/YgD/WgD2lgD/XQD3oRzrABr3oBzrABf3mgD3nRjrABD6w4T8UwjqAAn4rU38eA75jxb84uT5ycz83Ln//Pn++PD6v3zrCCD4qkPzMxP7gRH4lhjtOETwZW31o6f4vL/5uWzvU1z7zp34pTX71q7ye4H71dfzjZL95cz6ztH+8OL4Rw39bwr6hhPtJzb6yJH+8PHuSFLxcnn3sLP1mp/5tF/1OxH97Nn4pzvwJBbuPEjsGiz0kZbzhYrtLDnyeH/wYGjvUVvxa3Mr1fK/AAAKPklEQVR4nO2da1viRhiGhzjRUCCJhS4QgXY5g4i0K6BSXFGX7v//RZ0kgAFyPjyZXNc+n5QPO3Lve5wjEeKTVq31nt87g/bDZtMkzc1De9B5fOv27hcxDnLQbFofzhv9VWs0KuaKxdGoterPh/XpLM5BSDz/TLV3NyBUV1lVS6VCgZBCoVBS1bLxIf3oPNdig3QzHfZHIpMsywpTzpD+kyyzT6Xial6/iWeoGPDU3pY6AbVEHFUo6Zg2j0/VqIPNxv2ixLjsmNiKYWKM+uMY7CginmpXR6MWnMlYpDNq3vZCD6bVGwozGTcyFkbMkuR+VCuKgqf6tvGNxopoG4aQVl9JftF8IhKlyjgKodB4Fs8PlLr4k4unqZQ+3gcbbdqXxGBoDogYoboW9luGxNMbhGSzI1Smm2ffofpmrohyKDZ7QmJjHe57hsLTbVI1PBtTJUp/TvwMNl1JAX3KRrLUqof5psHxaG+RDOfIhJY1r9HqLyGd6lSKmBsnj0e7ozRYMHaTStuugOqjmOCYgJTAgALiiRWOCWjp6GLTkRQfHBNQMaCLBcLTjRuOCWhrG6RnlRgt5xPQaJoQnslDAnB0lend2WBaI2bLOQCSVgEKIf94HuMJyHYq0OZJCKrLUTK5u2RpGDueXpkmBUdXiXYspdtNJSHT2Ul88duO+cOjbZMznZ3K9GBA4wSCzrEUvwbkC8+9Wk4YDtEN6NH8r1iJCcPRJbZ8RSA/eO4SNx1TdFMVhLWSXNSxShH95HhvPIvXRKOOVSX6NEw26lglXceAZxK9vQrA5/dLpYjCkxMrnp28F54nkGMZ+n55kc9//Q3GR855ZTAPPHcJVYK2+vPy4uIif/UFx0eRPGpodzwdWNhh+lenw3T1DccnJ7l3qa54lkg6f+/oMD5/IfnMw+Jpp0OH8fkDyEd0S2DOeLQHQC1oSwfNpxEGT4p0+OHjiOcjTTrc+JcTnpSisoUPMj6LTh2qA55tGhn9hA8P+d0ezy2Szp+2dBifL7j+IudQH9ri6SLpfHegwwror0A+om1/YYfnHkmn4ASH4bkE4lEUu/7UBs8C2YWS353xXOT/AYYfueIPzwdwBsM2aVnCDzR92aT3czyPPITldMLz+fzhGZ4ekk7Jg85FPo+jw+znbP75FM8COcHjGnhSCD9KywvPEhl47OvBE/f6hszup9XzCR5OKp4j+wHOPp9VP8d4sK515YdOuu51jGeAbNP9uBbevcbOePjKWp8C4jnJXkd4StBy2TeePHLuR+474bnjLy7v3AvZm0prezw8xuWd+aQWnS14fiLjslc3cWI+yN7CujfhE08V6VokH4QO2HxGdni2/BpPeuZDsmA8aPMpnuPp8Gw8qZnPHs8CajxB0lYa5jM6xfPOa81zMB/ovPz0GI/G2TSPjfkgS2dldYyHw4mMMz44Oqx0nh3heUB2W+7T7454/gJ6lzy34plAA3MYOPqqF9K7ZCueW76zuqk0grOJh/vAbJhPCvMaBh7oNFghpPEwAfHkJO2Ah+Ne3aoUKmeSGd9Clz79PZ4aNG+F9y1o7sqJezxcbHbyI3zu0vE0+a8Jd+YDrQyvTTx8z/Qc4YHP+hD90A2QToDVLTs+6BUvkpm0rgue2kmGQk8KwYdwP094hAcafF50PNCqJ0JHYeDBVj4aw/PM/0zYp65gB3F1PGuGZ8vbfjBXPNDYPGZ4NtmJzMy7kHt9WGwmAjQyh+9Hd3igXWlFINiaOSIdeN1MspS40KlLEgi0pYiauFhshrYVM/KWMTzYOQ3yIzsdl4EH23WRTJU9YDzymCyzVPagC58hycDy8REe7FIyaQLpRK4K0XgaSDix4PkDeb60nz080LWuX3jc8Kwyhwe7Qf4XHjc8L5nLXGDraWZj+8EBD3bChzz8wuOMZ0XaGauawXXPgJ8rIXzhQVbNSoN0stWxg+fiCXRTagwTGuCOHTpbmLHpMHlMMnBc4AgPeDKV17PrTniwq8gEe14gemiGLuTckCztXwH3FDlRIEI5S2Uztmh+YXigN/ZE3oKAnUtleDJxGmcvbF4fMjyZWkVGb/wm4KNuUZ0Lm7j0nakZOXBi0EHv+2Z4XrMTm7GRuW/ggV7bk6Vt32MDD3QDVLS24goHx7yFjqCP+Eepm7GhR9kdWMpM8IGHHgNPZjZ+Y6ue+g4PdnNqlOADP4psHLUlvNxf7S70puY9HujtNFk5qD0+4MlIX4HuKA6XREBPvGXikgjTt3Z4MrFckcb1YSaeLBysSOGQ/+F6owxMGaInCq14MrCcA13C2d8ru795DnsXcRjjSeVa2T0e7hsLfENhxcN7257SraCHS0E5r5xTqJiP8GAvsw58pSz02jlFOMPD9y0+KRmPBQ/P5oM1ns/7iK2XoXMcfdIyHisefpNXanehHz3EwO1GMexDDFMHPNiLZXl9xmMlOOGBTov577ywVxE7PwKDffiOzyeEjl/oOsajQR+V5PEBqhfBBQ92YoPD58sk1+fLBKGT9lPRPLmWzcuSZb7ci7OnE7Ev/npnL+zLgJ4Pb3K23Ye7Z1sFYYncqpq5R38FrcBL+OHyyWihiuxNSy50uHxwnJfqJ5/qg60ueLDrFk7hOb0+3QuP8CP95uvqCzDwSGN7Dg54hG3a1fPVN2TSOq2WvfAIy3T5pJ7SPfAIr2nywdJpOEJwxpOm/fBCxw1Penw48SwPPGnFZ2hUluZuBFzxpJLf81xkdF94WH0I7C+M+jCf/4qjo4j21aBfPKy/APan3/U+C9hJyDnbTiIAHqHaBDpY6e/LIo6OWLHrQoPhEYQBzMFUWquLqC2EintQ9o1H6IIcjLYXgjAbyRA6suwRdnzjEaobgIOV6J05WkMCGJAPx/KNR8/wSRsQbU72g03lpA1I8cjnQfEI981EI5BKby2Daf1kDUiqnC1JRMSj745KbOd8gX5MjgebFsXE4MiyT9MJhEeoLhPyMEq756MNpWQ8TJEavqJOYDysRiwk4GFl+sP2771JwsMUsbUO8o0D4dGbjJgBqXRbdRpsvYoZkCKOzlf64sSjH/2K0cXKdOAIxwBUiRGQIhYDwgmBR9Cey/EAKlDacYVjAFrFFIOCW044PExPDzTylVolSt894eiaNUQ5qgkpsrTyUySfKRQeQZj8pFHyPDOcD5ts5SBtWBSjmJAsynOv1txBIfGwv/lpGZJQocwMZ+I9glXrhhiSkCyK/VCGYyg0HqZF95UG9TKVUnpbCzPaVCcUzMsUnU09QJlzpih4mBZPzMuovx1lBR1N+y2g3Vg1nY98I9LRFK/D242piHh0TbqdpsHI2Y5KOhn6eldbRB3spj5viRJj5AKJkZHEl0bdb2Plohjw6FrUuo8f1FBZVdWSKVUtm581/3t/8pWmfElbj68rRUliliQzTgex3xgYSa5cj9dRPMqimPCYWkx63bf3n9vB8rX90X59HXRu37q9+/jAWKXNpvXhvNFfVVqtl1Zlteo35sPxdBYTGFP/A5kMeuW7srSBAAAAAElFTkSuQmCC" alt="" />
                    <img src="data:image/png;base64,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" alt="" />
                </div>
            </div>
            
        
    </>
  )
}

export default Footer;