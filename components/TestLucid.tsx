export default function TestLucid() {
    const testWallet = async () => {
        const Lucid = await import('lucid')
        console.log(Lucid)
        console.log(
            await Lucid.Lucid.initialize(
                'Testnet',
                new Lucid.Blockfrost('https://cardano-testnet.blockfrost.io/api/v0', '<BlockfrostKey>'),
                )
        )
        console.log(
            await Lucid.Lucid.selectWallet('nami')
        )
        
        const tx = await Lucid.Tx.new()
            .payToAddress("addr_test1qrdjl7zcjfna4qav84we0wcdwhm0s3c3sgdpwhawfcmvrrvv8jytvrv8yfujgcy42txd8a34g0mhwnfqtgczghfhfl9q065lka", {lovelace: BigInt(5000000)})
            .complete();
        console.log(tx)

        const signedTx = (await tx.sign()).complete();
        console.log(signedTx)
        
        const txHash = await signedTx.submit();
        console.log(txHash)
    }
    return (
        <>
            <button onClick={testWallet}>
                Test
            </button>
        </>
    )
}