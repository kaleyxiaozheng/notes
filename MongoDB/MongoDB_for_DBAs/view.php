<?php
/* @var $this InductionController */
/* @var $model Induction */
/* @var $form CActiveForm */ 

$model = new InductionRecords;

$cs = Yii::app()->clientScript;
$cs->registerCssFile(Yii::app()->controller->assetsBase . '/bootstrapSwitch/bootstrap-switch.css');
$session = new CHttpSession;

/*$currentlyEditedUserId = '';
if (isset($_GET['id'])) {
    $currentlyEditedUserId = $_GET['id'];
    if (isset(User::model()->findByPk($currentlyEditedUserId)->password)) {
        $password = User::model()->findByPk($currentlyEditedUserId)->password;
    }
}*/

$currentLoggedUserId = $session['id'];
//$company = Company::model()->findByPk($session['company']);

if (isset($company) && !empty($company)) {
    $companyLafPreferences = CompanyLafPreferences::model()->findByPk($company->company_laf_preferences);
}
?>
<style type="text/css">
   
	.induc-records {
		margin-bottom: 15px;
	}
	
	.induction-info, .password-border {
		margin-top: 15px;
	}
	
	.password-border {
		margin-left: 10px;
	}
	  
</style>
  
<?php
$form = $this->beginWidget('CActiveForm', array(
    'id' => 'inducteeform',
    //'action' => array('user/'.$action, 'role' => Yii::app()->request->getParam('role'),'id'=>$model->id),
    'htmlOptions' => array("name" => "inducteeform"),
    'enableAjaxValidation' => false,
    'enableClientValidation' => true,
    'enableClientValidation' => true,
    'clientOptions' => array(
        'validateOnSubmit' => true,
        'validateOnSubmit' => true,
    ),
));
?>
<?php    
foreach (Yii::app()->user->getFlashes() as $key => $message) {
        echo '<div class="flash-' . $key . '">' . $message . "</div>\n";
 }
?>
<table>
	<tr>
		<td>
			<h4 class = "induc-records">Induction Records</h4>
			
		</td>
	</tr>
	
	<tr>
		<td>
			<strong class = "asic-holder">ASIC Holder: Yes/No</strong>
			<br />
		</td>
	</tr>
	
	<?php foreach ($titles as $title) { ?>
	<tr>
		<td>
			<table class = "induction-info">
				<tr class = "induction-title">
					<td>
						<strong><?php echo $title->piece_of_induction_name ?></strong>
					</td>
				</tr>
		
				<tr>
					<td>
						<div class="password-border">
							<table class="no-margin-bottom">
								<tr>
									<td><strong>Induction Information</strong></td>
								</tr>
							
								<tr>
									<td>
										<table style=" margin-top:18px !important; width:253px; border-left-style:none; border-top-style:none">
											<tr>
												<td>
													<div style="display:inline-block;">Induction Required
														<div class="switch switch-blue">
															<input type="radio" class="switch-input is_required_induction_radio" name="Title[piece_of_induction_required]" value="0" id="week" 'uncheckValue'=null>
															<label for="week" class="switch-label switch-label-off">OFF</label>
															<input type="radio" class="switch-input is_required_induction_radio" name="Title[piece_of_induction_required]" value="1" id="month" <?php if(!empty($title->piece_of_induction_required) && ($title->piece_of_induction_required == "1")){echo 'checked'; }?>>
															<label for="month" class="switch-label switch-label-on">ON</label>
															<span class="switch-selection"></span>
														</div>
													</div>
												</td>
											</tr>    
                        
											<tr class="is_completed_tr">
												<td>
													Induction Completed &nbsp; <input type="radio" value="0" class="is_completed_radio" checked="checked" id="is_completed_radio_no" name="Title[piece_of_induction_completed]"/>&nbsp;No&nbsp;
													<input type="radio" value="1" class="is_completed_radio" name="Title[piece_of_induction_completed]" <?php if(!empty($induction->piece_of_induction_completed) && ($induction->piece_of_induction_completed == "1")){echo 'checked'; } ?>/>&nbsp;Yes 
											</td>
											</tr>
                                              
											<tr class="induction_expiry_tr" id="induction_expiry_tr_id">
												<td>
													Induction Expiry
													<?php $this->widget('EDatePicker', array(
														'model'     => $title,
														'attribute' => 'induction_expiry',
													)); ?>
													<br>
													<span class="required">*</span>
													<span id="induction_expiry_error" style="display:none;color:red;">
														Please select an expiry date
													</span>
												</td>
											</tr>                        
										</table>
									</td>
								</tr>
							</table>
						</div>
					</td>
				</tr>		
			</table>
		</td>
	</tr>
	<?php } ?>
</table>
<?php $this->endWidget(); ?>

<script> 
	
	$(".is_required_induction_radio").click(function(){
		var value=$(this).val();
		if(value == 1){
			$(".is_completed_tr").show();
			$("#is_completed_radio_no").attr("checked",true);
		}else{
			$("#induction_expiry_id").val("");
			$(".induction_expiry_tr").hide();
			$(".is_completed_tr").hide();
		}
	});

	$(".is_completed_radio").click(function(){
		var value=$(this).val();
		if(value == 1){
			$(".induction_expiry_tr").show();
		}else{
			$("#induction_expiry_id").val("");
			$(".induction_expiry_tr").hide();
		}
	});
	
	/*$('.switch switch-blue').on('click', '.switch-label switch-label-off', function(e){
		$(".switch-label switch-label-on").removeClass("toggle-selected");
		$(e.target).addClass("toggle-selected");
	});
	
	$('.switch switch-blue').on('click', '.switch-label switch-label-on', function(e){
		$(".switch-label switch-label-off").removeClass("toggle-selected");
		$(e.target).addClass("toggle-selected");
	});*/
</script>