const url = 'https://jsonplaceholder.typicode.com/users';

function manualLowercase(str) {
  let result = '';

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    let code = char.charCodeAt(0);

    // Kode ASCII untuk huruf uppercase dari 'A' (65) sampai 'Z' (90)
    if (code >= 65 && code <= 90) {
      // Konversi ke lowercase dengan tambah 32 ke kode ASCII
      result += String.fromCharCode(code + 32);
    } else {
      result += char;
    }
  }

  return result;
}

// Fetch API menggunakan fungsi fetch dengan then catch
fetch(url)
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    const emails = data.map((v) => {
      return v.email;
    });

    // Built in function lowercase
    console.log('===== Built in function lowercase =====');
    emails.forEach((el) => {
      console.log(el.toLowerCase());
    });

    // Manual lowercase
    console.log('\n===== Manual lowerase =====');
    emails.forEach((el) => {
      console.log(manualLowercase(el));
    });
  })
  .catch((error) => {
    console.log(error);
  });

// Fetch API menggunakan fungsi fetch dengan async/await
async function fetchData() {
  try {
    const res = await fetch(url);
    const data = await res.json();

    const emails = data.map((v) => {
      return v.email;
    });

    // Built in function lowercase
    console.log('===== Built in function lowercase =====');
    emails.forEach((el) => {
      console.log(el.toLowerCase());
    });

    // Manual lowercase
    console.log('\n===== Manual lowerase =====');
    emails.forEach((el) => {
      console.log(manualLowercase(el));
    });
  } catch (error) {
    console.log(error);
  }
}
fetchData();
