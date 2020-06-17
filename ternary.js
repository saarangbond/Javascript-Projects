let ages = [10, 17, 4, 25, 13, 16];

function canDrive(age) {
    return age >= 16 ? 'yes' : 'no';
}

for (let i = 0; i < ages.length; i++) {
    console.log(ages[i], canDrive(ages[i]));
}

