package com.zebra.payload;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

public class WalletUpdateRequest {

    @NotBlank
    private String walletPrivateKey;

    @NotBlank
    private String walletPublicKey;

    public String getWalletPrivateKey() {
        return walletPrivateKey;
    }

    public void setWalletPrivateKey(String walletPrivateKey) {
        this.walletPrivateKey = walletPrivateKey;
    }

    public String getWalletPublicKey() {
        return walletPublicKey;
    }

    public void setWalletPublicKey(String walletPublicKey) {
        this.walletPublicKey = walletPublicKey;
    }

}
