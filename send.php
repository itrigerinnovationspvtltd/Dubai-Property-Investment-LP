<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

$rawInput = file_get_contents('php://input');
$data = json_decode($rawInput, true);

if (!$data) {
    $data = $_POST;
}

$name = isset($data['name']) ? trim($data['name']) : '';
$whatsapp = isset($data['whatsapp']) ? trim($data['whatsapp']) : '';
$email = isset($data['email']) ? trim($data['email']) : '';
$budget = isset($data['budget']) ? trim($data['budget']) : '';
$timeline = isset($data['timeline']) ? trim($data['timeline']) : '';
$source = isset($data['source']) ? trim($data['source']) : 'Landing Page';

if ($name === '' || $whatsapp === '' || $budget === '') {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Missing required fields']);
    exit;
}

$to = 'YOUR_LEAD_EMAIL@example.com'; // TODO: replace with your email
$subject = 'New Dubai Property Lead - ' . $source;

$body = "New Dubai Property Investment Lead\n\n";
$body .= "Name: {$name}\n";
$body .= "WhatsApp: {$whatsapp}\n";
$body .= "Email: {$email}\n";
$body .= "Budget Range: {$budget}\n";
$body .= "Investment Timeline: {$timeline}\n";
$body .= "Source: {$source}\n";
$body .= "Submitted At: " . date('Y-m-d H:i:s') . "\n";

$headers = "From: no-reply@yourdomain.com\r\n";
$headers .= "Reply-To: " . ($email !== '' ? $email : 'no-reply@yourdomain.com') . "\r\n";

// Send email (configure your server for mail sending)
@mail($to, $subject, $body, $headers);

// Build WhatsApp URL (to your company WhatsApp number) so the frontend can open it.
$companyWhatsAppNumber = 'YOUR_COMPANY_WHATSAPP_NUMBER_WITH_COUNTRY_CODE'; // e.g. 9715XXXXXXXX
$waNumber = preg_replace('/\D+/', '', $companyWhatsAppNumber);
$waMessage = "Hi, I'm interested in Dubai property investment options.%0A%0A";
$waMessage .= "Name: " . rawurlencode($name) . "%0A";
$waMessage .= "WhatsApp: " . rawurlencode($whatsapp) . "%0A";
if ($email !== '') { $waMessage .= "Email: " . rawurlencode($email) . "%0A"; }
$waMessage .= "Budget: " . rawurlencode($budget) . "%0A";
if ($timeline !== '') { $waMessage .= "Timeline: " . rawurlencode($timeline) . "%0A"; }
$waMessage .= "Source: " . rawurlencode($source);

$whatsappUrl = '';
if ($waNumber !== '') {
    $whatsappUrl = "https://wa.me/" . $waNumber . "?text=" . $waMessage;
}

echo json_encode([
    'success' => true,
    'message' => 'Lead captured successfully',
    'whatsapp_url' => $whatsappUrl
]);
exit;

