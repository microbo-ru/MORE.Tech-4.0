package com.zebra.controller;

import com.zebra.exception.ResourceNotFoundException;
import com.zebra.model.User;
import com.zebra.payload.ApiResponse;
import com.zebra.payload.WalletUpdateRequest;
import com.zebra.repository.UserRepository;
import com.zebra.security.CurrentUser;
import com.zebra.security.UserPrincipal;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping("/user/me")
    @PreAuthorize("hasRole('USER')")
    public User getCurrentUser(@CurrentUser UserPrincipal userPrincipal) {
        return userRepository.findById(userPrincipal.getId())
                .orElseThrow(() -> new ResourceNotFoundException("User", "id", userPrincipal.getId()));
    }

    @PostMapping("/user/wallet")
    public ResponseEntity<?> postWallet(@CurrentUser UserPrincipal userPrincipal, @Valid @RequestBody WalletUpdateRequest walletRequest) {

        User user = userRepository.findById(userPrincipal.getId())
                .orElseThrow(() -> new ResourceNotFoundException("User", "id", userPrincipal.getId()));

        user.setWalletPrivateKey(walletRequest.getWalletPrivateKey());
        user.setWalletPublicKey(walletRequest.getWalletPublicKey());

        userRepository.save(user);

        return ResponseEntity.ok(new ApiResponse(true, "Wallet properties are saved." ));
    }
}
