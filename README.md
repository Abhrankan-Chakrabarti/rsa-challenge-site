# RSA Challenge Website

This repository hosts an interactive **RSA challenge website**.  
Each challenge presents a real RSA modulus from the historical RSA Factoring Challenge, along with a ciphertext.  
Your goal is to recover the original plaintext.

---

## 🔐 What each challenge provides

Each RSA entry includes:

- **Modulus** `n` (decimal)
- **Public exponent** `e`
- **Ciphertext** `c`
- **SHA-256 hash of the plaintext**

The plaintext itself is **not included** — solvers must reconstruct it by:

- factoring `n`,
- computing the private exponent,
- decrypting the ciphertext,
- verifying via SHA-256.

Validation happens entirely in your browser using JavaScript.  
**No plaintext or guess is sent over the network.**

---

## 📁 Repository Structure

| File | Description |
|------|-------------|
| `index.html` | Main RSA challenge interface (client-side validation). |
| `rsa_all_ciphertexts_hashed.json` | Moduli, exponents, ciphertexts, and plaintext SHA-256 hashes. |
| `LICENSE` | MIT License. |
| `README.md` | Project documentation. |

---

## 🌐 Deployment (GitHub Pages)

Once the files are pushed to GitHub:
```
https://abhrankan-chakrabarti.github.io/rsa-challenge-site/
```
To deploy:

1. Go to **Settings → Pages**.
2. Set:
   - **Source:** `main` branch
   - **Folder:** `/ (root)`
3. Save.

Your site will automatically go live.

---

## 🔎 About the Challenge Data

The JSON file was generated using:

- The RSA Numbers list from Wikipedia  
- Deterministic plaintext generation (A–Z + spaces only)  
- Standard RSA encryption with **e = 9007**  
- SHA-256 hashing of plaintexts  

Factored moduli use `p × q` exactly as published.  
Unfactored RSA numbers are included as raw decimal integers.

The challenge list is sorted by **true bit-length** (computed from the decimal string) to reflect real cryptographic difficulty.

---

## 📜 License

This project is released under the **MIT License**.

You may fork, modify, or redistribute this repository freely.

---

## 👤 Author

Created by **Abhrankan Chakrabarti**.  
GitHub: https://github.com/Abhrankan-Chakrabarti