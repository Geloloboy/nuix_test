const signInButton = "#gc-custom-header-nav-bar-acct-menu"
const memberWalletInfo = "data-stid='member-wallet-info'"
const memberWalletDetails = "data-stid='member-wallet-details'"

export const openHomePage = async () => {
    await browser.url("")
}

export const verifyMemberInfoExists = async () => {
    await $(signInButton).click()
    expect($(memberWalletInfo)).toBeExisting()
    expect($(memberWalletDetails)).toBeExisting()
}