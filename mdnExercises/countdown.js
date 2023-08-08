/*  Loops from 10 down to 0
    If number is 10, print "Countdown 10"
    If number is 0, print "Blast off!"
    For any other number, print the number only
    Remember to use the --decrement *before* the final-expression
    */

    for (let i = 10; i >= 0; i--) {
        if (i == 10) {
            console.log(`Countdown ${i}`)
        } else if (i == 0) {
            console.log('Blastoff!')
        } else {
            console.log(`${i}\n`)
        }
    }
/*  Have a list of admitted guests and a list of refused guests
    Log both lists to console with a line in between
    Screw Lola and Phil 
*/

    const people = ['Chris', 'Anne', 'Colin', 
                    'Terri', 'Phil', 'Lola', 'Sam', 
                    'Kay', 'Bruce']
    let admitted = 'Admitted:'

    let refused = 'Refused:'

    for (let i = 0; i < people.length; i++) {
        if (people[i] == 'Lola') {
            refused += ' ' + people[i] + '.'
        }
        else if (people[i] == 'Phil') {
            refused += ' ' + people[i] + ','
        }
        else if (i == people.length - 1) {
            admitted += ' ' + people[i] + '.'
        }
        else {
            admitted += ' ' + people[i] + ','
        }
    }

    let guestList = `${admitted}\n\n${refused}`

    console.log(guestList)

    // let i = 5
    // while (i) {
    //     alert(i)
    //     i--
    // }

    for (let num = 0; num <= 10; num++ ) {
        if (num % 2 == true) {
            continue
        } else {
            console.log(num + '\n')
        }
    }

    // let i = 0

    // while (i < 3) {
    //     alert( `number ${i}!`);
    //     ++i
    // }

    let userInput;

    for (;;) {
        userInput = prompt('Enter a number greater than 100')
        if (userInput > 100) {
            alert('Thank you for your cooperation.')
            break
        } else {
            alert('Noncompliance will not be tolerated.\n\nSUBMIT,  HUMAN.')
        }
    }
