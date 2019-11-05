Page({
  data: {
    value: null, // 上次计算后的结果，null表示没有上次计算的结果
    displayValue: '0', // 显示数值
    operator: null, // 上次计算符号，null表示没有未完成的计算
    waitingForOperand: false // 前一按键是否为计算符号
  },
  //  一些用于运算的函数，如加、减、乘、除
  onLoad: function(options) {
    this.calculatorOperations = {
      'key-divide': (prevValue, nextValue) => prevValue / nextValue,
      'key-multiply': (prevValue, nextValue) => prevValue * nextValue,
      'key-add': (prevValue, nextValue) => prevValue + nextValue,
      'key-subtract': (prevValue, nextValue) => prevValue - nextValue,
      'key-equals': (prevValue, nextValue) => nextValue
    }
  },

  /* AC操作，清除所有操作痕迹 */
  clearAll() {
    this.setData({
      value: null,
      displayValue: '0',
      operator: null,
      waitingForOperand: false
    })
  },

  //  仅仅清除屏幕上的数字（重新变为0）
  clearDisplay() {
    this.setData({
      displayValue: '0'
    })
  },
  //  处理3个功能键的点击事件
  onTapFunction: function(event) {
    //  获取点击的是哪个键，通过<button>标签的data-key属性设置key的值
    const key = event.target.dataset.key;

    switch (key) {
      case 'key-clear': //  处理AC点击事件
        //  如果屏幕上显示的不是0，仅仅清除数字，恢复到0
        if (this.data.displayValue !== '0') {
          this.clearDisplay();
        } else {
          //  如果屏幕上显示的是0，那么一切恢复到初始状态
          this.clearAll();
        }

        break;

      case 'key-sign': //  处理正负符号键的点击事件，如果是正数，前面加负号（-），否则去掉负号
        var newValue = parseFloat(this.data.displayValue) * -1

        this.setData({
          displayValue: String(newValue)
        })

        break;

      case 'key-percent': //  处理百分号按键的点击事件
        //  在这里需要计算小数部分的位数，因此，使用正则表达式将正数部分，包括最前面可能出现的负号（-）
        //  和小数点替换成空串，这样计算fixedDigits.length，就会直接获得待取百分比的数值的小数部分
        //  的长度了
        const fixedDigits = this.data.displayValue.replace(/^-?\d*\.?/, '')
        //  求百分比
        var newValue = parseFloat(this.data.displayValue) / 100
        //  更新displayValue变量，并保留实际的小数点位数，也就是取百分比后的小数位数等于原数值
        //  的长度+2，如6.23，去百分比后，就变成了0.0623了
        this.setData({
          displayValue: String(newValue.toFixed(fixedDigits.length + 2))
        });

        break;

      default:
        break;
    }
  },
  //  处理操作符按键的点击事件
  onTapOperator: function(event) {
    //  获取当前按了哪个操作符
    const nextOperator = event.target.dataset.key;
    const inputValue = parseFloat(this.data.displayValue);
    //  上次没有计算出任何结果，因此，当前value的值就是正在输入的值（inputValue）
    //  假设现在按键的顺序是：“4“，”+“，那么当前值就是4
    if (this.data.value == null) {
      this.setData({
        value: inputValue
      });
    } else if (this.data.operator) {
      // 假设现在按键的顺序是：“4“，”+“，”5“，”+“，在按第二次加号键时，会利用前面的操作符计算两个
      // 操作数的结果，因此，这时currentValue是4、inputValue是5，而计算完后，newValue是9
      const currentValue = this.data.value;
      //  根据点击的操作符按键计算结果
      const newValue = this.calculatorOperations[this.data.operator](currentValue, inputValue);

      this.setData({
        value: newValue,
        displayValue: String(newValue)
      });
    }

    this.setData({
      waitingForOperand: true,
      operator: nextOperator
    });
  },
  //  处理数字键的点击事件
  onTapDigit: function(event) {
    const key = event.target.dataset.key; // 根据data-key标记按键
    //  点击了小数点（.）按键
    if (key == 'key-dot') {
      // 在输入的数字后面加“.”
      this.setData({
        displayValue: this.data.displayValue + '.',
        waitingForOperand: false
      })
    } else {
      // 按下数字键，由于通过<button>标签的data-key属性传入的标识是key-0、key-1等形式
      // 所以需要去 key 的最后一个字符，才能获得当前点击的是哪个数字键
      const digit = key[key.length - 1];
      //  如果已经按下操作符键，在等待下一个输入的数字
      if (this.data.waitingForOperand) {
        this.setData({
          displayValue: String(digit), //  在屏幕上显示当前输入的数字（最高位数字）
          waitingForOperand: false
        })
      } else { // 第二次以及以后按数字键，直接将输入的数字接在以前输入数字的后面
        this.setData({
          displayValue: this.data.displayValue === '0' ? String(digit) : this.data.displayValue + digit
        })
      }
    }
  }
})