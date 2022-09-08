<?php

$branch = shell_exec('git rev-parse --abbrev-ref HEAD ');
echo "\nWe are currently in the branch: \e[32m\e[1m" . $branch . "\n\e[0m";
echo "\nShowing git status\n";
$output = shell_exec("git add -A");
$output = shell_exec("git status");
echo $output;
$continue = readline("\e[1m\e[31mAre you sure you want to continue? (y/n): \e[0m");
if ($continue === 'n' || $continue === 'no') {
    exit("\n\nWorkflow stopped\n\n");
}

$commit_message = 'Katas ' . date('l d/m/Y');
$output = shell_exec("git commit -m '$commit_message'");
echo "\nPushing changes to GitHub into branch $branch!\n";
$output = shell_exec("git push origin $branch");
