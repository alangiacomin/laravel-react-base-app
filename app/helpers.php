<?php

if (!function_exists('transform_to_permalink')) {
    function transform_to_permalink(string $value)
    {
        // spazi in trattini
        $value = preg_replace("/([ ])/", '-', $value);
        // elimino caratteri extra
        $value = preg_replace("/([^-A-Za-z])/", '', $value);
        // tutto lowercase
        $value = strtolower($value);
        return $value;
    }
}
