<?php

namespace App\Controller;

use eZ\Publish\API\Repository\ContentTypeService;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class UtilityController extends AbstractController {

	private $contentTypeService;

	public function __construct(ContentTypeService $contentTypeService) {
		$this->contentTypeService = $contentTypeService;
	}
	public function contentObjectDumpAction(Request $request) {
		return $this->render('content_object_dump.html.twig');
	}
	public function contentObjectViewAction(Request $request) {
		return $this->render('content_object_dump.html.twig');
	}

}
