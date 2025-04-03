sh -c "$(curl -sSfL https://release.anza.xyz/stable/install)"

solana --version

export PATH="/home/codespace/.local/share/solana/install/active_release/bin:$PATH"

solana-keygen new --outfile my-keypair.json

@kudo-2003 ➜ /workspaces/blockchain-JS/solana (main) $ solana address
2iHCjtTQrjZcQGY9aCsYesYPJh6jkUS6Gh2seaabuGTm

****
@kudo-2003 ➜ /workspaces/blockchain-JS/solana (main) $ solana config get
Config File: /home/codespace/.config/solana/cli/config.yml
RPC URL: https://api.mainnet-beta.solana.com 
WebSocket URL: wss://api.mainnet-beta.solana.com/ (computed)
Keypair Path: /home/codespace/.config/solana/id.json 
Commitment: confirmed 
@kudo-2003 ➜ /workspaces/blockchain-JS/solana (main) $ 