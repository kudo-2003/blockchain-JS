const web3 = require("@solana/web3.js");

// Kết nối đến mạng Solana Devnet
const connection = new web3.Connection(web3.clusterApiUrl("devnet"), "confirmed");

// Tạo ví mới (hoặc sử dụng ví có sẵn)
const sender = web3.Keypair.generate();
console.log("Sender Address:", sender.publicKey.toBase58());

const recipient = new web3.PublicKey("REPLACE_WITH_RECIPIENT_ADDRESS");

// Tạo và gửi giao dịch
const transaction = new web3.Transaction().add(
    web3.SystemProgram.transfer({
        fromPubkey: sender.publicKey,
        toPubkey: recipient,
        lamports: web3.LAMPORTS_PER_SOL, // Gửi 1 SOL
    })
);

const signature = await web3.sendAndConfirmTransaction(connection, transaction, [sender]);
console.log("Giao dịch thành công, mã giao dịch:", signature);
