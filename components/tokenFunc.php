<?php

function verificarToken($token_key) {
    if (!isset($_SESSION[$token_key]) || !isset($_SESSION[$token_key . '_exp']) || $_SESSION[$token_key . '_exp'] < time()) {
        unset($_SESSION[$token_key]);
        unset($_SESSION[$token_key . '_exp']);
        return false;
    }
    return true;
}

?>