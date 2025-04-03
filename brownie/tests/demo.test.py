from brownie import MyContract, accounts

def test_deploy():
    account = accounts[0]
    contract = MyContract.deploy({'from': account})
    assert contract.value() == 0
