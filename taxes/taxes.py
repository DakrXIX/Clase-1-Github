from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/check_tax', methods=['POST'])
def check_tax():
    age = int(request.form['age'])
    income = int(request.form['income'])

    should_pay_tax = age >= 16 and income >= 1000

    result = "You have to pay taxes." if should_pay_tax else "You don't have to pay taxes."
    color = "#ff0000" if should_pay_tax else "#008000"

    return render_template('result.html', result=result, color=color)

if __name__ == '__main__':
    app.run(debug=True)
