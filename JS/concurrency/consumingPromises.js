// import state from "./promises.js";

// const checkStock = () => {
//     return new Promise((resolve, reject) => {
//         if(state.stock.water >= 250 && state.stock.flour >= 250) {
//             resolve('Roti berhasil dibuat');
//         } else {
//             reject('Kurang bahan!');
//         }
//     });
// }

// const handleSuccess = (resolvedValue) => {
//     console.log(resolvedValue);
// };

// const handleFailure = (rejectValue) => {
//     console.log(rejectValue);
// };

// checkStock().then(handleSuccess, handleFailure);



const exam = {
    students : 9,
    kelas : 3
};

const checkRules = () => {
    return new Promise((resolve, reject) => {
        if(exam.students >= 10 && exam.kelas >= 2) {
            resolve('Ujian dapat dilaksanakan!');
        } else {
            reject('Jumlah murid atau kelas kurang!');
        }
    });
}

const handleSuccess = resolveValue => {
    console.log(resolveValue);
}

const handleFailure = rejectionReason => {
    console.log(rejectionReason);
}

checkRules()
    .then(handleSuccess)
    .catch(handleFailure); // menggunakan catch akan membantu kita untuk membuat kode lebih rapi dan menerapkan konsep separation of concerns.


const carAcc = {
    tire : 4,
    door : 5,
    steer : 1
};

const checkCar = () => {
    return new Promise((resolve, reject) => {
        if(carAcc.tire == 4 && carAcc.door >= 5 && carAcc.steer == 1) {
            resolve('Aksesori mobil lengkap, silahkan digunakan');  
        } else {
            reject('Aksesori tidak lengkap, silahkan tukar');
        }
    });
}

const handleResolve = resolveVal => {
    console.log(resolveVal);
};

const handleReject = rejectedReason => {
    console.log(rejectedReason);
};

checkCar()
    .then(handleResolve)
    .catch(handleFailure)