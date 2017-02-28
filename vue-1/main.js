// 观察者构造函数

// ES6
class Observer {
    constructor(data) {
        this.data = data;
        this.walk(data);
    }

    walk(obj) {
        let val;
        // 递归,让每个子属性都能 Observe
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                val = obj[key];

                if (typeof val == 'object') {
                    new Observer(val);
                }

                this.convert(key, val);
            }
        }
    }

    convert(key, val) {
        Object.defineProperty(this.data, key, {
            enumerable: true,
            configurable: true,
            get() {
                console.log('你访问了' + key);
                return val;
            },
            set(newVal) {
                console.log('你设置了' + key);
                console.log('新的' + key + ' = ' + newVal);
                if (newVal === val) return;
                val = newVal;
            }

        })
    }

}


// ES5
//
// function Observer(data) {
//     this.data = data;
//     this.walk(data);
// }
//
// let p = Observer.prototype;
//
// p.walk = function (obj) {
//     let val;
//     for (let key in obj) {
//         if (obj.hasOwnProperty(key)) {
//             val = obj[key];
//
//             if (typeof val == 'object') {
//                 new Observer(val);
//             }
//
//             this.convert(key, val);
//         }
//     }
// };
//
// p.convert = function (key, val) {
//     Object.defineProperty(this.data, key, {
//         enumerable: true,
//         configurable: true,
//         get: function () {
//             console.log('你访问了' + key);
//             return val;
//         },
//         set: function (newVal) {
//             console.log('你设置了' + key);
//             console.log('新的' + key + ' = ' + newVal);
//             if (newVal === val) return;
//             val = newVal;
//         }
//
//     })
// };

// let data = {
//     user: {
//         name: "wangyingjie",
//         age: "21"
//     },
//     school: {
//         name: "hzaspt"
//     }
// };
//
// let app = new Observer(data);